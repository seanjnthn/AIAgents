import { Window, SectionTitle } from '../shared';

const components = [
  {
    icon: '🧠',
    title: 'LLM Core (The Brain)',
    color: 'blue',
    description: 'The large language model serves as the central reasoning engine. It interprets goals, generates plans, makes decisions, and produces natural language outputs.',
    details: [
      'Processes natural language instructions and goals',
      'Generates reasoning chains and action plans',
      'Selects appropriate tools for each sub-task',
      'Evaluates outcomes and adjusts strategies',
      'Handles ambiguity and edge cases',
    ],
    models: ['GPT-4o', 'Claude 3.5', 'Gemini Pro', 'Llama 3', 'Mistral Large'],
  },
  {
    icon: '💾',
    title: 'Memory System',
    color: 'purple',
    description: 'Enables agents to maintain context, learn from past interactions, and build knowledge over time. Critical for coherent multi-step tasks.',
    details: [
      'Short-term: Current conversation and task context',
      'Long-term: Persistent knowledge across sessions',
      'Episodic: Records of past actions and outcomes',
      'Semantic: Structured knowledge and facts',
      'Working memory: Active reasoning state',
    ],
    models: ['Vector DBs', 'Redis', 'Pinecone', 'ChromaDB', 'Weaviate'],
  },
  {
    icon: '🔧',
    title: 'Tool Integration',
    color: 'cyan',
    description: 'External capabilities that extend the agent beyond text generation — APIs, code execution, web browsing, file systems, and more.',
    details: [
      'Web search and browsing capabilities',
      'Code interpretation and execution',
      'API calls to external services',
      'File reading, writing, and manipulation',
      'Database queries and data processing',
    ],
    models: ['Function Calling', 'Plugins', 'MCP', 'OpenAPI', 'Custom Tools'],
  },
  {
    icon: '📋',
    title: 'Planning & Reasoning',
    color: 'amber',
    description: 'Frameworks and strategies that enable agents to break down complex goals, prioritize steps, and reason about the best course of action.',
    details: [
      'Task decomposition into sub-goals',
      'Dependency analysis and ordering',
      'Resource allocation and scheduling',
      'Contingency planning for failures',
      'Progress tracking and milestone detection',
    ],
    models: ['Chain-of-Thought', 'Tree-of-Thought', 'ReAct', 'Plan-and-Solve', 'Reflexion'],
  },
  {
    icon: '👁️',
    title: 'Perception Layer',
    color: 'rose',
    description: 'Input processing systems that allow agents to understand text, images, audio, structured data, and real-time sensor feeds.',
    details: [
      'Natural language understanding (NLU)',
      'Image and document parsing',
      'Audio transcription and analysis',
      'Structured data extraction',
      'Real-time event stream processing',
    ],
    models: ['Multimodal LLMs', 'OCR', 'ASR', 'Vision Models', 'Sensor Fusion'],
  },
  {
    icon: '🛡️',
    title: 'Safety & Guardrails',
    color: 'emerald',
    description: 'Constraints, validation layers, and oversight mechanisms that ensure agents operate within defined boundaries and ethical guidelines.',
    details: [
      'Input/output validation and filtering',
      'Permission-based action authorization',
      'Human-in-the-loop checkpoints',
      'Cost and rate limiting controls',
      'Audit logging and explainability',
    ],
    models: ['Guardrails AI', 'NeMo Guardrails', 'Constitutional AI', 'RLHF', 'RLAIF'],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
};

export default function ArchitectureTab() {
  return (
    <div className="space-y-6">
      <Window title="architecture — Core Components">
        <SectionTitle
          badge="🏗️ Building Blocks"
          badgeColor="purple"
          title="Agent"
          highlight="Architecture"
          description="Every AI agent is built from a combination of these fundamental components. Understanding each one helps you design more effective and reliable agent systems."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {components.map((comp) => {
            const colors = colorMap[comp.color];
            return (
              <div key={comp.title} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center text-xl`}>
                    {comp.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">{comp.title}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{comp.description}</p>
                
                <div className="space-y-2 mb-4">
                  {comp.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.bg.replace('/10', '/40')}`} />
                      <span className="text-xs text-white/40">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {comp.models.map((model) => (
                    <span key={model} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-white/30">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Window>

      {/* Architecture Flow */}
      <Window title="architecture — Data Flow">
        <SectionTitle
          badge="🔄 Flow"
          badgeColor="cyan"
          title="Agent Processing"
          highlight="Pipeline"
          description="How data flows through an agent system from input to output."
        />

        <div className="flex flex-wrap items-center justify-center gap-3 py-6">
          {[
            { label: 'User Input', color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
            { label: 'Parse & Validate', color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30' },
            { label: 'Retrieve Context', color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30' },
            { label: 'Reason & Plan', color: 'from-amber-500/20 to-amber-600/20 border-amber-500/30' },
            { label: 'Select Tools', color: 'from-green-500/20 to-green-600/20 border-green-500/30' },
            { label: 'Execute Actions', color: 'from-rose-500/20 to-rose-600/20 border-rose-500/30' },
            { label: 'Evaluate Results', color: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30' },
            { label: 'Output Response', color: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30' },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className={`px-4 py-2.5 rounded-xl bg-gradient-to-br ${step.color} border text-white/70 text-xs font-medium`}>
                {step.label}
              </div>
              {i < 7 && (
                <svg className="w-4 h-4 text-white/15 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white/3 border border-white/5 mt-4">
          <p className="text-xs text-white/40 text-center">
            This pipeline can loop multiple times as the agent iterates on its approach. 
            The evaluation step may trigger a return to the reasoning phase if results don't meet expectations.
          </p>
        </div>
      </Window>

      {/* Design Patterns */}
      <Window title="architecture — Design Patterns">
        <SectionTitle
          badge="📐 Patterns"
          badgeColor="amber"
          title="Common Agent"
          highlight="Design Patterns"
          description="Proven architectural patterns for building effective agent systems."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              name: 'Single Agent',
              desc: 'One agent handles all tasks. Simple to build and debug. Best for focused, well-defined tasks.',
              pros: ['Simple architecture', 'Easy debugging', 'Lower cost'],
              cons: ['Limited capability', 'Single point of failure', 'No specialization'],
            },
            {
              name: 'Sequential Pipeline',
              desc: 'Multiple agents in a chain, each handling a specific step. Output of one feeds into the next.',
              pros: ['Clear separation', 'Specialized agents', 'Easy to extend'],
              cons: ['Linear flow only', 'Slower execution', 'Error propagation'],
            },
            {
              name: 'Hierarchical',
              desc: 'A manager agent delegates to worker agents. The manager coordinates and synthesizes results.',
              pros: ['Good coordination', 'Scalable', 'Flexible delegation'],
              cons: ['Complex setup', 'Manager bottleneck', 'Higher cost'],
            },
            {
              name: 'Collaborative Swarm',
              desc: 'Multiple agents work in parallel, communicating and sharing information to solve problems together.',
              pros: ['High parallelism', 'Robust', 'Emergent behavior'],
              cons: ['Very complex', 'Hard to debug', 'Expensive'],
            },
          ].map((pattern) => (
            <div key={pattern.name} className="glass-card p-5">
              <h4 className="text-sm font-semibold text-white mb-2">{pattern.name}</h4>
              <p className="text-xs text-white/40 mb-3">{pattern.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[10px] text-green-400/60 mb-1 font-medium">PROS</div>
                  {pattern.pros.map((p) => (
                    <div key={p} className="text-[11px] text-white/30 flex items-center gap-1">
                      <span className="text-green-400/40">+</span> {p}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[10px] text-red-400/60 mb-1 font-medium">CONS</div>
                  {pattern.cons.map((c) => (
                    <div key={c} className="text-[11px] text-white/30 flex items-center gap-1">
                      <span className="text-red-400/40">−</span> {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
}
