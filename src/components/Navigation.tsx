import { useState, useEffect } from 'react';

interface NavigationProps {
  scrollY: number;
}

const navLinks = [
  { label: 'Fundamentals', href: '#fundamentals' },
  { label: 'Components', href: '#components' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Personal', href: '#personal' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'Advanced', href: '#advanced' },
  { label: 'Future', href: '#future' },
];

export default function Navigation({ scrollY }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[2px] rounded-[10px] bg-[#050510] flex items-center justify-center">
              <span className="text-lg font-bold gradient-text">AI</span>
            </div>
          </div>
          <span className="text-lg font-semibold text-white/90 hidden sm:block">
            AI Agents
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#fundamentals"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 text-sm text-white/90 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
        >
          Get Started
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white/70 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-nav mt-2 mx-4 rounded-2xl p-4 border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
