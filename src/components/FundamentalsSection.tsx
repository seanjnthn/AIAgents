import { useInView } from '../hooks/useInView';

export default function FundamentalsSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="fundamentals" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            Fundamentals
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Are <span className="gradient-text">AI Agents</span>?
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            AI agents are autonomous software systems powered by large language models that can perceive their environment, 
            make decisions, and take actions to achieve specific goals — without constant human intervention.
          </p>
        </div>

        {/* Comparison cards */}
        <div className={`grid md:grid-cols-2 gap-8 mb-16 ${isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          {/* Traditional AI */}
          <div className="glass-card p-8 hover-glow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white/60">Traditional AI / Chatbots</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Single-turn or limited conversation',
                'Reactive — waits for input',
                'Cannot use external tools',
                'No memory across sessions',
                'Requires explicit instructions',
                'Static responses',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/40">
                  <svg className="w-5 h-5 text-red-400/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Agents */}
          <div className="glass-card p-8 hover-glow gradient-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">AI Agents</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Multi-step autonomous reasoning',
                'Proactive — pursues goals independently',
                'Uses tools, APIs, and external systems',
                'Persistent memory and context',
                'Plans and decomposes complex tasks',
                'Adapts and learns from outcomes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key characteristics */}
        <div className={`grid md:grid-cols-3 gap-6 ${isInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          {[
            {
              icon: '🧠',
              title: 'Autonomy',
              description: 'Agents operate independently, making decisions and taking actions without requiring step-by-step human guidance.',
            },
            {
              icon: '🔄',
              title: 'Reasoning Loop',
              description: 'They follow observe-think-act cycles, continuously evaluating their environment and adjusting strategies.',
            },
            {
              icon: '🛠️',
              title: 'Tool Use',
              description: 'Agents can invoke APIs, search the web, write code, access databases, and interact with any digital system.',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 hover-glow tilt-card">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
