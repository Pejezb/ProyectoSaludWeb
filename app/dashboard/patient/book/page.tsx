"use client"

import { useState } from "react"
import { CalendarIcon, Clock, User } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

// Horarios disponibles simulados
const availableTimeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
]

// Tipos de consulta
const appointmentTypes = [
  { id: "1", name: "Consulta inicial" },
  { id: "2", name: "Seguimiento" },
  { id: "3", name: "Terapia" },
  { id: "4", name: "Revisión de medicación" },
  { id: "5", name: "Consulta urgente" },
]

export default function BookAppointmentPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [timeSlot, setTimeSlot] = useState<string>()
  const [appointmentType, setAppointmentType] = useState<string>()
  const [notes, setNotes] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)

  // Función para verificar si una fecha es un día laborable (lunes a viernes)
  const isWeekday = (date: Date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6
  }

  // Función para manejar la reserva de la cita
  const handleBookAppointment = () => {
    if (!date || !timeSlot || !appointmentType) return

    setIsLoading(true)

    // Simulación de una llamada a la API
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard/patient?success=true")
    }, 1500)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reservar Cita</h1>

      <div className="space-y-6">
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Paso 1: Seleccionar fecha y hora</CardTitle>
              <CardDescription>Elija una fecha y hora disponible para su cita</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Fecha</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0)) || !isWeekday(date)}
                      locale={es}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Hora</label>
                <Select disabled={!date} onValueChange={setTimeSlot} value={timeSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar hora" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {date && timeSlot && (
                <div className="mt-4 p-4 bg-muted rounded-md">
                  <h3 className="font-medium mb-2">Resumen de la cita</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{format(date, "PPPP", { locale: es })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{timeSlot}</span>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={!date || !timeSlot}
                onClick={() => setStep(2)}
              >
                Continuar
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Paso 2: Detalles de la cita</CardTitle>
              <CardDescription>Proporcione información adicional sobre su cita</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo de consulta</label>
                <Select onValueChange={setAppointmentType} value={appointmentType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo de consulta" />
                  </SelectTrigger>
                  <SelectContent>
                    {appointmentTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Notas adicionales (opcional)</label>
                <Textarea
                  placeholder="Describa brevemente el motivo de su consulta o cualquier información relevante"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="mt-4 p-4 bg-muted rounded-md">
                <h3 className="font-medium mb-2">Resumen de la cita</h3>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{date && format(date, "PPPP", { locale: es })}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{timeSlot}</span>
                </div>
                {appointmentType && (
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{appointmentTypes.find((type) => type.id === appointmentType)?.name}</span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => setStep(1)}>
                Volver
              </Button>
              <Button
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700"
                disabled={!appointmentType || isLoading}
                onClick={handleBookAppointment}
              >
                {isLoading ? "Reservando..." : "Confirmar reserva"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
