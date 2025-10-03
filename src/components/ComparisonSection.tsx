import { Check, X, Clock, DollarSign, Users } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Results in{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              5 Minutes
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            See the difference automation makes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* With Puzzle */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-emerald-400">With Puzzle</h3>
              <Check className="text-emerald-400" size={32} />
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Clock className="text-emerald-400 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold">5 minutes</div>
                  <div className="text-sm text-gray-400">Setup time</div>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="text-emerald-400 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold">1 person</div>
                  <div className="text-sm text-gray-400">Team required</div>
                </div>
              </div>

              <div className="flex items-start">
                <DollarSign className="text-emerald-400 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold">$49/month</div>
                  <div className="text-sm text-gray-400">All-inclusive</div>
                </div>
              </div>
            </div>

            {/* Animated bar graph */}
            <div className="bg-black/30 rounded-2xl p-6">
              <div className="text-sm text-gray-400 mb-4">Monthly efficiency</div>
              <div className="flex items-end space-x-2 h-32">
                {[95, 88, 92, 97, 90, 94, 98].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t animate-bar-pulse"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Without Puzzle */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 opacity-60">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-400">Without Puzzle</h3>
              <X className="text-red-400" size={32} />
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Clock className="text-gray-500 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-400">2-3 weeks</div>
                  <div className="text-sm text-gray-500">Setup time</div>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="text-gray-500 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-400">3-5 people</div>
                  <div className="text-sm text-gray-500">Team required</div>
                </div>
              </div>

              <div className="flex items-start">
                <DollarSign className="text-gray-500 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-400">$500+/month</div>
                  <div className="text-sm text-gray-500">Plus hidden costs</div>
                </div>
              </div>
            </div>

            {/* Empty/static graph */}
            <div className="bg-black/30 rounded-2xl p-6">
              <div className="text-sm text-gray-500 mb-4">Monthly efficiency</div>
              <div className="flex items-end space-x-2 h-32">
                {[30, 25, 35, 28, 32, 27, 30].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
