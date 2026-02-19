import { BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import MathBackground from './MathBackground';
import FloatingEquations from './FloatingEquations';

const stats = [
  { value: '+2', label: 'Años de experiencia', icon: Award },
  { value: '+50', label: 'Alumnos aprobados', icon: Users },
  { value: '98%', label: 'Tasa de aprobación', icon: TrendingUp },
  { value: 'K-12', label: 'Todos los niveles', icon: BookOpen },
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="sobre-mi"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <MathBackground variant="light" />
      <FloatingEquations opacity={0.1} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
            El Profesor
          </span>
          <h1
            className="font-black leading-tight text-dark"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Especialista en
            <br />
            <span className="text-gradient">Matemáticas</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p className="text-xl font-semibold text-dark">
                Hola, soy <span className="text-gradient font-bold">Luca Martínez</span>, Licenciado en Matemáticas con más de 2 años de experiencia en clases particulares.
              </p>
              <p>
                Me especializo en hacer que las matemáticas sean accesibles y comprensibles para todos. Mi método se basa en identificar las dificultades específicas de cada alumno y construir desde los fundamentos, paso a paso.
              </p>
              <p>
                Trabajo con estudiantes de secundaria, preuniversitarios y universitarios que quieren mejorar sus resultados, prepararse para exámenes o simplemente perderle el miedo a los números.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Álgebra', 'Cálculo', 'Trigonometría', 'Estadística', 'Geometría', 'Física'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-100">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <BookOpen size={18} />
                Agendar una clase
              </button>
              <button
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-primary-600 border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-300"
              >
                Ver servicios
              </button>
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="relative">
              <div
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                style={{ boxShadow: '0 0 0 8px rgba(0,123,255,0.1), 0 30px 60px rgba(0,123,255,0.2)' }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #007BFF 0%, #1E3A8A 100%)' }}
                >
                  <div className="text-center text-white">
                    <div className="text-7xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>LM</div>
                    <div className="text-sm font-medium opacity-80 mt-1">Foto perfil</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-blue-50 animate-bounce-slow">
                <span className="text-2xl font-black text-gradient">π</span>
              </div>
              <div className="absolute -bottom-2 -left-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-blue-50 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-2xl font-black text-primary-600">∑</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 text-center shadow-md border border-blue-50 card-hover"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <stat.icon size={20} className="text-primary-600 mx-auto mb-1" />
                  <div className="text-2xl font-black text-gradient" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium leading-tight mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
