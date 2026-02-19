import { useEffect, useState } from 'react';

const loaderEquations = [
  'π ≈ 3.14159',
  'E = mc²',
  'x² + y² = r²',
  '∫ₐᵇ f(x)dx',
  'lim x→0 sin x / x = 1',
  'Δ = b² - 4ac',
  '∑ₙ n²',
  'f\'(x) = 0',
  'P(A∩B) = P(A)P(B)',
  'e^{iπ} + 1 = 0',
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [equationIndex, setEquationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return p + 4;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const eqInterval = setInterval(() => {
      setEquationIndex((prev) => (prev + 1) % loaderEquations.length);
    }, 260);
    return () => clearInterval(eqInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white math-pattern-lg overflow-hidden">
      <div className="flex flex-col items-center gap-8 relative z-10">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 animate-spin-slow" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="44" stroke="#dbeafe" strokeWidth="3"/>
            <path
              d="M48 4 A44 44 0 0 1 92 48"
              stroke="url(#loaderGrad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#007BFF"/>
                <stop offset="100%" stopColor="#1E3A8A"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-black text-gradient select-none">π</span>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Luca Martínez
          </h2>
          <p className="text-sm text-slate-400 font-medium tracking-widest uppercase">
            Clases de Matemáticas
          </p>
        </div>

        <div className="min-h-[28px] flex items-center justify-center">
          <span className="text-xs sm:text-sm font-mono text-primary-600">
            {loaderEquations[equationIndex]}
          </span>
        </div>

        <div className="w-48 h-1 bg-blue-50 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #007BFF, #1E3A8A)',
            }}
          />
        </div>

        <div className="flex gap-6 text-slate-300 text-lg font-mono select-none">
          <span className="animate-bounce-slow" style={{ animationDelay: '0s' }}>∑</span>
          <span className="animate-bounce-slow" style={{ animationDelay: '0.3s' }}>∫</span>
          <span className="animate-bounce-slow" style={{ animationDelay: '0.6s' }}>√</span>
          <span className="animate-bounce-slow" style={{ animationDelay: '0.9s' }}>Δ</span>
        </div>
      </div>

    </div>
  );
}
