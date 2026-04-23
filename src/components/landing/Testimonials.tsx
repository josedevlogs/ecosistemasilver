import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carmen Rodríguez",
    age: 63,
    location: "Madrid, España",
    avatar: "CR",
    text: "Ecosistema Silver cambió mi vida por completo. Gracias a la asesoría financiera logré ordenar mi jubilación y empecé a viajar como siempre soñé. La comunidad es increíble.",
    stars: 5,
    service: "Finanzas & Viajes",
  },
  {
    name: "José Luis Martín",
    age: 58,
    location: "Barcelona, España",
    avatar: "JM",
    text: "La app es muy fácil de usar y el soporte siempre responde rápido. Me ayudaron a entender mis opciones de pensión y ahora tengo mucha más tranquilidad económica.",
    stars: 5,
    service: "Gestión Financiera",
  },
  {
    name: "Ana María Torres",
    age: 71,
    location: "Valencia, España",
    avatar: "AT",
    text: "A mis 71 años pensaba que la tecnología no era para mí. La plataforma de Ecosistema Silver lo hizo tan sencillo que ahora hasta doy clases de yoga online a través de ella.",
    stars: 5,
    service: "Comunidad & Salud",
  },
  {
    name: "Roberto Fernández",
    age: 55,
    location: "Sevilla, España",
    avatar: "RF",
    text: "Los cursos de formación son excelentes. Aprendí fotografía digital y conocí a personas maravillosas con mis mismos intereses. No me imaginaba aprovechar tanto mi tiempo libre.",
    stars: 5,
    service: "Formación",
  },
  {
    name: "Pilar Sánchez",
    age: 67,
    location: "Bilbao, España",
    avatar: "PS",
    text: "El servicio de telemedicina me salvó en varias ocasiones cuando no podía desplazarme. Médicos atentos y profesionales que realmente escuchan. Totalmente recomendado.",
    stars: 5,
    service: "Salud & Bienestar",
  },
  {
    name: "Manuel Gómez",
    age: 60,
    location: "Zaragoza, España",
    avatar: "MG",
    text: "Llevo dos años en Ecosistema Silver y no lo cambiaría por nada. La asesoría legal me ayudó con la herencia familiar de una manera que nunca esperé. Profesionalidad total.",
    stars: 5,
    service: "Asesoría Legal",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros miembros
          </h2>
          <p className="text-muted-foreground text-lg">
            Más de 12,000 personas confían en Ecosistema Silver para vivir esta
            etapa con plenitud.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="bg-white border-border hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote icon & text */}
                <div className="relative">
                  <Quote
                    size={20}
                    className="text-primary/20 absolute -top-1 -left-1"
                  />
                  <p className="text-sm text-foreground leading-relaxed pl-5">
                    {t.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {t.age} años · {t.location}
                    </p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                    {t.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
