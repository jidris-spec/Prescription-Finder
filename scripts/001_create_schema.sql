-- Medication Finder Database Schema
-- This script creates all tables needed for the medication finder MVP

-- Profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('patient', 'doctor', 'pharmacist', 'admin')) DEFAULT 'patient',
  full_name TEXT,
  city TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Doctors table (additional info for doctor profiles)
CREATE TABLE IF NOT EXISTS public.doctors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  specialty TEXT NOT NULL,
  clinic_name TEXT,
  clinic_address TEXT,
  license_id TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Pharmacies table
CREATE TABLE IF NOT EXISTS public.pharmacies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  phone TEXT,
  hours TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(owner_user_id)
);

-- Medicines catalog
CREATE TABLE IF NOT EXISTS public.medicines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_name TEXT NOT NULL,
  active_substance TEXT NOT NULL,
  strength TEXT NOT NULL,
  form TEXT NOT NULL, -- tablet, capsule, syrup, etc.
  manufacturer TEXT,
  is_generic BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Medicine equivalents (generic alternatives)
CREATE TABLE IF NOT EXISTS public.medicine_equivalents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medicine_id UUID NOT NULL REFERENCES public.medicines(id) ON DELETE CASCADE,
  equivalent_medicine_id UUID NOT NULL REFERENCES public.medicines(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(medicine_id, equivalent_medicine_id)
);

-- Pharmacy inventory
CREATE TABLE IF NOT EXISTS public.inventory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pharmacy_id UUID NOT NULL REFERENCES public.pharmacies(id) ON DELETE CASCADE,
  medicine_id UUID NOT NULL REFERENCES public.medicines(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL CHECK (status IN ('in_stock', 'low', 'out')) DEFAULT 'out',
  price DECIMAL(10, 2) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(pharmacy_id, medicine_id)
);

-- Doctor-Patient connections
CREATE TABLE IF NOT EXISTS public.connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  doctor_id UUID NOT NULL REFERENCES public.doctors(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('pending', 'accepted', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(patient_id, doctor_id)
);

-- Prescriptions
CREATE TABLE IF NOT EXISTS public.prescriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  doctor_id UUID REFERENCES public.doctors(id) ON DELETE SET NULL,
  diagnosis TEXT,
  status TEXT NOT NULL CHECK (status IN ('active', 'completed', 'cancelled')) DEFAULT 'active',
  notes TEXT,
  is_manual BOOLEAN DEFAULT FALSE, -- TRUE if added by patient
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prescription items
CREATE TABLE IF NOT EXISTS public.prescription_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prescription_id UUID NOT NULL REFERENCES public.prescriptions(id) ON DELETE CASCADE,
  medicine_id UUID NOT NULL REFERENCES public.medicines(id) ON DELETE CASCADE,
  dosage TEXT NOT NULL, -- e.g., "1 tablet"
  frequency TEXT NOT NULL, -- e.g., "twice daily"
  duration_days INTEGER NOT NULL DEFAULT 30,
  quantity INTEGER NOT NULL DEFAULT 30,
  instructions TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Dose logs (tracking taken doses)
CREATE TABLE IF NOT EXISTS public.dose_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  prescription_item_id UUID NOT NULL REFERENCES public.prescription_items(id) ON DELETE CASCADE,
  scheduled_time TIMESTAMPTZ NOT NULL,
  taken_at TIMESTAMPTZ,
  taken BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prescription fulfillment
CREATE TABLE IF NOT EXISTS public.fulfillments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prescription_id UUID NOT NULL REFERENCES public.prescriptions(id) ON DELETE CASCADE,
  pharmacy_id UUID NOT NULL REFERENCES public.pharmacies(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('pending', 'ready', 'partial', 'unavailable', 'completed')) DEFAULT 'pending',
  note TEXT,
  substituted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(prescription_id, pharmacy_id)
);

-- Audit logs for critical actions
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id UUID,
  old_data JSONB,
  new_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pharmacies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medicines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medicine_equivalents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prescriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prescription_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dose_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fulfillments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Allow doctors to see connected patients' basic profiles
CREATE POLICY "doctors_view_connected_patients" ON public.profiles FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.doctors d
    JOIN public.connections c ON c.doctor_id = d.id
    WHERE d.user_id = auth.uid() 
    AND c.patient_id = profiles.id 
    AND c.status = 'accepted'
  )
);

-- Admin can see all profiles
CREATE POLICY "admin_view_all_profiles" ON public.profiles FOR SELECT 
USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

