import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FundamentalsSection from './components/FundamentalsSection';
import ComponentsSection from './components/ComponentsSection';
import HowItWorksSection from './components/HowItWorksSection';
import PersonalUseCases from './components/PersonalUseCases';
import EnterpriseUseCases from './components/EnterpriseUseCases';
import AdvancedSection from './components/AdvancedSection';
import FutureSection from './components/FutureSection';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      {/* Particle field */}
      <ParticleField />

      {/* Navigation */}
      <Navigation scrollY={scrollY} />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider" />
        <FundamentalsSection />
        <div className="section-divider" />
        <ComponentsSection />
        <div className="section-divider" />
        <HowItWorksSection />
        <div className="section-divider" />
        <PersonalUseCases />
        <div className="section-divider" />
        <EnterpriseUseCases />
        <div className="section-divider" />
        <AdvancedSection />
        <div className="section-divider" />
        <FutureSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
