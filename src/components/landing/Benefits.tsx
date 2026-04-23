import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "+50", label: "Servicios disponibles", suffix: "" },
  { value: "12K", label: "Miembros activos", suffix: "+" },
  { value: "98", label: "Satisfacción de usuarios", suffix: "%" },
  { value: "24/7", label: "Soporte disponible", suffix: "" },
];

const benefits = [
  "Acceso sin límites desde cualquier dispositivo",
  "Interfaz diseñada para la generación Silver",
  "Asesoría personalizada con expertos certificados",
  "Comunidad exclusiva con eventos y actividades",
  "Seguridad y privacidad de datos garantizada",
  "Planes flexibles adaptados a tu presupuesto",
  "Onboarding guiado paso a paso",
  "Sin compromisos — cancela cuando quieras",
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 p-8 bg-primary rounded-2xl text-primary-foreground">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold mb-1">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-sm opacity-75">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-secondary to-accent/20 rounded-3xl flex items-center justify-center p-10 shadow-inner">
              <div className="space-y-4 w-full">
                {/* Mock UI card */}
                <div className="bg-white rounded-2xl p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      MG
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        María González
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Miembro Silver
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                        Activa
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["Salud", "Finanzas", "Cursos"].map((item) => (
                      <div
                        key={item}
                        className="bg-secondary rounded-lg py-2 text-center text-xs font-medium text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress items */}
                <div className="bg-white rounded-2xl p-5 shadow-md space-y-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Tu progreso
                  </p>
                  {[
                    { label: "Plan financiero", pct: 72 },
                    { label: "Bienestar físico", pct: 85 },
                    { label: "Comunidad", pct: 60 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-foreground font-medium">
                          {item.label}
                        </span>
                        <span className="text-muted-foreground">
                          {item.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: benefits list */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Por qué elegirnos
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                Una plataforma hecha a tu medida
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Entendemos que cada etapa de la vida tiene sus propias
                necesidades. Ecosistema Silver fue creado escuchando a personas
                como tú.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
