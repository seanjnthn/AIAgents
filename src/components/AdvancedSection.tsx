import { useInView } from '../hooks/useInView';

const advancedTopics = [
  {
    title: 'Multi-Agent Systems',
    description: 'Orchestrating teams of specialized agents that collaborate, delegate tasks, and communicate to solve complex problems together.',
    details: [
      'Agent-to-agent communication protocols',
      'Hierarchical and peer-to-peer architectures',
      'Task allocation and load balancing',
      'Consensus mechanisms for decision-making',
    ],
    icon: '🌐',
  },
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Enhancing agent intelligence by grounding responses in real-time data from knowledge bases, documents, and external sources.',
    details: [
      'Vector databases and embedding strategies',
      'Chunking and retrieval optimization',
      'Hybrid search (semantic + keyword)',
      'Context window management',
    ],
    icon: '📖',
  },
  {
    title: 'Agent Evaluation & Testing',
    description: 'Systematic approaches to measuring agent performance, reliability, safety, and alignment with intended behaviors.',
    details: [
      'Benchmark suites (SWE-bench, GAIA, WebArena)',
      'Adversarial testing and red-teaming',
      'Regression testing for agent updates',
      'Human evaluation frameworks',
    ],
    icon: '🧪',
  },
  {
    title: 'Fine-Tuning & Customization',
    description: 'Adapting base models and agent behaviors for specific domains, organizations, and use cases through targeted training.',
    details: [
      'LoRA and parameter-efficient fine-tuning',
      'RLHF and preference optimization',
      'Domain-specific tool training',
      'Behavioral alignment techniques',
    ],
    icon: '🎯',
  },
  {
    title: 'Security & Trust',
    description: 'Building robust security frameworks to protect against prompt injection, data leakage, and unauthorized actions.',
    details: [
      'Prompt injection defense mechanisms',
      'Sandboxed execution environments',
      'Permission models and access control',
      'Audit trails and explainability',
    ],
    icon: '🔒',
  },
  {
    title: 'Deployment Patterns',
    description: 'Production-ready architectures for deploying agents at scale with reliability, observability, and cost management.',
    details: [
      'Event-driven vs. request-response patterns',
      'Streaming and real-time processing',
      'Cost optimization and caching strategies',
      'Monitoring, logging, and alerting',
    ],
    icon: '🚀',
  },
];

export default function AdvancedSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="advanced" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            Advanced
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Going <span className="gradient-text">Beyond Basics</span>
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            Master the cutting-edge techniques and architectures that separate production-grade 
            agent systems from simple prototypes.
          </p>
        </div>

        {/* Advanced topics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedTopics.map((topic, idx) => (
            <div
              key={topic.title}
              className={`glass-card p-7 hover-glow group ${isInView ? `animate-fade-in-up stagger-${idx + 1}` : 'opacity-0'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{topic.icon}</span>
                <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{topic.description}</p>
              
              {/* Detail list */}
              <ul className="space-y-2">
                {topic.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs text-white/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 mt-1.5 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Framework comparison */}
        <div className={`mt-20 glass-card p-8 md:p-12 ${isInView ? 'animate-fade-in-up stagger-6' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Popular Agent Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'LangChain', desc: 'Most popular framework', stars: '90k+' },
              { name: 'AutoGen', desc: 'Multi-agent conversations', stars: '30k+' },
              { name: 'CrewAI', desc: 'Role-based agents', stars: '15k+' },
              { name: 'LlamaIndex', desc: 'Data-connected agents', stars: '35k+' },
              { name: 'Semantic Kernel', desc: 'Microsoft\'s framework', stars: '20k+' },
              { name: 'Haystack', desc: 'Production pipelines', stars: '16k+' },
              { name: 'OpenAI Swarm', desc: 'Lightweight orchestration', stars: 'New' },
              { name: 'Dify', desc: 'Visual agent builder', stars: '40k+' },
            ].map((fw) => (
              <div key={fw.name} className="p-4 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/5 text-center">
                <div className="font-semibold text-white text-sm">{fw.name}</div>
                <div className="text-xs text-white/30 mt-1">{fw.desc}</div>
                <div className="text-xs text-blue-400/60 mt-2">⭐ {fw.stars}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
