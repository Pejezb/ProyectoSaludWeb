"use client"

import { useState } from "react"
import { Clock, Filter, PlusCircle, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppointmentList } from "@/components/appointment-list"

export default function AppointmentsPage() {
  const [view, setView] = useState("list") // Mostrar "Lista" por defecto
  const [statusFilter, setStatusFilter] = useState("all")

  return (
    <div className="flex flex-col min-h-screen space-y-4 px-4 md:px-6 pb-10">
      <div className="flex items-center justify-between pt-6">
        <h2 className="text-3xl font-bold tracking-tight">Citas</h2>
        <div className="flex gap-2">
          <Link href="/dashboard/doctor/appointments/new">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Nueva Cita
            </Button>
          </Link>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <Card className="w-full flex flex-col flex-grow">
        <CardHeader>
          <CardTitle>Gestionar Citas</CardTitle>
          <CardDescription>Ver, programar y gestionar citas de pacientes</CardDescription>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las Citas</SelectItem>
                <SelectItem value="upcoming">Próximas</SelectItem>
                <SelectItem value="completed">Completadas</SelectItem>
                <SelectItem value="cancelled">Canceladas</SelectItem>
              </SelectContent>
            </Select>

            <Tabs value={view} onValueChange={setView} className="w-full sm:w-[900px]">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="list">
                  <Clock className="mr-2 h-4 w-4" />
                  Lista
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent className="pt-0 flex-grow overflow-auto">
          <AppointmentList statusFilter={statusFilter} />
        </CardContent>
      </Card>
    </div>
  )
}
