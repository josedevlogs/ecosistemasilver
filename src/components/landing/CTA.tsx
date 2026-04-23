import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Silver Básico",
    price: "Gratis",
    period: "",
    description: "Para explorar la plataforma sin compromiso",
    features: [
      "Acceso a comunidad",
      "3 servicios incluidos",
      "Soporte por email",
      "App móvil",
    ],
    cta: "Comenzar gratis",
    highlighted: false,
  },
  {
    name: "Silver Plus",
    price: "€29",
    period: "/mes",
    description: "El plan más completo para la generación Silver",
    features: [
      "Todos los servicios",
      "Asesoría personalizada",
      "Soporte 24/7",
      "Eventos exclusivos",
      "Descuentos en viajes",
      "App sin publicidad",
    ],
    cta: "Comenzar con Silver Plus",
    highlighted: true,
  },
  {
    name: "Silver Familia",
    price: "€49",
    period: "/mes",
    description: "Para ti y hasta 3 familiares",
    features: [
      "Todo lo de Silver Plus",
      "Hasta 4 miembros",
      "Gestión familiar unificada",
      "Asesoría para herederos",
    ],
    cta: "Comenzar en familia",
    highlighted: false,
  },
];

export function CTA() {
  return (
    <section id="contacto" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Plans header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Planes y precios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Elige tu plan Silver
          </h2>
          <p className="text-muted-foreground text-lg">
            Sin contratos largos. Sin letra pequeña. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl scale-[1.02]"
                  : "bg-white border-border hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                    Más popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-semibold mb-1 ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${
                        plan.highlighted
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    plan.highlighted
                      ? "text-primary-foreground/75"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted ? "bg-white/20" : "bg-primary/10"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold ${
                          plan.highlighted ? "text-white" : "text-primary"
                        }`}
                      >
                        ✓
                      </span>
                    </div>
                    <span
                      className={
                        plan.highlighted
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={cn(
                  "w-full gap-2 inline-flex items-center justify-center",
                  plan.highlighted
                    ? cn(buttonVariants({ variant: "secondary" }), "bg-white text-primary hover:bg-white/90 w-full")
                    : cn(buttonVariants({ variant: "default" }), "w-full")
                )}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Contact banner */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary to-accent/10 rounded-3xl p-10 text-center space-y-6 border border-border">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            ¿Tienes dudas? Hablemos.
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nuestro equipo de especialistas está disponible para ayudarte a
            encontrar el plan perfecto para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+34900000000"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Phone size={18} />
              Llamar ahora
            </Link>
            <Link
              href="mailto:hola@ecosistemasilver.com"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
            >
              <Mail size={18} />
              Enviar email
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Horario de atención: Lunes a Viernes de 9:00 a 20:00
          </p>
        </div>
      </div>
    </section>
  );
}
