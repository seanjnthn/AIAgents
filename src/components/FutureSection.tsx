import { useInView } from '../hooks/useInView';

const trends = [
  {
    year: '2024-2025',
    title: 'The Agent Awakening',
    description: 'Single-purpose agents become mainstream. Coding assistants, research tools, and customer service bots demonstrate clear value.',
    status: 'current',
  },
  {
    year: '2025-2026',
    title: 'Multi-Agent Orchestration',
    description: 'Teams of specialized agents collaborate seamlessly. Enterprise workflows are automated end-to-end with agent swarms.',
    status: 'emerging',
  },
  {
    year: '2026-2027',
    title: 'Embodied & Physical Agents',
    description: 'AI agents extend into robotics, IoT, and physical environments. Agents control real-world systems with precision.',
    status: 'emerging',
  },
  {
    year: '2027-2028',
    title: 'Self-Improving Systems',
    description: 'Agents that continuously learn, optimize their own architectures, and develop novel capabilities without human intervention.',
    status: 'future',
  },
  {
    year: '2028+',
    title: 'Autonomous Organizations',
    description: 'Fully autonomous agent-run organizations that can plan, execute, and adapt entire business operations independently.',
    status: 'future',
  },
];

export default function FutureSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="future" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            The Future
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What's <span className="gradient-text-warm">Coming Next</span>
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            The pace of AI agent evolution is accelerating. Here's what experts predict 
            for the next few years of agent development.
          </p>
        </div>

        {/* Timeline */}
        <div className={`relative ${isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-rose-500/50" />

          <div className="space-y-12">
            {trends.map((trend, idx) => (
              <div
                key={trend.year}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white/20 bg-[#050510] z-10">
                  <div className={`absolute inset-1 rounded-full ${
                    trend.status === 'current' ? 'bg-blue-400' :
                    trend.status === 'emerging' ? 'bg-purple-400' : 'bg-rose-400'
                  } animate-pulse`} />
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card p-6 hover-glow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        trend.status === 'current' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        trend.status === 'emerging' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}>
                        {trend.status === 'current' ? 'Now' : trend.status === 'emerging' ? 'Emerging' : 'Future'}
                      </span>
                      <span className="text-sm text-white/30">{trend.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{trend.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{trend.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key challenges */}
        <div className={`mt-24 ${isInView ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Challenges Ahead</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '⚖️', title: 'Alignment', desc: 'Ensuring agents act in accordance with human values and intentions' },
              { icon: '🔍', title: 'Transparency', desc: 'Making agent decisions explainable and auditable' },
              { icon: '🛡️', title: 'Safety', desc: 'Preventing harmful actions and containing agent capabilities' },
              { icon: '🤝', title: 'Governance', desc: 'Establishing frameworks for responsible agent deployment' },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center hover-glow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
