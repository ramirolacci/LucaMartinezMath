import { Instagram } from 'lucide-react';

const navLinks = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'precios', label: 'Precios' },
  { id: 'contacto', label: 'Contacto' },
];

const baseSymbols = [
  'π', '∑', '∫', '√', 'Δ', '∞', '≈', 'θ', 'λ', '∂',
  'α', 'β', 'γ', 'μ', 'σ', 'φ', 'ω', '≠', '≤', '≥',
  '∈', '∉', '⊂', '⊆', '⊇', '∪', '∩', '⇒', '⇔', 'ℤ',
  'ℝ', 'ℕ', 'x', 'y', 'f(x)', 'lim', 'sin', 'cos',
];

const mathSymbols = Array.from({ length: 42 }, (_, i) => baseSymbols[i % baseSymbols.length]);

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1E293B 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {mathSymbols.map((sym, i) => (
          <div
            key={i}
            className="absolute font-mono font-bold text-white/5"
            style={{
              left: `${(i * 7 + 3) % 98}%`,
              top: `${(i * 11 + 6) % 88}%`,
              transform: `rotate(${(i * 17) % 360}deg)`,
              fontSize: `${2.2 + ((i * 13) % 18) / 10}rem`,
            }}
          >
            {sym}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20">
                  <img src="/Luca.jpeg" alt="Luca Martínez" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Luca Martínez
                  </div>
                  <div className="text-slate-400 text-xs">Profesor de Matemáticas</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs mx-auto sm:mx-0">
                Clases particulares de matemáticas para nivel secundario y universitario. Metodología personalizada, resultados reales.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegación</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-slate-400 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center justify-center sm:justify-start gap-1.5 w-full sm:w-auto"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-600 flex-shrink-0" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-slate-400">
                  <span className="text-primary-400 font-medium block text-xs uppercase tracking-wide mb-0.5">WhatsApp</span>
                  +54 9 11 3389-1497
                </li>
                <li className="text-slate-400">
                  <span className="text-primary-400 font-medium block text-xs uppercase tracking-wide mb-0.5">Email</span>
                  luca.gm11@gmail.com
                </li>
                <li className="text-slate-400">
                  <span className="text-primary-400 font-medium block text-xs uppercase tracking-wide mb-0.5">Instagram</span>
                  <a href="https://www.instagram.com/lucamateclases/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-1.5">
                    <Instagram size={14} className="text-primary-400" />
                    @lucamateclases
                  </a>
                </li>
              </ul>

              <div className="mt-5 pt-5 border-t border-white/10">
                <button
                  onClick={() => scrollTo('contacto')}
                  className="btn-primary text-xs py-2.5 w-full justify-center"
                >
                  Escribime para coordinar
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()}{' '}
              <a
                href="https://waveframe.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-200 font-semibold transition-colors"
              >
                Desarrollado por WaveFrame Studio
              </a>
              . Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-slate-600 text-xs font-mono">
              {['π', '∑', '∫', '√'].map((s) => (
                <span key={s} className="hover:text-primary-400 transition-colors cursor-default">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
