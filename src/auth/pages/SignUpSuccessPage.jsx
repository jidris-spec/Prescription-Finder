import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Pill } from 'lucide-react'

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
          <CardDescription>
            {"We've sent you a confirmation link to verify your email address"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Click the link in the email to complete your registration and start using MedFind.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link to="/auth/login">Return to login</Link>
          </Button>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Pill className="h-4 w-4" />
            <span>MedFind</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
