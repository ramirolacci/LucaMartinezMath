import { Video, Users, BookOpen, Target, Zap, BarChart3, Clock, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import MathBackground from './MathBackground';
import FloatingEquations from './FloatingEquations';

const services = [
  {
    icon: Video,
    title: 'Clases Online',
    description: 'Sesiones en vivo vía Zoom o Google Meet. Pizarra virtual compartida, ejercicios en tiempo real y grabación disponible.',
    badge: 'Más popular',
    badgeColor: 'bg-primary-600 text-white',
    highlight: true,
  },
  {
    icon: Users,
    title: 'Clases Presenciales',
    description: 'Nos encontramos en Capital Federal. Ideal para quienes prefieren el contacto directo y el trabajo con material físico.',
    badge: null,
    badgeColor: '',
    highlight: false,
  },
  {
    icon: Target,
    title: 'Preparación de Exámenes',
    description: 'Clases enfocadas 100% en el temario del examen. Simulacros, resolución de parciales anteriores y estrategias de tiempo.',
    badge: null,
    badgeColor: '',
    highlight: false,
  },
  {
    icon: BookOpen,
    title: 'Clases de Recuperación',
    description: 'Para alumnos que quedaron con materias previas o necesitan nivelar contenidos de años anteriores.',
    badge: null,
    badgeColor: '',
    highlight: false,
  },
  {
    icon: BarChart3,
    title: 'Seguimiento Continuo',
    description: 'Seguimiento personalizado del progreso, reportes de avance y comunicación constante con los padres si es necesario.',
    badge: null,
    badgeColor: '',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Clases Intensivas',
    description: 'Sesiones de 2-3 horas para ponerse al día rápido. Perfectas antes de exámenes finales o evaluaciones importantes.',
    badge: 'Urgente',
    badgeColor: 'bg-amber-100 text-amber-700',
    highlight: false,
  },
];

const levels = [
  { name: 'Primaria', icon: '📐', desc: 'Aritmética, geometría básica, fracciones' },
  { name: 'Secundaria', icon: '📊', desc: 'Álgebra, funciones, trigonometría, estadística' },
  { name: 'Preuniversitario', icon: '🎯', desc: 'Ingreso UBA, CONICET, preparatorios' },
  { name: 'Universitario', icon: '⚡', desc: 'Análisis I/II, Álgebra lineal, Probabilidad' },
];

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="servicios"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 overflow-hidden"
    >
      <MathBackground variant="light" />
      <FloatingEquations opacity={0.16} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
            Lo que ofrezco
          </span>
          <h2
            className="font-black leading-none text-dark"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            ¿Servicios?
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Clases adaptadas a tus necesidades, tu ritmo y tus objetivos académicos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-6 border card-hover ${
                service.highlight
                  ? 'border-primary-300 shadow-lg'
                  : 'border-slate-100 shadow-sm'
              } transition-all duration-500`}
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {service.badge && (
                <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${service.badgeColor}`}>
                  {service.badge}
                </span>
              )}
              {service.highlight && (
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(0,123,255,0.03) 0%, rgba(30,58,138,0.04) 100%)' }} />
              )}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  service.highlight ? 'bg-blue-gradient' : 'bg-primary-50'
                }`}
              >
                <service.icon size={22} className={service.highlight ? 'text-white' : 'text-primary-600'} />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`rounded-3xl p-8 lg:p-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', border: '1px solid rgba(0,123,255,0.1)' }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Globe size={24} className="text-primary-600" />
            <h3 className="text-2xl font-black text-dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Niveles que atiendo
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {levels.map((level, i) => (
              <div key={i} className="bg-white rounded-xl p-5 text-center shadow-sm card-hover">
                <div className="text-4xl mb-3">{level.icon}</div>
                <div className="font-bold text-dark mb-1.5" style={{ fontFamily: 'Poppins, sans-serif' }}>{level.name}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{level.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Clock size={16} className="text-primary-600" />
              Clases de 60 o 90 minutos
            </div>
            <div className="w-px h-4 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Zap size={16} className="text-primary-600" />
              Clases personalizadas según tu objetivo
            </div>
            <div className="w-px h-4 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Target size={16} className="text-primary-600" />
              Material de estudio incluido
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
