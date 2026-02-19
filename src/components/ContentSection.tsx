import { Play, FileText, Calculator, ChevronRight, Layers } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import MathBackground from './MathBackground';

const topics = [
  {
    level: 'Nivel Básico',
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    subjects: [
      { name: 'Aritmética y números naturales', type: 'video', duration: '45 min' },
      { name: 'Fracciones y decimales', type: 'pdf', duration: '30 min' },
      { name: 'Geometría plana', type: 'ejercicios', duration: '60 min' },
      { name: 'Proporcionalidad y porcentajes', type: 'video', duration: '40 min' },
    ],
  },
  {
    level: 'Nivel Intermedio',
    color: 'from-primary-600 to-primary-800',
    bgLight: 'bg-primary-50',
    textColor: 'text-primary-700',
    borderColor: 'border-primary-200',
    subjects: [
      { name: 'Álgebra y ecuaciones', type: 'video', duration: '90 min' },
      { name: 'Funciones y gráficos', type: 'ejercicios', duration: '75 min' },
      { name: 'Trigonometría completa', type: 'video', duration: '120 min' },
      { name: 'Estadística descriptiva', type: 'pdf', duration: '60 min' },
    ],
  },
  {
    level: 'Nivel Avanzado',
    color: 'from-violet-600 to-primary-900',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-700',
    borderColor: 'border-violet-200',
    subjects: [
      { name: 'Cálculo diferencial e integral', type: 'video', duration: '180 min' },
      { name: 'Álgebra lineal y matrices', type: 'ejercicios', duration: '120 min' },
      { name: 'Probabilidad y distribuciones', type: 'pdf', duration: '90 min' },
      { name: 'Ecuaciones diferenciales', type: 'video', duration: '150 min' },
    ],
  },
];

const typeIcons: Record<string, typeof Play> = {
  video: Play,
  pdf: FileText,
  ejercicios: Calculator,
};

const typeLabels: Record<string, string> = {
  video: 'Video',
  pdf: 'Material PDF',
  ejercicios: 'Ejercicios',
};

const typeColors: Record<string, string> = {
  video: 'bg-red-50 text-red-600',
  pdf: 'bg-blue-50 text-primary-600',
  ejercicios: 'bg-amber-50 text-amber-700',
};

export default function ContentSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="contenidos"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 overflow-hidden"
    >
      <MathBackground variant="light" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
            Temario
          </span>
          <h2
            className="font-black leading-none text-dark"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            ¿Contenidos?
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Un programa estructurado que se adapta a tu nivel actual y tus metas académicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {topics.map((topic, topicIdx) => (
            <div
              key={topicIdx}
              className={`bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 card-hover transition-all duration-500`}
              style={{
                transitionDelay: `${topicIdx * 120}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
              }}
            >
              <div className={`h-2 bg-gradient-to-r ${topic.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center`}>
                    <Layers size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-dark text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {topic.level}
                  </h3>
                </div>

                <div className="space-y-3">
                  {topic.subjects.map((subject, subIdx) => {
                    const Icon = typeIcons[subject.type];
                    return (
                      <div
                        key={subIdx}
                        className={`flex items-center gap-3 p-3 rounded-xl border ${topic.borderColor} ${topic.bgLight} group cursor-pointer transition-all duration-200 hover:shadow-sm`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${typeColors[subject.type]}`}>
                          <Icon size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-dark truncate">{subject.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                            <span>{typeLabels[subject.type]}</span>
                            <span>·</span>
                            <span>{subject.duration}</span>
                          </div>
                        </div>
                        <ChevronRight size={14} className={`${topic.textColor} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold border-2 ${topic.borderColor} ${topic.textColor} hover:bg-gradient-to-r hover:${topic.color} hover:text-white hover:border-transparent transition-all duration-300`}
                >
                  Comenzar con este nivel
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 rounded-2xl p-6 bg-white border border-primary-100 shadow-sm flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center flex-shrink-0">
            <Calculator size={22} className="text-white" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="font-bold text-dark">¿No sabés en qué nivel estás?</div>
            <div className="text-sm text-slate-500 mt-0.5">
              Escribime y hacemos una evaluación diagnóstica para ubicarte en el nivel correcto.
            </div>
          </div>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm py-2.5 px-6 whitespace-nowrap flex-shrink-0"
          >
            Quiero una evaluación
          </button>
        </div>
      </div>
    </section>
  );
}
