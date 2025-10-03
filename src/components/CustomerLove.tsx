import { Star, TrendingUp, DollarSign, Users } from 'lucide-react';

export default function CustomerLove() {
  const testimonials = [
    {
      company: 'TechFlow',
      logo: '🚀',
      quote: 'Puzzle transformed our accounting workflow. We saved 20 hours per month.',
      author: 'Sarah Chen',
      role: 'CEO',
    },
    {
      company: 'GrowthLab',
      logo: '🌱',
      quote: 'The Stripe integration is seamless. Everything syncs automatically.',
      author: 'Michael Torres',
      role: 'Founder',
    },
    {
      company: 'DataCore',
      logo: '⚡',
      quote: 'Best accounting software for startups. Period.',
      author: 'Jessica Park',
      role: 'CFO',
    },
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block text-6xl mb-6">❤️</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Customers Love Puzzle
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <Users className="mx-auto mb-4 text-emerald-400" size={40} />
            <div className="text-4xl font-bold mb-2">2K+</div>
            <div className="text-gray-400">Ambitious Startups</div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <DollarSign className="mx-auto mb-4 text-emerald-400" size={40} />
            <div className="text-4xl font-bold mb-2">$20B+</div>
            <div className="text-gray-400">Transactions Categorized</div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <TrendingUp className="mx-auto mb-4 text-emerald-400" size={40} />
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-gray-400">Accuracy Rate</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.logo}</div>
                <div>
                  <div className="font-bold">{testimonial.company}</div>
                  <div className="flex text-emerald-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="text-sm">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
