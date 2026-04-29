export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round">
        <polygon points="50,3 54,46 97,50 54,54 50,97 46,54 3,50 46,46" />
        <polygon points="50,14 57,43 86,50 57,57 50,86 43,57 14,50 43,43" opacity="0.55" />
        <circle cx="50" cy="50" r="1.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function StarSpinning({ className = "" }: { className?: string }) {
  return <Star className={`${className} animate-spin-slow`} />;
}

export function Ornament() {
  return (
    <div className="flex items-center justify-center gap-8 py-16">
      <span className="h-px w-32 bg-border" />
      <Star className="w-8 h-8 text-brass" />
      <span className="h-px w-32 bg-border" />
    </div>
  );
}

export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M5 20 Q 30 5, 60 20 T 100 20" />
      <circle cx="100" cy="20" r="3" />
      <path d="M100 20 Q 130 35, 160 20 T 195 20" />
      <circle cx="5" cy="20" r="1.2" fill="currentColor" />
      <circle cx="195" cy="20" r="1.2" fill="currentColor" />
    </svg>
  );
}
