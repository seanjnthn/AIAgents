import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Autonomous Intelligence';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Central animated element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-white/5 pulse-ring" />
          <div className="absolute inset-8 rounded-full border border-white/5 pulse-ring" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-16 rounded-full border border-white/5 pulse-ring" style={{ animationDelay: '2s' }} />
          
          {/* Liquid shape */}
          <div className="absolute inset-24 md:inset-32">
            <div className="w-full h-full liquid-shape bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm" />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white/70">The Complete Guide to AI Agents</span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-in-up stagger-2 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="text-white">Understanding</span>
          <br />
          <span className="gradient-text">{typedText}</span>
          <span className="typing-cursor text-blue-400">|</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up stagger-3 text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
          From fundamental concepts to advanced enterprise deployments — explore how AI agents 
          are reshaping the way we work, create, and solve complex problems.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#fundamentals"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)]"
          >
            <span className="relative z-10">Start Learning</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#enterprise"
            className="px-8 py-4 rounded-full border border-white/10 text-white/80 font-medium text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300"
          >
            Enterprise Solutions →
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up stagger-5 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '97%', label: 'Task Automation' },
            { value: '10x', label: 'Productivity Boost' },
            { value: '24/7', label: 'Always Available' },
            { value: '∞', label: 'Scalability' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
