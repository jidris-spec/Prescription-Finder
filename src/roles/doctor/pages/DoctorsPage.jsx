import { useState, useEffect, useCallback } from 'react'
<<<<<<< Updated upstream
import { Navigate, Link } from 'react-router-dom'
import { getAllDoctors, getVerifiedDoctors, getProfile } from '@/shared/lib/firebase/db'
=======
import { Navigate } from 'react-router-dom'
import { getAllDoctors, getProfile } from '@/shared/lib/firebase/db'
>>>>>>> Stashed changes
import { useAuth } from '@/context/AuthContext'
import { DoctorsManager } from '../components/doctors-manager'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Stethoscope, FileText } from 'lucide-react'

function DoctorsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="border border-border rounded-lg p-5 space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-9 rounded-lg" />
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-8 w-36 rounded-md" />
        </div>
      ))}
    </div>
  )
}

function DoctorDirectoryList({ doctors }) {
  if (doctors.length === 0) {
    return (
      <Card className="border-dashed border-border">
        <CardContent className="py-16 text-center">
          <Stethoscope className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No verified doctors registered yet</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {doctors.map(doctor => (
        <Card key={doctor.id} className="border-border">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">
                    Dr. {doctor.profiles?.full_name || 'Unknown'}
                  </CardTitle>
                  <CardDescription>{doctor.specialization || 'General Medicine'}</CardDescription>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                Verified
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground mb-3 space-y-1">
              {doctor.hospital_affiliation && (
                <p>{doctor.hospital_affiliation}</p>
              )}
              <p>License: {doctor.license_number}</p>
            </div>
            <Button size="sm" asChild>
              <Link to={`/dashboard/new-prescription`}>
                <FileText className="mr-2 h-4 w-4" />
                Write Prescription
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function DoctorsPage() {
  const { profile } = useAuth()
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const isAdmin = profile?.role === 'admin'

  const fetchData = useCallback(async () => {
    if (!profile?.role) { setLoading(false); return }

    try {
<<<<<<< Updated upstream
      if (isAdmin) {
        const data = await getAllDoctors()
        const doctorsWithProfiles = await Promise.all(
          (data || []).map(async (doctor) => {
            const p = await getProfile(doctor.user_id)
            return { ...doctor, profiles: p || {} }
          })
        )
        setDoctors(doctorsWithProfiles)
      } else {
        const data = await getVerifiedDoctors()
        const doctorsWithProfiles = await Promise.all(
          (data || []).map(async (doctor) => {
            const p = await getProfile(doctor.user_id)
            return { ...doctor, profiles: p || {} }
          })
        )
        setDoctors(doctorsWithProfiles)
      }
=======
      const data = await getAllDoctors()
      const doctorsWithProfiles = await Promise.all(
        (data || []).map(async (doctor) => {
          const profile = await getProfile(doctor.user_id)
          return { ...doctor, profiles: profile || {} }
        })
      )
      setDoctors(doctorsWithProfiles)
>>>>>>> Stashed changes
    } catch (error) {
      console.error('Error fetching doctors:', error)
      setDoctors([])
    } finally {
      setLoading(false)
    }
  }, [profile, isAdmin])

  useEffect(() => { fetchData() }, [fetchData])

  if (!loading && !['doctor', 'admin'].includes(profile?.role)) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          {isAdmin ? 'Doctor Management' : 'Doctors Directory'}
        </h1>
        <p className="text-muted-foreground mt-1">
          {isAdmin
            ? 'Verify and manage registered doctors'
            : 'Browse verified doctors and write prescriptions'
          }
        </p>
      </div>
      {loading ? (
        <DoctorsSkeleton />
      ) : isAdmin ? (
        <DoctorsManager doctors={doctors} onRefresh={fetchData} />
      ) : (
        <DoctorDirectoryList doctors={doctors} />
      )}
    </div>
  )
}
