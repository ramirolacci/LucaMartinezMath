import { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import MathBackground from './MathBackground';
import FloatingEquations from './FloatingEquations';

interface FormData {
  nombre: string;
  email: string;
  nivel: string;
  mensaje: string;
}

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+54 9 11 3389-1497',
    href: 'https://wa.me/5491133891497',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'luca.gm11@gmail.com',
    href: 'mailto:luca.gm11@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@lucamateclases',
    href: 'https://www.instagram.com/lucamateclases/',
  },
  {
    icon: MapPin,
    label: 'Zona',
    value: 'General Pacheco, Buenos Aires, Argentina',
    href: null,
  },
];

const niveles = ['Secundaria', 'Preuniversitario', 'Universitario', 'Otro'];

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const [form, setForm] = useState<FormData>({
    nombre: '',
    email: '',
    nivel: '',
    mensaje: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `Hola, mi nombre es ${form.nombre}.\nY mi mail es ${form.email}.\nMi caso es: ${form.mensaje}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491133891497?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setLoading(false);
  };

  return (
    <section
      id="contacto"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 overflow-hidden"
    >
      <MathBackground variant="light" />
      <FloatingEquations opacity={0.07} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
            Contacto
          </span>
          <h2
            className="font-black leading-none text-dark"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            ¿Hablamos?
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Escribime y te respondo en menos de 24 horas para coordinar día y horario de clase.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-primary-50 space-y-5">
              <h3 className="text-xl font-bold text-dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Contactame
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="nombre">
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Charly García"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder:text-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="suigeneris@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="nivel">
                  Nivel educativo *
                </label>
                <select
                  id="nivel"
                  name="nivel"
                  required
                  value={form.nivel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="" disabled>Seleccionar nivel</option>
                  {niveles.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5" htmlFor="mensaje">
                  Contame en qué puedo ayudarte *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="¿Qué materia/s necesitás? ¿Cuál es tu mayor dificultad? ¿Tenés algún examen próximo?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 placeholder:text-slate-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Whatsapp
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                Al enviar, aceptás que te contacte por email o WhatsApp para coordinar tu clase.
              </p>
            </form>
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4 card-hover">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-semibold text-dark hover:text-primary-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-dark">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100" style={{ height: '280px' }}>
              <iframe
                title="Mapa General Pacheco, Buenos Aires"
                src="https://www.google.com/maps?q=General%20Pacheco%2C%20Buenos%20Aires%2C%20Argentina&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div
              className="rounded-2xl p-5 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #007BFF 0%, #1E3A8A 100%)' }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, white, transparent)', transform: 'translate(30%, -30%)' }} />
              <h4 className="font-bold text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Empecemos a trabajar tus objetivos
              </h4>
              <p className="text-primary-100 text-sm leading-relaxed">
                Evaluamos tu nivel, detectamos tus puntos débiles y armamos un plan de estudio a medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
