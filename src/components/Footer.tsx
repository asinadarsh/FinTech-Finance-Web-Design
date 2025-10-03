import ConcentricCircles from './ConcentricCircles';

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      <ConcentricCircles />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Ready to{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Transform
          </span>
          <br />
          Your Accounting?
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join thousands of startups that trust Puzzle for their financial operations
        </p>

        <button className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105">
          Get started for free
        </button>

        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Puzzle
              </span>
            </div>
            <div>
              © 2025 Puzzle. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}