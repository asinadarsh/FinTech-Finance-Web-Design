export default function ConcentricCircles() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[800px] h-[800px]">
        {/* Concentric circles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
            style={{
              width: `${i * 160}px`,
              height: `${i * 160}px`,
            }}
          />
        ))}

        {/* Revolving arc */}
        <div className="absolute inset-0 animate-spin-slow">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="400"
              cy="400"
              r="395"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="120 2360"
              strokeLinecap="round"
              className="drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Additional glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-emerald-500/5 via-transparent to-transparent blur-3xl" />
      </div>
    </div>
  );
}
