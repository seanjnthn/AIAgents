import { useInView } from '../hooks/useInView';

const components = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'LLM Core (Brain)',
    description: 'The large language model serves as the reasoning engine, interpreting goals, planning actions, and generating responses.',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'Memory System',
    description: 'Short-term and long-term memory allows agents to maintain context, learn from past interactions, and build knowledge over time.',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.76" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: 'Tool Integration',
    description: 'APIs, code executors, web browsers, databases, and other external systems that extend the agent\'s capabilities beyond text.',
    color: 'from-cyan-500 to-green-500',
    borderColor: 'border-cyan-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Planning & Reasoning',
    description: 'Chain-of-thought, tree-of-thought, and ReAct frameworks enable agents to break down complex goals into actionable steps.',
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Perception Layer',
    description: 'Input processing from text, images, audio, structured data, and real-time sensor feeds to understand the environment.',
    color: 'from-rose-500 to-red-500',
    borderColor: 'border-rose-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.334 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Safety & Guardrails',
    description: 'Constraints, validation layers, and human-in-the-loop checkpoints ensure agents operate within defined boundaries.',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
  },
];

export default function ComponentsSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="components" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            Architecture
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Core <span className="gradient-text-warm">Components</span>
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            Every AI agent is built from a combination of these fundamental building blocks. 
            Understanding each component helps you design more effective agent systems.
          </p>
        </div>

        {/* Components grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((comp, idx) => (
            <div
              key={comp.title}
              className={`glass-card p-8 hover-glow tilt-card ${isInView ? `animate-fade-in-up stagger-${idx + 1}` : 'opacity-0'}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${comp.color} bg-opacity-20 flex items-center justify-center text-white mb-6 border ${comp.borderColor}`}>
                {comp.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{comp.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{comp.description}</p>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className={`mt-20 glass-card p-8 md:p-12 ${isInView ? 'animate-fade-in-up stagger-6' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Agent Architecture Flow</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Input', 'Perceive', 'Think', 'Plan', 'Act', 'Observe', 'Learn'].map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="relative group">
                  <div className={`px-5 py-3 rounded-xl bg-gradient-to-br ${
                    i === 0 ? 'from-blue-500/20 to-blue-600/20 border-blue-500/30' :
                    i === 1 ? 'from-purple-500/20 to-purple-600/20 border-purple-500/30' :
                    i === 2 ? 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30' :
                    i === 3 ? 'from-amber-500/20 to-amber-600/20 border-amber-500/30' :
                    i === 4 ? 'from-green-500/20 to-green-600/20 border-green-500/30' :
                    i === 5 ? 'from-rose-500/20 to-rose-600/20 border-rose-500/30' :
                    'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30'
                  } border text-white/80 font-medium text-sm transition-all duration-300 group-hover:scale-110`}>
                    {step}
                  </div>
                </div>
                {i < 6 && (
                  <svg className="w-5 h-5 text-white/20 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-white/30 text-sm mt-6">
            This loop repeats continuously until the goal is achieved or a stopping condition is met
          </p>
        </div>
      </div>
    </section>
  );
}
