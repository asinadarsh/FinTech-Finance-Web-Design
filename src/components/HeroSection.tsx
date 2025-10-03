import { TrendingUp, Calendar, PieChart, FileText } from 'lucide-react';
import ConcentricCircles from './ConcentricCircles';
import FeatureCard from './FeatureCard';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ConcentricCircles />

      <div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center"
        style={{ opacity }}
      >
        <div className="mb-4 inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
          Built native to Stripe
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Accounting Software<br />
          That{' '}
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Exceeds
          </span>
          <br />
          Expectations
        </h1>

        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Streamline your financial operations with intelligent automation and real-time insights
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <FeatureCard
            icon={<TrendingUp size={24} />}
            title="Be tax ready"
            description="Automated compliance"
          />
          <FeatureCard
            icon={<Calendar size={24} />}
            title="Real-time sync"
            description="Always up to date"
          />
          <FeatureCard
            icon={<PieChart size={24} />}
            title="Smart insights"
            description="Data-driven decisions"
          />
          <FeatureCard
            icon={<FileText size={24} />}
            title="Easy reporting"
            description="One-click exports"
          />
        </div>
      </div>
    </section>
  );
}
