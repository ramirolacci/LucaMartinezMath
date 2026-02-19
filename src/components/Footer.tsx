function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

const navLinks = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'contenidos', label: 'Contenidos' },
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
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg"
                  style={{ background: 'linear-gradient(135deg, #007BFF, #1E3A8A)' }}
                >
                  LM
                </div>
                <div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Luca Martínez
                  </div>
                  <div className="text-slate-400 text-xs">Profesor de Matemáticas</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
                Clases particulares de matemáticas para todos los niveles. Metodología personalizada, resultados reales.
              </p>
              <a
                href="https://instagram.com/lucamartinezmath"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
              >
                <InstagramIcon />
                @lucamartinezmath
              </a>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegación</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-slate-400 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-600 flex-shrink-0" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-slate-400">
                  <span className="text-primary-400 font-medium block text-xs uppercase tracking-wide mb-0.5">WhatsApp</span>
                  +54 9 11 XXXX-XXXX
                </li>
                <li className="text-slate-400">
                  <span className="text-primary-400 font-medium block text-xs uppercase tracking-wide mb-0.5">Email</span>
                  luca@lucamartinezmath.com
                </li>
                <li className="text-slate-400">
                  <span className="text-primary-400 font-medium block text-xs uppercase tracking-wide mb-0.5">Zona</span>
                  Tigre, Buenos Aires, Argentina
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
