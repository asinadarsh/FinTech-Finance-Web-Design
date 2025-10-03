import { useEffect, useRef, useState } from 'react';

interface AnimatedChartProps {
  scrollY: number;
}

export default function AnimatedChart({ scrollY }: AnimatedChartProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const triggerPoint = sectionTop - window.innerHeight * 0.8;
    const endPoint = sectionTop + sectionHeight * 0.3;

    const scrollProgress = (scrollY - triggerPoint) / (endPoint - triggerPoint);
    setProgress(Math.max(0, Math.min(1, scrollProgress)));
  }, [scrollY]);

  const barHeights = [0.6, 0.8, 0.5, 0.9, 0.7, 1.0, 0.85];
  const linePoints = [0.3, 0.5, 0.4, 0.7, 0.6, 0.9, 0.85];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Real-Time Financial Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch your business grow with live data visualization and intelligent analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transform transition-all duration-700"
            style={{
              opacity: progress,
              transform: `translateY(${20 - progress * 20}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Revenue Growth</h3>
            <div className="flex items-end justify-between h-64 gap-4">
              {barHeights.map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-lg transition-all duration-1000 ease-out relative group"
                  style={{
                    height: `${height * 100 * Math.min(progress * 1.5, 1)}%`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
                    ${(height * 45000).toFixed(0)}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-400">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month) => (
                <span key={month} className="flex-1 text-center">{month}</span>
              ))}
            </div>
          </div>

          {/* Line Chart */}
          <div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transform transition-all duration-700"
            style={{
              opacity: progress,
              transform: `translateY(${20 - progress * 20}px)`,
              transitionDelay: '200ms',
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Expense Tracking</h3>
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 400 256" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 64}
                    x2="400"
                    y2={i * 64}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                ))}

                {/* Area under line */}
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                </defs>

                <path
                  d={`M 0 ${256 - linePoints[0] * 256}
                      ${linePoints.map((point, i) =>
                        `L ${(i / (linePoints.length - 1)) * 400} ${256 - point * 256 * Math.min(progress * 1.5, 1)}`
                      ).join(' ')}
                      L 400 256 L 0 256 Z`}
                  fill="url(#areaGradient)"
                  className="transition-all duration-1000 ease-out"
                />

                {/* Line */}
                <path
                  d={linePoints.map((point, i) =>
                    `${i === 0 ? 'M' : 'L'} ${(i / (linePoints.length - 1)) * 400} ${256 - point * 256 * Math.min(progress * 1.5, 1)}`
                  ).join(' ')}
                  fill="none"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-1000 ease-out"
                />

                {/* Dots */}
                {linePoints.map((point, i) => (
                  <circle
                    key={i}
                    cx={(i / (linePoints.length - 1)) * 400}
                    cy={256 - point * 256 * Math.min(progress * 1.5, 1)}
                    r="5"
                    fill="rgb(59, 130, 246)"
                    className="transition-all duration-1000 ease-out"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <animate
                      attributeName="r"
                      values="5;7;5"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                    />
                  </circle>
                ))}
              </svg>
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-400">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month) => (
                <span key={month} className="flex-1 text-center">{month}</span>
              ))}
            </div>
          </div>

          {/* Donut Chart */}
          <div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transform transition-all duration-700"
            style={{
              opacity: progress,
              transform: `translateY(${20 - progress * 20}px)`,
              transitionDelay: '400ms',
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Expense Breakdown</h3>
            <div className="flex items-center justify-center h-64">
              <svg width="240" height="240" viewBox="0 0 240 240">
                <defs>
                  {['emerald', 'blue', 'purple', 'orange'].map((color, i) => (
                    <linearGradient key={color} id={`${color}Gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={`rgb(var(--${color}-400))`} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={`rgb(var(--${color}-600))`} stopOpacity="1" />
                    </linearGradient>
                  ))}
                </defs>

                {[
                  { percentage: 35, color: 'emerald', label: 'Operations' },
                  { percentage: 28, color: 'blue', label: 'Marketing' },
                  { percentage: 22, color: 'purple', label: 'R&D' },
                  { percentage: 15, color: 'orange', label: 'Other' },
                ].reduce((acc, segment, i, arr) => {
                  const prevTotal = i === 0 ? 0 : acc.total;
                  const circumference = 2 * Math.PI * 80;
                  const offset = circumference - (prevTotal / 100) * circumference;
                  const dashArray = `${(segment.percentage / 100) * circumference * Math.min(progress * 1.5, 1)} ${circumference}`;

                  acc.elements.push(
                    <circle
                      key={i}
                      cx="120"
                      cy="120"
                      r="80"
                      fill="none"
                      stroke={`url(#${segment.color}Gradient)`}
                      strokeWidth="40"
                      strokeDasharray={dashArray}
                      strokeDashoffset={-offset}
                      transform="rotate(-90 120 120)"
                      className="transition-all duration-1000 ease-out"
                      style={{ transitionDelay: `${i * 150}ms` }}
                    />
                  );

                  acc.total = prevTotal + segment.percentage;
                  return acc;
                }, { elements: [] as React.ReactNode[], total: 0 }).elements}

                <circle cx="120" cy="120" r="60" fill="#0a0a0f" />
                <text x="120" y="115" textAnchor="middle" className="text-3xl font-bold fill-white">
                  100%
                </text>
                <text x="120" y="135" textAnchor="middle" className="text-sm fill-gray-400">
                  Budget
                </text>
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { color: 'emerald', label: 'Operations', value: '35%' },
                { color: 'blue', label: 'Marketing', value: '28%' },
                { color: 'purple', label: 'R&D', value: '22%' },
                { color: 'orange', label: 'Other', value: '15%' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-${item.color}-400`}></div>
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <span className="text-sm text-gray-500 ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transform transition-all duration-700"
            style={{
              opacity: progress,
              transform: `translateY(${20 - progress * 20}px)`,
              transitionDelay: '600ms',
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
            <div className="space-y-6">
              {[
                { label: 'Total Revenue', value: '$2.4M', change: '+12.5%', positive: true },
                { label: 'Active Clients', value: '847', change: '+8.2%', positive: true },
                { label: 'Avg Invoice', value: '$2,835', change: '+5.1%', positive: true },
                { label: 'Cash Flow', value: '$890K', change: '+18.3%', positive: true },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl transform transition-all duration-700"
                  style={{
                    opacity: Math.min(progress * 2, 1),
                    transform: `translateX(${20 - Math.min(progress * 2, 1) * 20}px)`,
                    transitionDelay: `${600 + index * 100}ms`,
                  }}
                >
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`text-lg font-semibold ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
