"use client"

import type React from "react"

import { useState } from "react"
import { Send, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Datos simulados de conversaciones
const conversations = [
  {
    id: "1",
    name: "Dra. Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "¿Cómo se ha sentido con la nueva medicación?",
    time: "10:30",
    unread: true,
    messages: [
      {
        id: "1",
        sender: "doctor",
        content: "Hola Juan, ¿cómo se ha sentido desde nuestra última consulta?",
        time: "10:15",
      },
      {
        id: "2",
        sender: "patient",
        content: "Hola Dra. Johnson, me he sentido mejor, aunque todavía tengo algo de ansiedad por las mañanas.",
        time: "10:20",
      },
      {
        id: "3",
        sender: "doctor",
        content: "Entiendo. ¿Ha estado practicando las técnicas de respiración que discutimos?",
        time: "10:25",
      },
      {
        id: "4",
        sender: "patient",
        content: "Sí, las he estado practicando diariamente y me ayudan bastante.",
        time: "10:28",
      },
      {
        id: "5",
        sender: "doctor",
        content: "¿Cómo se ha sentido con la nueva medicación?",
        time: "10:30",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Sus resultados de laboratorio están listos para revisión.",
    time: "Ayer",
    unread: false,
    messages: [
      {
        id: "1",
        sender: "doctor",
        content: "Hola Juan, sus resultados de laboratorio están listos para revisión.",
        time: "Ayer",
      },
    ],
  },
  {
    id: "3",
    name: "Enfermera Ana García",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Recordatorio: Su cita está programada para mañana a las 10:00 AM.",
    time: "Lun",
    unread: false,
    messages: [
      {
        id: "1",
        sender: "doctor",
        content: "Recordatorio: Su cita está programada para mañana a las 10:00 AM.",
        time: "Lun",
      },
    ],
  },
]

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // En una aplicación real, aquí enviaríamos el mensaje a través de una API
    console.log("Mensaje enviado:", newMessage)
    setNewMessage("")
  }

  return (
    <div className="h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-bold mb-6">Mensajes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        <Card className="md:col-span-1 h-full flex flex-col">
          <CardHeader className="px-4 py-3">
            <div className="flex items-center space-x-2">
              <Input
                type="search"
                placeholder="Buscar conversaciones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-9"
              />
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-hidden">
            <Tabs defaultValue="all" className="w-full">
              <div className="px-4">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">
                    Todos
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="flex-1">
                    No leídos
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="m-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="divide-y">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-muted transition-colors ${
                          activeConversation.id === conversation.id ? "bg-muted" : ""
                        }`}
                        onClick={() => setActiveConversation(conversation)}
                      >
                        <Avatar>
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                          <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-medium truncate">{conversation.name}</h3>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread && <div className="w-2 h-2 bg-teal-600 rounded-full"></div>}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="unread" className="m-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="divide-y">
                    {filteredConversations
                      .filter((conversation) => conversation.unread)
                      .map((conversation) => (
                        <div
                          key={conversation.id}
                          className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-muted transition-colors ${
                            activeConversation.id === conversation.id ? "bg-muted" : ""
                          }`}
                          onClick={() => setActiveConversation(conversation)}
                        >
                          <Avatar>
                            <AvatarImage src={conversation.avatar} alt={conversation.name} />
                            <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <h3 className="font-medium truncate">{conversation.name}</h3>
                              <span className="text-xs text-muted-foreground">{conversation.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                          </div>
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        </div>
                      ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 h-full flex flex-col">
          <CardHeader className="px-6 py-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={activeConversation.avatar} alt={activeConversation.name} />
                <AvatarFallback>{activeConversation.name[0]}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{activeConversation.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 flex flex-col">
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {activeConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "patient" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "patient" ? "bg-teal-600 text-white" : "bg-muted"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "patient" ? "text-teal-100" : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Escriba su mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Enviar mensaje</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