CREATE POLICY "admin_update_all_profiles" ON public.profiles FOR UPDATE 
USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- RLS Policies for doctors
CREATE POLICY "doctors_select_all" ON public.doctors FOR SELECT TO authenticated USING (true);
CREATE POLICY "doctors_insert_own" ON public.doctors FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "doctors_update_own" ON public.doctors FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "admin_update_doctors" ON public.doctors FOR UPDATE 
USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- RLS Policies for pharmacies
CREATE POLICY "pharmacies_select_all" ON public.pharmacies FOR SELECT TO authenticated USING (true);
CREATE POLICY "pharmacies_insert_own" ON public.pharmacies FOR INSERT WITH CHECK (owner_user_id = auth.uid());
CREATE POLICY "pharmacies_update_own" ON public.pharmacies FOR UPDATE USING (owner_user_id = auth.uid());
CREATE POLICY "admin_update_pharmacies" ON public.pharmacies FOR UPDATE 
USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- RLS Policies for medicines (everyone can read, admin can write)
CREATE POLICY "medicines_select_all" ON public.medicines FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin_insert_medicines" ON public.medicines FOR INSERT 
WITH CHECK (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "admin_update_medicines" ON public.medicines FOR UPDATE 
USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);
CREATE POLICY "admin_delete_medicines" ON public.medicines FOR DELETE 
USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- RLS Policies for medicine_equivalents
CREATE POLICY "equivalents_select_all" ON public.medicine_equivalents FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin_manage_equivalents" ON public.medicine_equivalents FOR ALL 
USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- RLS Policies for inventory
CREATE POLICY "inventory_select_all" ON public.inventory FOR SELECT TO authenticated USING (true);
CREATE POLICY "pharmacy_manage_own_inventory" ON public.inventory FOR ALL 
USING (
  EXISTS (SELECT 1 FROM public.pharmacies WHERE id = inventory.pharmacy_id AND owner_user_id = auth.uid())
);

-- RLS Policies for connections
CREATE POLICY "patients_view_own_connections" ON public.connections FOR SELECT 
USING (patient_id = auth.uid());
CREATE POLICY "patients_create_connections" ON public.connections FOR INSERT 
WITH CHECK (patient_id = auth.uid());
CREATE POLICY "doctors_view_own_connections" ON public.connections FOR SELECT 
USING (
  EXISTS (SELECT 1 FROM public.doctors WHERE id = connections.doctor_id AND user_id = auth.uid())
);
CREATE POLICY "doctors_update_own_connections" ON public.connections FOR UPDATE 
USING (
  EXISTS (SELECT 1 FROM public.doctors WHERE id = connections.doctor_id AND user_id = auth.uid())
);

-- RLS Policies for prescriptions
CREATE POLICY "patients_view_own_prescriptions" ON public.prescriptions FOR SELECT 
USING (patient_id = auth.uid());
CREATE POLICY "patients_create_manual_prescriptions" ON public.prescriptions FOR INSERT 
WITH CHECK (patient_id = auth.uid() AND is_manual = true);
CREATE POLICY "doctors_view_connected_patient_prescriptions" ON public.prescriptions FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.doctors d
    JOIN public.connections c ON c.doctor_id = d.id
    WHERE d.user_id = auth.uid() 
    AND c.patient_id = prescriptions.patient_id 
    AND c.status = 'accepted'
  )
);
CREATE POLICY "doctors_create_prescriptions" ON public.prescriptions FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.doctors d
    JOIN public.connections c ON c.doctor_id = d.id
    WHERE d.user_id = auth.uid() 
    AND c.patient_id = prescriptions.patient_id 
    AND c.status = 'accepted'
  )
  AND is_manual = false
);
CREATE POLICY "doctors_update_own_prescriptions" ON public.prescriptions FOR UPDATE 
USING (
  EXISTS (SELECT 1 FROM public.doctors WHERE id = prescriptions.doctor_id AND user_id = auth.uid())
);

-- RLS Policies for prescription_items
CREATE POLICY "view_own_prescription_items" ON public.prescription_items FOR SELECT 
USING (
  EXISTS (SELECT 1 FROM public.prescriptions WHERE id = prescription_items.prescription_id AND patient_id = auth.uid())
);
CREATE POLICY "doctors_view_prescription_items" ON public.prescription_items FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.prescriptions p
    JOIN public.doctors d ON d.id = p.doctor_id
    WHERE p.id = prescription_items.prescription_id AND d.user_id = auth.uid()
  )
);
CREATE POLICY "patients_manage_manual_items" ON public.prescription_items FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.prescriptions 
    WHERE id = prescription_items.prescription_id 
    AND patient_id = auth.uid() 
    AND is_manual = true
  )
);
CREATE POLICY "doctors_manage_prescription_items" ON public.prescription_items FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.prescriptions p
    JOIN public.doctors d ON d.id = p.doctor_id
    WHERE p.id = prescription_items.prescription_id AND d.user_id = auth.uid()
  )
);

-- RLS Policies for dose_logs
CREATE POLICY "patients_manage_own_dose_logs" ON public.dose_logs FOR ALL 
USING (patient_id = auth.uid());

-- RLS Policies for fulfillments
CREATE POLICY "patients_view_own_fulfillments" ON public.fulfillments FOR SELECT 
USING (
  EXISTS (SELECT 1 FROM public.prescriptions WHERE id = fulfillments.prescription_id AND patient_id = auth.uid())
);
CREATE POLICY "pharmacies_manage_fulfillments" ON public.fulfillments FOR ALL 
USING (
  EXISTS (SELECT 1 FROM public.pharmacies WHERE id = fulfillments.pharmacy_id AND owner_user_id = auth.uid())
);

-- RLS Policies for audit_logs
CREATE POLICY "admin_view_audit_logs" ON public.audit_logs FOR SELECT 
USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Trigger to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, role, full_name)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data ->> 'role', 'patient'),
    COALESCE(new.raw_user_meta_data ->> 'full_name', NULL)
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_connections_updated_at
  BEFORE UPDATE ON public.connections
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_prescriptions_updated_at
  BEFORE UPDATE ON public.prescriptions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_inventory_updated_at
  BEFORE UPDATE ON public.inventory
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_fulfillments_updated_at
  BEFORE UPDATE ON public.fulfillments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();
