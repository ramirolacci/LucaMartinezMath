import { Check, Star, Zap, Crown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import MathBackground from './MathBackground';

const plans = [
  {
    icon: Zap,
    name: 'Clase Individual',
    price: '$XXXX',
    period: 'por clase',
    description: 'Ideal para resolver dudas puntuales o preparar un examen específico.',
    features: [
      'Clase de 60 minutos',
      'Pizarra virtual compartida',
      'Material de la clase en PDF',
      'Consultas por WhatsApp 24h después',
    ],
    cta: 'Contratar',
    highlight: false,
    badge: null,
  },
  {
    icon: Star,
    name: 'Pack Mensual',
    price: '$XXXXX',
    period: 'por mes',
    description: 'El plan más elegido. 2 clases semanales con seguimiento personalizado.',
    features: [
      '8 clases de 60 min / mes',
      'Seguimiento de progreso',
      'Material de estudio completo',
      'Consultas ilimitadas por WhatsApp',
      'Ejercicios extra entre clases',
      'Reporte mensual de avance',
    ],
    cta: 'Elegir plan',
    highlight: true,
    badge: 'Más popular',
  },
  {
    icon: Crown,
    name: 'Clase Grupal',
    price: '$XXXXX',
    period: 'por alumno',
    description: 'Clases en grupo reducido para compartir costos y aprender junto a otros.',
    features: [
      'Hasta 4 alumnos por grupo',
      'Clase de 90 minutos',
      'Temario coordinado entre los participantes',
      'Material compartido para todo el grupo',
      'Espacio para resolver dudas de cada integrante',
    ],
    cta: 'Contratar',
    highlight: false,
    badge: 'Nuevo',
  },
];

const faqs = [
  {
    q: '¿Cómo es la primera clase?',
    a: 'La primera clase es de diagnóstico. Evaluamos tu nivel, identificamos tus dificultades y diseñamos un plan de trabajo personalizado.',
  },
  {
    q: '¿Cómo se realizan los pagos?',
    a: 'Los pagos se realizan vía transferencia bancaria, Mercado Pago o efectivo. Se puede pagar por clase o en paquetes mensuales.',
  },
  {
    q: '¿Qué pasa si no puedo ir a una clase?',
    a: 'Se puede reprogramar con al menos 24 horas de anticipación sin costo adicional. Las clases tienen una vigencia de 30 días.',
  },
];

export default function Pricing() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="precios"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 overflow-hidden"
    >
      <MathBackground variant="light" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
            Inversión
          </span>
          <h2
            className="font-black leading-none text-dark"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            ¿Precios?
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Planes flexibles para cada necesidad, con opciones individuales, mensuales e intensivas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.highlight
                  ? 'shadow-2xl scale-105'
                  : 'shadow-md hover:shadow-xl'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? plan.highlight ? 'scale(1.05)' : 'translateY(0)'
                  : 'translateY(30px)',
              }}
            >
              {plan.highlight && (
                <div className="h-2 bg-blue-gradient" />
              )}

              <div
                className={`p-7 h-full flex flex-col ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-primary-900 to-primary-800 text-white'
                    : 'bg-white border border-slate-100'
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${
                      plan.highlight
                        ? 'bg-white/20 text-white'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    plan.highlight ? 'bg-white/20' : 'bg-primary-50'
                  }`}
                >
                  <plan.icon size={22} className={plan.highlight ? 'text-white' : 'text-primary-600'} />
                </div>

                <h3
                  className={`text-xl font-black mb-1 ${plan.highlight ? 'text-white' : 'text-dark'}`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-primary-200' : 'text-slate-400'}`}>
                  {plan.description}
                </p>

                <div className="mb-7">
                  <span
                    className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-gradient'}`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.highlight ? 'text-primary-300' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlight ? 'bg-white/20' : 'bg-primary-50'
                        }`}
                      >
                        <Check size={11} className={plan.highlight ? 'text-white' : 'text-primary-600'} strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${plan.highlight ? 'text-primary-100' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-white text-primary-800 hover:bg-primary-50 hover:shadow-lg'
                      : 'btn-primary justify-center'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-black text-center text-dark mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Preguntas frecuentes
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <h4 className="font-semibold text-dark mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
