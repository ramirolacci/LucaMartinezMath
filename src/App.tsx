import { useState, useCallback } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import ContentSection from './components/ContentSection';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = ['sobre-mi', 'servicios', 'contenidos', 'precios', 'contacto'];

function MainApp() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="relative min-h-screen bg-white math-pattern-lg">
      <Navbar activeSection={activeSection} />
      <main>
        <About />
        <Services />
        <ContentSection />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Loader onComplete={handleLoadComplete} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease-in',
          visibility: loaded ? 'visible' : 'hidden',
        }}
      >
        <MainApp />
      </div>
    </>
  );
}
