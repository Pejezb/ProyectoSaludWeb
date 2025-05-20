import Link from "next/link"
import { Calendar, MessageCircle, Brain, User, Lightbulb, Activity, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6 text-teal-600" />
            <span>Dr. Juan Martínez</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#servicios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Servicios
            </Link>
            <Link
              href="#sobre-mi"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre Mí
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Área de Pacientes
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Dr. Juan Martínez
                  </h1>
                  <p className="text-xl font-semibold text-teal-600">Neuropsicólogo Especialista</p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Evaluación, diagnóstico y tratamiento de trastornos neuropsicológicos con un enfoque personalizado y
                    basado en evidencia científica.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contactar por WhatsApp
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Reservar Cita
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Dr. Juan Martínez"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">Servicios</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Mis Servicios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Ofrezco servicios especializados en neuropsicología para adultos y niños
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluación Neuropsicológica</CardTitle>
                  <CardDescription>Diagnóstico preciso de funciones cognitivas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Evaluación completa de memoria, atención, funciones ejecutivas y otras habilidades cognitivas para
                    identificar fortalezas y debilidades.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Rehabilitación Cognitiva</CardTitle>
                  <CardDescription>Recuperación de funciones cerebrales</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Programas personalizados para mejorar habilidades cognitivas afectadas por lesiones cerebrales,
                    enfermedades neurodegenerativas o trastornos del desarrollo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Terapia Neuropsicológica</CardTitle>
                  <CardDescription>Tratamiento integral</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Intervención terapéutica para trastornos como TDAH, dislexia, demencias, secuelas de ACV y
                    traumatismos craneoencefálicos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Consultas Online</CardTitle>
                  <CardDescription>Atención a distancia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Sesiones de evaluación y seguimiento a través de videollamada para pacientes que no pueden asistir
                    presencialmente.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Asesoramiento Familiar</CardTitle>
                  <CardDescription>Apoyo al entorno del paciente</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Orientación a familiares sobre cómo manejar situaciones derivadas de trastornos neuropsicológicos y
                    cómo apoyar el proceso de rehabilitación.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Informes Especializados</CardTitle>
                  <CardDescription>Documentación profesional</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Elaboración de informes neuropsicológicos detallados para uso médico, educativo o legal según las
                    necesidades del paciente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="sobre-mi" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">Sobre Mí</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Dr. Juan Martínez</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Con más de 15 años de experiencia en neuropsicología clínica, me especializo en la evaluación y
                    rehabilitación de funciones cognitivas.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Obtuve mi doctorado en Neurociencias por la Universidad Complutense de Madrid y realicé una
                    especialización en Neuropsicología Clínica en el Hospital Universitario La Paz. He complementado mi
                    formación con estancias en centros de referencia internacional como el Instituto de Neurología
                    Cognitiva (INECO) en Buenos Aires.
                  </p>
                  <p className="text-muted-foreground">
                    Mi enfoque combina las técnicas más avanzadas en evaluación neuropsicológica con métodos de
                    rehabilitación basados en la evidencia científica. Trabajo con pacientes de todas las edades que
                    presentan trastornos cognitivos derivados de daño cerebral adquirido, enfermedades
                    neurodegenerativas, trastornos del neurodesarrollo y problemas de aprendizaje.
                  </p>
                  <p className="text-muted-foreground">
                    Además de mi práctica clínica, soy profesor asociado en la Facultad de Psicología y colaboro
                    regularmente en proyectos de investigación sobre plasticidad cerebral y nuevas técnicas de
                    rehabilitación cognitiva.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                    <span>Doctor en Neurociencias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-teal-600" />
                    <span>Especialista en Rehabilitación Cognitiva</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-teal-600" />
                    <span>Experto en Neuropsicología Infantil</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Dr. Juan Martínez en su consulta"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">Testimonios</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lo Que Dicen Mis Pacientes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Experiencias reales de personas a las que he ayudado
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
              <Card className="border-0 bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted p-2">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Carlos G.</CardTitle>
                      <CardDescription>Paciente con secuelas de ACV</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "El Dr. Martínez ha sido fundamental en mi recuperación tras el ictus. Su programa de rehabilitación
                    cognitiva me ha ayudado a recuperar gran parte de mis habilidades de memoria y concentración. Su
                    profesionalidad y empatía hacen que cada sesión sea productiva y motivadora."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted p-2">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Ana M.</CardTitle>
                      <CardDescription>Madre de paciente con TDAH</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Encontrar al Dr. Martínez fue un punto de inflexión para mi hijo. Su enfoque integral del TDAH,
                    combinando técnicas de atención con estrategias para el entorno familiar y escolar, ha transformado
                    completamente su rendimiento académico y su autoestima."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted p-2">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Elena R.</CardTitle>
                      <CardDescription>Paciente con deterioro cognitivo leve</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Acudí al Dr. Martínez preocupada por mis problemas de memoria. Su evaluación fue exhaustiva y me
                    tranquilizó mucho conocer exactamente qué estaba pasando. El programa de estimulación cognitiva que
                    diseñó para mí ha mejorado notablemente mi calidad de vida."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Necesitas Ayuda Profesional?</h2>
                <p className="max-w-[900px] md:text-xl">Reserva una cita o contáctame para una consulta inicial</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/login">
                  <Button variant="secondary" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Reservar Cita
                  </Button>
                </Link>
                <Link href="mailto:contacto@drjuanmartinez.com">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-teal-600"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enviar Email
                  </Button>
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-3xl">
                <div className="flex flex-col items-center space-y-2 rounded-lg bg-white/10 p-4">
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm">Calle Neurona 123, 28001 Madrid</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg bg-white/10 p-4">
                  <p className="font-medium">Horario</p>
                  <p className="text-sm">Lunes a Viernes: 9:00 - 20:00</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg bg-white/10 p-4">
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm">+34 600 123 456</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6 text-teal-600" />
            <span>Dr. Juan Martínez</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Dr. Juan Martínez. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacidad
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Términos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
