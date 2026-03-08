import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const navItems = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'precios', label: 'Precios' },
  { id: 'contacto', label: 'Contacto' },
];

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <a
            href="https://www.instagram.com/lucamateclases/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
            aria-label="Instagram @lucamateclases"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #007BFF, #1E3A8A)' }}
            >
              <Instagram size={20} />
            </div>
            <span className="font-bold text-sm text-dark tracking-tight group-hover:text-primary-600 transition-colors duration-200">
              @lucamateclases
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Navegación principal">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${isActive
                    ? 'text-primary-600 bg-primary-50 font-semibold'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollTo('contacto')}
              className="ml-3 btn-primary text-sm py-2 px-5"
            >
              Agendar clase
            </button>
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-blue-50 shadow-lg animate-fade-in">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                    ? 'text-primary-600 bg-primary-50 font-semibold'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollTo('contacto')}
              className="mt-2 btn-primary text-sm py-2.5 justify-center"
            >
              Agendar clase
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
