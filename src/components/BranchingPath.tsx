import { useEffect, useRef, useState } from 'react';
import { Building2, Calculator } from 'lucide-react';

interface BranchingPathProps {
  scrollY: number;
}

export default function BranchingPath({ scrollY }: BranchingPathProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const triggerPoint = sectionTop - window.innerHeight * 0.7;
    const endPoint = sectionTop + sectionHeight * 0.3;

    const scrollProgress = (scrollY - triggerPoint) / (endPoint - triggerPoint);
    setProgress(Math.max(0, Math.min(1, scrollProgress)));
  }, [scrollY]);

  const verticalProgress = Math.min(progress * 3, 1);
  const horizontalProgress = Math.max(0, Math.min((progress - 0.3) * 3, 1));
  const contentOpacity = Math.max(0, (progress - 0.4) * 2.5);

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* SVG Path Animation */}
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-60 pointer-events-none"
          viewBox="0 0 800 300"
          fill="none"
        >
          {/* Vertical line */}
          <line
            x1="400"
            y1="0"
            x2="400"
            y2={150 * verticalProgress}
            stroke="url(#dotGradient)"
            strokeWidth="2"
            strokeDasharray="4 8"
            className="transition-all duration-300"
          />

          {/* Left horizontal line */}
          {verticalProgress >= 0.99 && (
            <line
              x1="400"
              y1="150"
              x2={400 - 250 * horizontalProgress}
              y2="150"
              stroke="url(#dotGradient)"
              strokeWidth="2"
              strokeDasharray="4 8"
              className="transition-all duration-300"
            />
          )}

          {/* Right horizontal line */}
          {verticalProgress >= 0.99 && (
            <line
              x1="400"
              y1="150"
              x2={400 + 250 * horizontalProgress}
              y2="150"
              stroke="url(#dotGradient)"
              strokeWidth="2"
              strokeDasharray="4 8"
              className="transition-all duration-300"
            />
          )}

          <defs>
            <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(16,185,129,0.4)" />
              <stop offset="100%" stopColor="rgba(16,185,129,1)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-48">
          {/* Founder Block */}
          <div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transform transition-all duration-700"
            style={{
              opacity: contentOpacity,
              transform: `translateX(${20 - contentOpacity * 20}px)`,
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <Building2 size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">I'm a Founder</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Focus on building your business while Puzzle handles your accounting. Get real-time insights into your financial health and stay tax-ready year-round.
            </p>
            <ul className="space-y-3">
              {['Automated bookkeeping', 'Real-time dashboards', 'Tax preparation'].map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Accountant Block */}
          <div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transform transition-all duration-700"
            style={{
              opacity: contentOpacity,
              transform: `translateX(${-20 + contentOpacity * 20}px)`,
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
              <Calculator size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">I'm an Accountant</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Streamline your workflow with powerful tools designed for accounting professionals. Manage multiple clients efficiently with automation and integration.
            </p>
            <ul className="space-y-3">
              {['Multi-client management', 'Advanced reporting', 'Collaboration tools'].map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
