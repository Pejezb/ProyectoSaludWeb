import Link from "next/link"
import { ArrowRight, Calendar, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PatientAppointments } from "@/components/patient-appointments"
import { PatientRecommendations } from "@/components/patient-recommendations"

export default function PatientDashboard() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Bienvenido, Carlos</h2>
        <Link href="/dashboard/patient/book">
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Calendar className="mr-2 h-4 w-4" />
            Reservar Cita
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próxima Cita</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 de Mayo, 2023</div>
            <p className="text-xs text-muted-foreground">10:00 AM con Dr. Juan Martínez</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Ver Detalles
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mensajes No Leídos</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Del Dr. Juan Martínez</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Ver Mensajes
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progreso de Rehabilitación</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">Completado del programa actual</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Ver Programa
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Próximas Citas</CardTitle>
            <CardDescription>Sus citas programadas</CardDescription>
          </CardHeader>
          <CardContent>
            <PatientAppointments />
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Ver Todas las Citas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recomendaciones</CardTitle>
            <CardDescription>Recomendaciones personalizadas del Dr. Juan Martínez</CardDescription>
          </CardHeader>
          <CardContent>
            <PatientRecommendations />
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Ver Todas las Recomendaciones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
