"use client"

import { useEffect, useState } from "react"
import { Clock, Filter, PlusCircle, Download, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AppointmentsPage() {
  const [view, setView] = useState("list")
  const [statusFilter, setStatusFilter] = useState("all")
  const [appointments, setAppointments] = useState([])
  const [newAppointment, setNewAppointment] = useState({
    name: "",
    date: "",
    time: "",
    duration: "30",
    type: "",
    status: "Proximo"
  })
  const [editingIndex, setEditingIndex] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("appointments")
    console.log(stored)
    if (stored) setAppointments(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments))
  }, [appointments])

  const handleSaveAppointment = () => {
    if (editingIndex !== null) {
      const updated = [...appointments]
      updated[editingIndex] = newAppointment
      setAppointments(updated)
      setEditingIndex(null)
    } else {
      setAppointments([newAppointment, ...appointments])
    }
    setNewAppointment({ name: "", date: "", time: "", duration: "30", type: "", status: "Proximo" })
    setDialogOpen(false)
  }

  const handleEditAppointment = (index) => {
    setEditingIndex(index)
    setNewAppointment(appointments[index])
    setDialogOpen(true)
  }

  const handleCancelAppointment = (index) => {
    const updated = [...appointments]
    updated[index].status = "Cancelado"
    setAppointments(updated)
  }

  const handleDeleteAppointment = (index) => {
    const updated = [...appointments]
    updated.splice(index, 1)
    setAppointments(updated)
  }

  const filteredAppointments = statusFilter === "all"
    ? appointments
    : appointments.filter(app => app.status === statusFilter)

  return (
    <div className="flex flex-col min-h-screen space-y-4 px-4 md:px-6 pb-10 bg-black text-white">
      <div className="flex items-center justify-between pt-6">
        <h2 className="text-3xl font-bold tracking-tight">Citas</h2>
        <div className="flex gap-2">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <PlusCircle className="mr-2 h-4 w-4" />
                Nueva Cita
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle>{editingIndex !== null ? "Editar Cita" : "Crear Nueva Cita"}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Nombre del paciente</Label>
                  <Input
                    className="bg-gray-800 text-white border-gray-700"
                    value={newAppointment.name}
                    onChange={(e) => setNewAppointment({ ...newAppointment, name: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Fecha</Label>
                  <Input
                    type="date"
                    className="bg-gray-800 text-white border-gray-700"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Hora</Label>
                  <Input
                    type="time"
                    className="bg-gray-800 text-white border-gray-700"
                    value={newAppointment.time}
                    onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Duración</Label>
                  <Select
                    value={newAppointment.duration}
                    onValueChange={(value) => setNewAppointment({ ...newAppointment, duration: value })}
                  >
                    <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                      <SelectValue placeholder="Seleccionar duración" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white">
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="60">60 minutos</SelectItem>
                      <SelectItem value="90">90 minutos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Tipo de cita</Label>
                  <Input
                    className="bg-gray-800 text-white border-gray-700"
                    value={newAppointment.type}
                    onChange={(e) => setNewAppointment({ ...newAppointment, type: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Estado</Label>
                  <Select
                    value={newAppointment.status}
                    onValueChange={(value) => setNewAppointment({ ...newAppointment, status: value })}
                  >
                    <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white">
                      <SelectItem value="Proximo">Próximo</SelectItem>
                      <SelectItem value="Cancelado">Cancelado</SelectItem>
                      <SelectItem value="Completada">Completada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleSaveAppointment} className="bg-teal-600 hover:bg-teal-700">
                  {editingIndex !== null ? "Guardar Cambios" : "Crear Cita"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <Card className="w-full flex flex-col flex-grow bg-gray-900 text-white border-gray-700">
        <CardHeader>
          <CardTitle>Gestionar Citas</CardTitle>
          <CardDescription>Ver, programar y gestionar citas de pacientes</CardDescription>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px] bg-gray-800 text-white border-gray-700">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 text-white">
                <SelectItem value="all">Todas las Citas</SelectItem>
                <SelectItem value="Proximo">Próximas</SelectItem>
                <SelectItem value="Cancelado">Canceladas</SelectItem>
                <SelectItem value="Completada">Completadas</SelectItem>
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

        <CardContent className="overflow-auto">
          {filteredAppointments.length === 0 ? (
            <p className="text-center py-10 text-gray-400">No hay citas que mostrar.</p>
          ) : (
            filteredAppointments.map((appointment, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-700 py-2"
              >
                <div>
                  <p className="font-semibold">{appointment.name}</p>
                  <p className="text-sm text-gray-400">
                    {appointment.date} {appointment.time} - {appointment.duration} min
                  </p>
                  <p className="text-sm italic text-gray-400">{appointment.type}</p>
                  <p className={`text-xs font-semibold mt-1
                    ${
                      appointment.status === "Proximo"
                        ? "text-green-400"
                        : appointment.status === "Cancelado"
                        ? "text-red-500"
                        : appointment.status === "Completada"
                        ? "text-blue-400"
                        : "text-gray-400"
                    }
                  `}>
                    {appointment.status}
                  </p>
                </div>
                <div className="flex gap-2">
                  {appointment.status !== "Cancelado" ? (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditAppointment(index)}
                      >
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleCancelAppointment(index)}
                      >
                        Cancelar
                      </Button>
                    </>
                  ) : (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteAppointment(index)}
                    >
                      Eliminar
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  )
}
  