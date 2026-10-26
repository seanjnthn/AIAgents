import { Window, SectionTitle, InfoCard, StatCard } from '../shared';

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Hero Window */}
      <Window title="ai-agents-guide.app — Overview">
        <div className="text-center py-8 md:py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/60">The Complete Interactive Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Understanding
            <br />
            <span className="gradient-text">AI Agents</span>
          </h1>
          
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore everything about AI agents — from fundamental concepts to advanced enterprise deployments. 
            Navigate through tabs to dive deep into each topic.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <StatCard value="8" label="Topics" sublabel="Comprehensive" />
            <StatCard value="50+" label="Use Cases" sublabel="Real-world" />
            <StatCard value="2025" label="Current" sublabel="Up-to-date" />
            <StatCard value="∞" label="Potential" sublabel="Growing fast" />
          </div>
        </div>
      </Window>

      {/* Quick Navigation */}
      <Window title="navigation — Quick Start">
        <SectionTitle 
          badge="📌 Navigation"
          badgeColor="blue"
          title="Explore by Topic"
          description="Each tab contains detailed information about a specific aspect of AI agents. Click any tab above to dive deeper."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard 
            icon="📖" 
            title="Fundamentals" 
            description="What AI agents are, how they differ from traditional AI, and core concepts you need to know." 
          />
          <InfoCard 
            icon="🏗️" 
            title="Architecture" 
            description="The building blocks: LLMs, memory systems, tool integration, planning, and safety guardrails." 
          />
          <InfoCard 
            icon="⚙️" 
            title="How It Works" 
            description="The observe-think-act loop, task decomposition, tool selection, and iterative refinement." 
          />
          <InfoCard 
            icon="👤" 
            title="Personal Use" 
            description="Email management, research, coding assistance, creative projects, and daily productivity." 
          />
          <InfoCard 
            icon="🏢" 
            title="Enterprise" 
            description="Customer operations, DevOps, sales automation, compliance, and large-scale deployments." 
          />
          <InfoCard 
            icon="🧬" 
            title="Advanced" 
            description="Multi-agent systems, RAG, fine-tuning, security, evaluation, and production patterns." 
          />
          <InfoCard 
            icon="🔮" 
            title="Future" 
            description="Emerging trends, timeline predictions, challenges, and what's coming next in agent evolution." 
          />
          <InfoCard 
            icon="🛠️" 
            title="Frameworks" 
            description="LangChain, AutoGen, CrewAI, LlamaIndex, and other popular agent development tools." 
          />
        </div>
      </Window>

      {/* Key Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <Window title="market — Industry Growth">
          <h3 className="text-xl font-bold text-white mb-6">The Agent Revolution</h3>
          <div className="space-y-4">
            {[
              { label: 'Global AI Agent Market Size (2025)', value: '$15.2B', growth: '+45% YoY' },
              { label: 'Enterprise Adoption Rate', value: '67%', growth: '+28% since 2023' },
              { label: 'Developer Tools Available', value: '200+', growth: 'Open source' },
              { label: 'Average Productivity Gain', value: '40%', growth: 'Per employee' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/5">
                <div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                  <div className="text-xs text-white/30 mt-0.5">{stat.growth}</div>
                </div>
                <div className="text-xl font-bold gradient-text">{stat.value}</div>
              </div>
            ))}
          </div>
        </Window>

        <Window title="timeline — Evolution">
          <h3 className="text-xl font-bold text-white mb-6">Agent Evolution Timeline</h3>
          <div className="space-y-4">
            {[
              { year: '2022', event: 'ChatGPT launches', detail: 'Conversational AI goes mainstream' },
              { year: '2023', event: 'AutoGPT & BabyAGI', detail: 'First autonomous agent experiments' },
              { year: '2024', event: 'Agent frameworks mature', detail: 'LangChain, CrewAI, AutoGen stabilize' },
              { year: '2025', event: 'Enterprise adoption', detail: 'Production-grade agent deployments' },
              { year: '2026+', event: 'Multi-agent systems', detail: 'Collaborative agent swarms' },
            ].map((item) => (
              <div key={item.year} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 text-right">
                  <span className="text-sm font-mono font-bold text-blue-400">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400/60 mt-2" />
                <div>
                  <div className="text-sm font-medium text-white">{item.event}</div>
                  <div className="text-xs text-white/40">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </Window>
      </div>

      {/* Getting Started */}
      <Window title="getting-started — Begin Your Journey">
        <h3 className="text-xl font-bold text-white mb-4">Where to Start?</h3>
        <p className="text-white/50 mb-6">
          New to AI agents? Start with the Fundamentals tab to understand core concepts. 
          Already familiar? Jump to Advanced or Enterprise tabs for deeper technical content.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <div className="text-sm font-medium text-blue-400 mb-2">🟢 Beginner</div>
            <p className="text-xs text-white/40">Start with Fundamentals → Architecture → How It Works</p>
          </div>
          <div className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/20">
            <div className="text-sm font-medium text-purple-400 mb-2">🟡 Intermediate</div>
            <p className="text-xs text-white/40">Explore Personal → Enterprise → Advanced topics</p>
          </div>
          <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
            <div className="text-sm font-medium text-cyan-400 mb-2">🔵 Advanced</div>
            <p className="text-xs text-white/40">Dive into Advanced → Future → Framework details</p>
          </div>
        </div>
      </Window>
    </div>
  );
}
