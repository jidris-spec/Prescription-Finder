-- Seed data for medicines catalog (Romanian medicines)
-- This provides a sample of common medicines for the MVP

-- Cardiovascular medicines
INSERT INTO public.medicines (brand_name, active_substance, strength, form, manufacturer, is_generic) VALUES
('Nebilet', 'Nebivolol', '5mg', 'tablet', 'Menarini', false),
('Nebivolol Teva', 'Nebivolol', '5mg', 'tablet', 'Teva', true),
('Nebivolol Zentiva', 'Nebivolol', '5mg', 'tablet', 'Zentiva', true),
('Concor', 'Bisoprolol', '5mg', 'tablet', 'Merck', false),
('Bisoprolol Teva', 'Bisoprolol', '5mg', 'tablet', 'Teva', true),
('Bisoprolol Zentiva', 'Bisoprolol', '5mg', 'tablet', 'Zentiva', true),
('Noliprel', 'Perindopril/Indapamide', '2.5mg/0.625mg', 'tablet', 'Servier', false),
('Co-Prenessa', 'Perindopril/Indapamide', '2.5mg/0.625mg', 'tablet', 'KRKA', true),
('Prestarium', 'Perindopril', '5mg', 'tablet', 'Servier', false),
('Perindopril Teva', 'Perindopril', '5mg', 'tablet', 'Teva', true),
('Atoris', 'Atorvastatin', '20mg', 'tablet', 'KRKA', true),
('Sortis', 'Atorvastatin', '20mg', 'tablet', 'Pfizer', false),
('Atorvastatin Zentiva', 'Atorvastatin', '20mg', 'tablet', 'Zentiva', true),
('Crestor', 'Rosuvastatin', '10mg', 'tablet', 'AstraZeneca', false),
('Rosuvastatin Teva', 'Rosuvastatin', '10mg', 'tablet', 'Teva', true);

-- Diabetes medicines
INSERT INTO public.medicines (brand_name, active_substance, strength, form, manufacturer, is_generic) VALUES
('Glucophage', 'Metformin', '500mg', 'tablet', 'Merck', false),
('Metformin Zentiva', 'Metformin', '500mg', 'tablet', 'Zentiva', true),
('Metformin Teva', 'Metformin', '500mg', 'tablet', 'Teva', true),
('Siofor', 'Metformin', '850mg', 'tablet', 'Berlin-Chemie', false),
('Glucophage XR', 'Metformin', '750mg', 'tablet extended release', 'Merck', false),
('Januvia', 'Sitagliptin', '100mg', 'tablet', 'MSD', false),
('Forxiga', 'Dapagliflozin', '10mg', 'tablet', 'AstraZeneca', false),
('Jardiance', 'Empagliflozin', '10mg', 'tablet', 'Boehringer Ingelheim', false);

-- Pain relief and anti-inflammatory
INSERT INTO public.medicines (brand_name, active_substance, strength, form, manufacturer, is_generic) VALUES
('Nurofen', 'Ibuprofen', '400mg', 'tablet', 'Reckitt Benckiser', false),
('Ibuprofen Zentiva', 'Ibuprofen', '400mg', 'tablet', 'Zentiva', true),
('Advil', 'Ibuprofen', '400mg', 'tablet', 'Pfizer', false),
('Paracetamol Zentiva', 'Paracetamol', '500mg', 'tablet', 'Zentiva', true),
('Panadol', 'Paracetamol', '500mg', 'tablet', 'GSK', false),
('Efferalgan', 'Paracetamol', '500mg', 'effervescent tablet', 'Bristol-Myers Squibb', false),
('Ketonal', 'Ketoprofen', '100mg', 'tablet', 'Sandoz', false),
('Diclofenac Teva', 'Diclofenac', '50mg', 'tablet', 'Teva', true),
('Voltaren', 'Diclofenac', '50mg', 'tablet', 'Novartis', false);

