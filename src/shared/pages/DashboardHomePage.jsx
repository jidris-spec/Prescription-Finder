import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import {
  getPharmacyByUserId,
  getDoctorByUserId,
  getPrescriptionsByDoctor,
  getInventoryByPharmacy,
  getOrdersByPharmacy,
  getAllProfiles,
  getAllMedicines,
  getAllPharmacies,
  getVerifiedDoctors,
  getPrescriptionsByPatient,
  getDoseLogsByPatient,
  getPrescriptionItems,
  getMedicine
} from '@/shared/lib/firebase/db'
import { PatientDashboard } from '@/roles/patient/components/patient-dashboard'
import { DoctorDashboard } from '@/roles/doctor/components/doctor-dashboard'
import { PharmacistDashboard } from '@/roles/pharmacy/components/pharmacist-dashboard'
import { AdminDashboard } from '@/roles/admin/components/admin-dashboard'

export default function DashboardHomePage() {
  const { user, profile } = useAuth()
  const role = profile?.role || 'patient'
  const [pharmacy, setPharmacy] = useState(null)
  const [stats, setStats] = useState({})
  const [patientPrescriptions, setPatientPrescriptions] = useState([])
  const [scheduleStats, setScheduleStats] = useState(null)

  useEffect(() => {
    if (!user || !profile) return

    const fetchDoctorStats = async () => {
      try {
        const doctor = await getDoctorByUserId(user.uid)
        if (!doctor) return
        const prescriptions = await getPrescriptionsByDoctor(doctor.id)
        const activePrescriptions = prescriptions.filter(p => p.status === 'active')
        const uniquePatients = new Set(prescriptions.map(p => p.patient_id)).size
        setStats({
          totalPrescriptions: prescriptions.length,
          activePrescriptions: activePrescriptions.length,
          totalPatients: uniquePatients
        })
      } catch (error) {
        console.error('Error fetching doctor stats:', error)
      }
    }

    const fetchPharmacyStats = async () => {
      try {
        const pharmacyData = await getPharmacyByUserId(user.uid)
        setPharmacy(pharmacyData)
        if (!pharmacyData) return

        const [inventory, orders] = await Promise.all([
          getInventoryByPharmacy(pharmacyData.id),
          getOrdersByPharmacy(pharmacyData.id)
        ])

        const today = new Date().toISOString().split('T')[0]
        const filledToday = orders.filter(o =>
          o.filled_at && o.filled_at.startsWith(today)
        ).length
        const pendingOrders = orders.filter(o => o.status === 'pending').length
        const lowStock = inventory.filter(i => i.quantity > 0 && i.quantity <= 10).length

        setStats({
          totalItems: inventory.length,
          lowStock,
          pendingOrders,
          filledToday
        })
      } catch (error) {
        console.error('Error fetching pharmacy stats:', error)
      }
    }

    const fetchAdminStats = async () => {
      try {
        const [profiles, medicines, pharmacies, doctors] = await Promise.all([
          getAllProfiles(),
          getAllMedicines(),
          getAllPharmacies(),
          getVerifiedDoctors()
        ])
        setStats({
          totalUsers: profiles.length,
          totalMedicines: medicines.length,
          totalPharmacies: pharmacies.length,
          totalDoctors: doctors.length
        })
      } catch (error) {
        console.error('Error fetching admin stats:', error)
      }
    }

    const fetchPatientData = async () => {
      try {
        const prescriptions = await getPrescriptionsByPatient(user.uid)

        // Enrich prescriptions with medicine details for refill alerts
        const enriched = await Promise.all(
          prescriptions.map(async (p) => {
            const items = await getPrescriptionItems(p.id)
            let medicines = items.map(item => item.medicine).filter(Boolean)
            if (medicines.length === 0 && p.medicine_id) {
              const med = await getMedicine(p.medicine_id)
              if (med) medicines = [med]
            }
            return { ...p, medicines: medicines[0] || null }
          })
        )
        setPatientPrescriptions(enriched)

        // Calculate schedule stats for today
        const activePrescriptions = enriched.filter(p => p.status === 'active')
        const doseLogs = await getDoseLogsByPatient(user.uid, new Date())
        const totalDoses = activePrescriptions.length
        const taken = doseLogs.length

        if (totalDoses > 0) {
          setScheduleStats({
            taken,
            total: totalDoses,
            percent: Math.round((taken / totalDoses) * 100)
          })
        }
      } catch (error) {
        console.error('Error fetching patient data:', error)
      }
    }

    switch (role) {
      case 'doctor':
        fetchDoctorStats()
        break
      case 'pharmacy':
      case 'pharmacist':
        fetchPharmacyStats()
        break
      case 'admin':
        fetchAdminStats()
        break
      default:
        fetchPatientData()
        break
    }
  }, [user, profile, role])

  switch (role) {
    case 'doctor':
      return <DoctorDashboard profile={profile} stats={stats} />
    case 'pharmacy':
    case 'pharmacist':
      return <PharmacistDashboard profile={profile} pharmacy={pharmacy} stats={stats} />
    case 'admin':
      return <AdminDashboard profile={profile} stats={stats} />
    default:
      return (
        <PatientDashboard
          profile={profile}
          prescriptions={patientPrescriptions}
          scheduleStats={scheduleStats}
        />
      )
  }
}
