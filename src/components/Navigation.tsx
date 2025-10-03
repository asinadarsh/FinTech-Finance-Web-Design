import { Menu } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Puzzle
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#product" className="text-gray-300 hover:text-white transition-colors">
                Product
              </a>
              <a href="#customers" className="text-gray-300 hover:text-white transition-colors">
                Customers
              </a>
              <a href="#company" className="text-gray-300 hover:text-white transition-colors">
                Company
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-gray-300 hover:text-white transition-colors border border-gray-600 rounded-lg hover:border-gray-400">
              Log in
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/20">
              Get started for free
            </button>
            <button className="md:hidden text-gray-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