-- Antibiotics
INSERT INTO public.medicines (brand_name, active_substance, strength, form, manufacturer, is_generic) VALUES
('Augmentin', 'Amoxicillin/Clavulanic acid', '875mg/125mg', 'tablet', 'GSK', false),
('Amoxiclav Zentiva', 'Amoxicillin/Clavulanic acid', '875mg/125mg', 'tablet', 'Zentiva', true),
('Ospamox', 'Amoxicillin', '500mg', 'capsule', 'Sandoz', false),
('Amoxicillin Teva', 'Amoxicillin', '500mg', 'capsule', 'Teva', true),
('Azitromicina Zentiva', 'Azithromycin', '500mg', 'tablet', 'Zentiva', true),
('Sumamed', 'Azithromycin', '500mg', 'tablet', 'Pliva', false),
('Ciprinol', 'Ciprofloxacin', '500mg', 'tablet', 'KRKA', true),
('Ciprobay', 'Ciprofloxacin', '500mg', 'tablet', 'Bayer', false);

-- Gastrointestinal
INSERT INTO public.medicines (brand_name, active_substance, strength, form, manufacturer, is_generic) VALUES
('Nexium', 'Esomeprazole', '40mg', 'tablet', 'AstraZeneca', false),
('Esomeprazol Zentiva', 'Esomeprazole', '40mg', 'tablet', 'Zentiva', true),
('Controloc', 'Pantoprazole', '40mg', 'tablet', 'Takeda', false),
('Pantoprazol Teva', 'Pantoprazole', '40mg', 'tablet', 'Teva', true),
('Omez', 'Omeprazole', '20mg', 'capsule', 'Dr. Reddy''s', true),
('Losec', 'Omeprazole', '20mg', 'capsule', 'AstraZeneca', false);

-- Respiratory
INSERT INTO public.medicines (brand_name, active_substance, strength, form, manufacturer, is_generic) VALUES
('Ventolin', 'Salbutamol', '100mcg', 'inhaler', 'GSK', false),
('Salbutamol Teva', 'Salbutamol', '100mcg', 'inhaler', 'Teva', true),
('Seretide', 'Fluticasone/Salmeterol', '250mcg/50mcg', 'inhaler', 'GSK', false),
('Symbicort', 'Budesonide/Formoterol', '160mcg/4.5mcg', 'inhaler', 'AstraZeneca', false),
('Pulmicort', 'Budesonide', '200mcg', 'inhaler', 'AstraZeneca', false);

-- Mental health
INSERT INTO public.medicines (brand_name, active_substance, strength, form, manufacturer, is_generic) VALUES
('Cipralex', 'Escitalopram', '10mg', 'tablet', 'Lundbeck', false),
('Escitalopram Zentiva', 'Escitalopram', '10mg', 'tablet', 'Zentiva', true),
('Zoloft', 'Sertraline', '50mg', 'tablet', 'Pfizer', false),
('Sertralina Teva', 'Sertraline', '50mg', 'tablet', 'Teva', true),
('Xanax', 'Alprazolam', '0.5mg', 'tablet', 'Pfizer', false),
('Alprazolam Zentiva', 'Alprazolam', '0.5mg', 'tablet', 'Zentiva', true);

-- Create equivalents (linking brand medicines to their generics)
-- Nebilet equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Nebilet' AND m2.brand_name = 'Nebivolol Teva';

INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Nebilet' AND m2.brand_name = 'Nebivolol Zentiva';

-- Concor equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Concor' AND m2.brand_name = 'Bisoprolol Teva';

INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Concor' AND m2.brand_name = 'Bisoprolol Zentiva';

-- Sortis equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Sortis' AND m2.brand_name = 'Atoris';

INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Sortis' AND m2.brand_name = 'Atorvastatin Zentiva';

-- Glucophage equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Glucophage' AND m2.brand_name = 'Metformin Zentiva';

INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Glucophage' AND m2.brand_name = 'Metformin Teva';

-- Nurofen equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Nurofen' AND m2.brand_name = 'Ibuprofen Zentiva';

INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Nurofen' AND m2.brand_name = 'Advil';

-- Augmentin equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Augmentin' AND m2.brand_name = 'Amoxiclav Zentiva';

-- Sumamed equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Sumamed' AND m2.brand_name = 'Azitromicina Zentiva';

-- Nexium equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Nexium' AND m2.brand_name = 'Esomeprazol Zentiva';

-- Cipralex equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Cipralex' AND m2.brand_name = 'Escitalopram Zentiva';

-- Zoloft equivalents
INSERT INTO public.medicine_equivalents (medicine_id, equivalent_medicine_id)
SELECT m1.id, m2.id FROM public.medicines m1, public.medicines m2 
WHERE m1.brand_name = 'Zoloft' AND m2.brand_name = 'Sertralina Teva';
