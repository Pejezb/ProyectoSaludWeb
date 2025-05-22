'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Overview } from "@/components/overview"
import { RecentAppointments } from "@/components/recent-appointments"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle, Users, Calendar, FileText, Brain } from "lucide-react"
import useStorage from "@/hooks/useLocalStorage"

export default function DoctorDashboard() {

  const { data: appointmentData, isLoading: appointmentLoad } = useStorage("appointments", []);
  const { data: pacientsData, isLoading: pacientsLoad } = useStorage("pacients", []);

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Panel de Administración</h2>

      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Pacientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {pacientsLoad ? "0" : pacientsData.length}
            </div>
            <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Citas Programadas</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {appointmentLoad ? "0" : appointmentData.length}
              </div>
            <p className="text-xs text-muted-foreground">Para esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Informes Pendientes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {pacientsLoad ? "0" : pacientsData.length}
            </div>
            <p className="text-xs text-muted-foreground">Por completar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Programas Activos</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">De rehabilitación</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Actividad de Pacientes</CardTitle>
              <CardDescription>Participación de pacientes durante los últimos 30 días</CardDescription>
            </div>
              <Link href="/dashboard/doctor/reports">
                <Button variant="outline" size="lg" className="w-58">
                  Ver Detalles
                </Button>
              </Link>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Próximas Citas</CardTitle>
              <CardDescription>Citas programadas para hoy</CardDescription>
            </div>
            <Link href="/dashboard/doctor/appointments">
              <Button variant="outline" size="sm" className="w-58">
                Ver Todas
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <RecentAppointments />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pacientes Recientes</CardTitle>
              <CardDescription>Últimos pacientes registrados</CardDescription>
            </div>
            <Link href="/dashboard/doctor/patients">
              <Button variant="outline" size="sm">
                Ver Todos
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Paciente {i}</p>
                    <p className="text-sm text-muted-foreground">Registrado el {10 - i} de Mayo, 2023</p>
                  </div>
                  <div className="ml-auto">
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Acciones Rápidas</CardTitle>
              <CardDescription>Gestione su consulta de forma eficiente</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/dashboard/doctor/patients/new">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nuevo Paciente
                </Button>
              </Link>
              <Link href="/dashboard/doctor/appointments/new">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Nueva Cita
                </Button>
              </Link>
              <Link href="/dashboard/doctor/records/new">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <FileText className="mr-2 h-4 w-4" />
                  Nuevo Informe
                </Button>
              </Link>
              <Link href="/dashboard/doctor/rehabilitation/new">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <Brain className="mr-2 h-4 w-4" />
                  Nuevo Programa
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
