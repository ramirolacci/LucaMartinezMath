export default function MathBackground({ variant = 'light' }: { variant?: 'light' | 'dark' | 'blue' }) {
  const isDark = variant === 'dark';
  const isBlue = variant === 'blue';
  const stroke = isDark ? 'rgba(255,255,255,0.15)' : isBlue ? 'rgba(255,255,255,0.2)' : 'rgba(37,99,235,0.22)';
  const fill = isDark ? 'rgba(255,255,255,0.07)' : isBlue ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.12)';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`grid-${variant}`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={stroke} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${variant})`}/>

        <circle cx="10%" cy="20%" r="80" fill="none" stroke={stroke} strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: '10% 20%' }}/>
        <circle cx="10%" cy="20%" r="50" fill="none" stroke={stroke} strokeWidth="0.5" className="animate-spin-reverse" style={{ transformOrigin: '10% 20%' }}/>

        <circle cx="90%" cy="75%" r="120" fill="none" stroke={stroke} strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: '90% 75%', animationDuration: '25s' }}/>
        <circle cx="90%" cy="75%" r="70" fill="none" stroke={stroke} strokeWidth="0.5" className="animate-spin-reverse" style={{ transformOrigin: '90% 75%', animationDuration: '18s' }}/>

        <polygon points="70%,5% 75%,15% 65%,15%" fill={fill} stroke={stroke} strokeWidth="1" className="animate-float" style={{ transformOrigin: '70% 10%' }}/>
        <polygon points="20%,80% 25%,90% 15%,90%" fill={fill} stroke={stroke} strokeWidth="1" className="animate-float-slow" style={{ transformOrigin: '20% 85%' }}/>
        <polygon points="85%,40% 88%,47% 82%,47%" fill={fill} stroke={stroke} strokeWidth="1" className="animate-float" style={{ transformOrigin: '85% 43%', animationDelay: '3s' }}/>

        <line x1="5%" y1="50%" x2="25%" y2="50%" stroke={stroke} strokeWidth="1" strokeDasharray="4 4"/>
        <line x1="75%" y1="25%" x2="95%" y2="25%" stroke={stroke} strokeWidth="1" strokeDasharray="4 4"/>
        <line x1="40%" y1="5%" x2="60%" y2="5%" stroke={stroke} strokeWidth="1" strokeDasharray="4 4"/>

        <circle cx="5%" cy="50%" r="4" fill={stroke}/>
        <circle cx="25%" cy="50%" r="4" fill={stroke}/>
        <circle cx="75%" cy="25%" r="4" fill={stroke}/>
        <circle cx="95%" cy="25%" r="4" fill={stroke}/>

        <path d="M 15% 65% Q 30% 55% 45% 65% T 75% 65%" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="5 3"/>
        <path d="M 25% 30% Q 40% 20% 55% 30% T 85% 30%" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="5 3"/>

        <rect x="3%" y="70%" width="18" height="18" rx="2" fill="none" stroke={stroke} strokeWidth="1" className="animate-float-slow" style={{ transformOrigin: '4% 71%', animationDelay: '1s' }}/>
        <rect x="92%" y="10%" width="24" height="24" rx="2" fill="none" stroke={stroke} strokeWidth="1" className="animate-float" style={{ transformOrigin: '93% 11%', animationDelay: '2.5s' }}/>
      </svg>
    </div>
  );
}
