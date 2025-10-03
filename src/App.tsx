import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BranchingPath from './components/BranchingPath';
import AnimatedChart from './components/AnimatedChart';
import AscendingLines from './components/AscendingLines';
import ComparisonSection from './components/ComparisonSection';
import CustomerLove from './components/CustomerLove';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection scrollY={scrollY} />
      <BranchingPath scrollY={scrollY} />
      <AnimatedChart scrollY={scrollY} />
      <AscendingLines scrollY={scrollY} />
      <ComparisonSection />
      <CustomerLove />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
