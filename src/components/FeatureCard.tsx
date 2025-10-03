import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
      <div className="flex flex-col items-start">
        <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>

        {/* Animated mini bar graph */}
        <div className="flex items-end space-x-1.5 h-12 w-full mt-auto">
          {[40, 70, 50, 90, 60, 80, 55].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-emerald-500/60 to-emerald-400/80 rounded-t animate-bar-pulse"
              style={{
                height: `${height}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
