import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, Mail, Phone, Search, FileText } from 'lucide-react'

export function PatientsList({ myPatients, allPatients }) {
  const [search, setSearch] = useState('')

  const filteredAll = allPatients.filter((p) =>
    p.full_name?.toLowerCase().includes(search.toLowerCase()) ||
    p.email?.toLowerCase().includes(search.toLowerCase())
  )

  const PatientCard = ({ patient }) => (
    <Card key={patient.id} className="border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-base">
              {patient.full_name || 'Unknown Patient'}
            </CardTitle>
            {patient.email && (
              <CardDescription className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                {patient.email}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {patient.phone && (
          <p className="text-sm text-muted-foreground flex items-center gap-2 mb-3">
            <Phone className="h-4 w-4" />
            {patient.phone}
          </p>
        )}
        <Button size="sm" asChild>
          <Link to={`/dashboard/prescriptions/new?patient=${patient.id}`}>
            <FileText className="mr-2 h-4 w-4" />
            Write Prescription
          </Link>
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <Tabs defaultValue="my-patients" className="space-y-6">
      <TabsList>
        <TabsTrigger value="my-patients">My Patients ({myPatients.length})</TabsTrigger>
        <TabsTrigger value="all-patients">All Patients ({allPatients.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="my-patients">
        {myPatients.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                You have not prescribed to any patients yet
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myPatients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="all-patients" className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {filteredAll.length === 0 ? (
          <Card className="border-border border-dashed">
            <CardContent className="py-16 text-center">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {search ? 'No patients found matching your search' : 'No patients registered yet'}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAll.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}
