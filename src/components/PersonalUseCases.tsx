import { useInView } from '../hooks/useInView';

const personalCases = [
  {
    icon: '📧',
    title: 'Email & Calendar Manager',
    description: 'Automatically triage emails, draft responses, schedule meetings, and manage your daily agenda based on priorities and preferences.',
    tags: ['Productivity', 'Automation'],
    impact: 'Save 2+ hours daily',
  },
  {
    icon: '📚',
    title: 'Research Assistant',
    description: 'Deep-dive into any topic, summarize papers, compare viewpoints, and generate comprehensive research briefs with citations.',
    tags: ['Learning', 'Analysis'],
    impact: '10x research speed',
  },
  {
    icon: '💻',
    title: 'Code Companion',
    description: 'Write, debug, refactor, and explain code. Build entire applications from natural language descriptions with iterative refinement.',
    tags: ['Development', 'Coding'],
    impact: 'Ship 5x faster',
  },
  {
    icon: '🎨',
    title: 'Creative Partner',
    description: 'Generate content ideas, write drafts, create visual concepts, and iterate on creative projects with contextual understanding.',
    tags: ['Creative', 'Content'],
    impact: 'Unlimited ideation',
  },
  {
    icon: '💰',
    title: 'Financial Advisor',
    description: 'Track spending, analyze investments, optimize budgets, and provide personalized financial recommendations based on your goals.',
    tags: ['Finance', 'Planning'],
    impact: 'Smarter decisions',
  },
  {
    icon: '🏥',
    title: 'Health & Wellness Coach',
    description: 'Monitor health metrics, suggest workout plans, track nutrition, and provide personalized wellness recommendations.',
    tags: ['Health', 'Wellness'],
    impact: 'Personalized guidance',
  },
];

export default function PersonalUseCases() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="personal" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
            Personal Use
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Agents for <span className="gradient-text-warm">Your Life</span>
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            AI agents aren't just for businesses. Discover how personal AI agents can transform 
            your daily routines, boost productivity, and help you achieve your goals.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalCases.map((item, idx) => (
            <div
              key={item.title}
              className={`glass-card p-7 hover-glow group ${isInView ? `animate-fade-in-up stagger-${idx + 1}` : 'opacity-0'}`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{item.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-sm text-green-400/80">{item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center ${isInView ? 'animate-fade-in-up stagger-6' : 'opacity-0'}`}>
          <div className="glass-card inline-block p-8 md:p-12 gradient-border">
            <h3 className="text-2xl font-bold text-white mb-4">Start Your Agent Journey</h3>
            <p className="text-white/50 max-w-lg mb-6">
              The best part? You don't need to be technical. Many personal AI agents are available today 
              through simple interfaces and natural language.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['ChatGPT', 'Claude', 'Copilot', 'AutoGPT', 'BabyAGI'].map((tool) => (
                <span key={tool} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
