"use client"

import { useState } from "react"
import { PlusCircle, Search, Filter, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Datos simulados de pacientes
const patients = [
  {
    id: "1",
    name: "Carlos García",
    email: "carlos.garcia@ejemplo.com",
    phone: "(555) 123-4567",
    lastAppointment: "15-04-2023",
    nextAppointment: "10-05-2023",
    status: "Activo",
    condition: "Secuelas de ACV",
  },
  {
    id: "2",
    name: "María López",
    email: "maria.lopez@ejemplo.com",
    phone: "(555) 987-6543",
    lastAppointment: "20-04-2023",
    nextAppointment: "18-05-2023",
    status: "Activo",
    condition: "Deterioro cognitivo leve",
  },
  {
    id: "3",
    name: "Miguel Rodríguez",
    email: "miguel.r@ejemplo.com",
    phone: "(555) 456-7890",
    lastAppointment: "10-04-2023",
    nextAppointment: null,
    status: "Inactivo",
    condition: "TDAH",
  },
  {
    id: "4",
    name: "Ana Martínez",
    email: "ana.m@ejemplo.com",
    phone: "(555) 789-0123",
    lastAppointment: "25-04-2023",
    nextAppointment: "25-05-2023",
    status: "Activo",
    condition: "Dislexia",
  },
  {
    id: "5",
    name: "Roberto Fernández",
    email: "roberto.f@ejemplo.com",
    phone: "(555) 234-5678",
    lastAppointment: "05-04-2023",
    nextAppointment: "05-05-2023",
    status: "Activo",
    condition: "Traumatismo craneoencefálico",
  },
]

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || patient.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Pacientes</h2>
        <div className="flex gap-2">
          <Link href="/dashboard/doctor/patients/new">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Añadir Paciente
            </Button>
          </Link>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gestión de Pacientes</CardTitle>
          <CardDescription>
            Ver y gestionar sus pacientes. Añada nuevos pacientes o actualice registros existentes.
          </CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="search"
                placeholder="Buscar pacientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="activo">Activos</SelectItem>
                <SelectItem value="inactivo">Inactivos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Teléfono</TableHead>
                <TableHead>Condición</TableHead>
                <TableHead>Última Cita</TableHead>
                <TableHead>Próxima Cita</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell>{patient.email}</TableCell>
                  <TableCell>{patient.phone}</TableCell>
                  <TableCell>{patient.condition}</TableCell>
                  <TableCell>{patient.lastAppointment}</TableCell>
                  <TableCell>{patient.nextAppointment || "No programada"}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        patient.status === "Activo" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          Acciones
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link href={`/dashboard/doctor/patients/${patient.id}`} className="w-full">
                            Ver Perfil
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/dashboard/doctor/patients/${patient.id}/edit`} className="w-full">
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/dashboard/doctor/patients/${patient.id}/records`} className="w-full">
                            Ver Registros
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/dashboard/doctor/appointments/new?patient=${patient.id}`} className="w-full">
                            Programar Cita
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/dashboard/doctor/rehabilitation/new?patient=${patient.id}`} className="w-full">
                            Crear Programa
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
