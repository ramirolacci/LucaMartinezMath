const equations = [
  { text: 'π ≈ 3.14159', x: '5%', y: '15%', delay: '0s', duration: '7s' },
  { text: 'E = mc²', x: '88%', y: '20%', delay: '1s', duration: '9s' },
  { text: '∫ f(x)dx', x: '12%', y: '72%', delay: '2s', duration: '8s' },
  { text: 'x² + y² = r²', x: '80%', y: '65%', delay: '0.5s', duration: '11s' },
  { text: 'Δ = b²-4ac', x: '45%', y: '8%', delay: '3s', duration: '10s' },
  { text: '∑ n²', x: '2%', y: '45%', delay: '1.5s', duration: '8s' },
  { text: 'f\'(x)', x: '92%', y: '45%', delay: '2.5s', duration: '9s' },
  { text: 'lim x→∞', x: '55%', y: '88%', delay: '4s', duration: '12s' },
  { text: '√2', x: '70%', y: '12%', delay: '0.8s', duration: '6s' },
  { text: 'sin²θ+cos²θ=1', x: '15%', y: '90%', delay: '3.5s', duration: '10s' },
];

export default function FloatingEquations({ opacity = 0.12 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {equations.map((eq, i) => (
        <div
          key={i}
          className="absolute font-mono font-bold text-primary-600"
          style={{
            left: eq.x,
            top: eq.y,
            opacity,
            fontSize: i % 3 === 0 ? '0.85rem' : i % 3 === 1 ? '0.75rem' : '0.7rem',
            animation: `floatSlow ${eq.duration} ease-in-out ${eq.delay} infinite`,
            letterSpacing: '0.02em',
          }}
        >
          {eq.text}
        </div>
      ))}

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(-3deg); }
          66% { transform: translateY(10px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}
