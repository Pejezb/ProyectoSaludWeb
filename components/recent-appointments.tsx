import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentAppointments() {
  return (
    <div className="space-y-8">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={appointment.avatar || "/placeholder.svg"} alt="Avatar" />
            <AvatarFallback>{appointment.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{appointment.name}</p>
            <p className="text-sm text-muted-foreground">
              {appointment.date} a las {appointment.time}
            </p>
          </div>
          <div className="ml-auto font-medium">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                appointment.status === "Completada"
                  ? "bg-green-100 text-green-800"
                  : appointment.status === "Próxima"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {appointment.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

const appointments = [
  {
    id: "1",
    name: "Juan Pérez",
    avatar: "/placeholder.svg?height=32&width=32",
    date: "10 de Mayo, 2023",
    time: "10:00",
    status: "Próxima",
  },
  {
    id: "2",
    name: "María García",
    avatar: "/placeholder.svg?height=32&width=32",
    date: "8 de Mayo, 2023",
    time: "14:30",
    status: "Completada",
  },
  {
    id: "3",
    name: "Miguel Rodríguez",
    avatar: "/placeholder.svg?height=32&width=32",
    date: "5 de Mayo, 2023",
    time: "11:15",
    status: "Completada",
  },
  {
    id: "4",
    name: "Sara Martínez",
    avatar: "/placeholder.svg?height=32&width=32",
    date: "3 de Mayo, 2023",
    time: "15:45",
    status: "Cancelada",
  },
  {
    id: "5",
    name: "Roberto Fernández",
    avatar: "/placeholder.svg?height=32&width=32",
    date: "1 de Mayo, 2023",
    time: "9:30",
    status: "Completada",
  },
]
