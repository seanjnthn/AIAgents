import { Window, SectionTitle } from '../shared';
import { useState } from 'react';

const advancedTopics = [
  {
    id: 'multi-agent',
    title: 'Multi-Agent Systems',
    icon: '🌐',
    color: 'blue',
    description: 'Orchestrating teams of specialized agents that collaborate, delegate tasks, and communicate to solve complex problems together.',
    details: [
      { title: 'Communication Protocols', desc: 'How agents exchange information — shared blackboard, message passing, or event-driven architectures.' },
      { title: 'Task Allocation', desc: 'Dynamic assignment of sub-tasks based on agent capabilities, current load, and specialization.' },
      { title: 'Consensus Mechanisms', desc: 'How multiple agents agree on decisions — voting, arbitration, or hierarchical approval.' },
      { title: 'Conflict Resolution', desc: 'Handling disagreements between agents about strategy, priorities, or resource allocation.' },
    ],
    examples: ['AutoGen teams', 'CrewAI roles', 'LangGraph workflows', 'ChatDev simulation'],
  },
  {
    id: 'rag',
    title: 'Retrieval-Augmented Generation',
    icon: '📖',
    color: 'purple',
    description: 'Enhancing agent intelligence by grounding responses in real-time data from knowledge bases, documents, and external sources.',
    details: [
      { title: 'Embedding Strategies', desc: 'Converting text to vectors for semantic search. Choice of model affects quality and speed.' },
      { title: 'Chunking Techniques', desc: 'How to split documents for retrieval — fixed-size, semantic, or recursive chunking strategies.' },
      { title: 'Hybrid Search', desc: 'Combining semantic similarity with keyword matching for better retrieval accuracy.' },
      { title: 'Re-ranking', desc: 'Post-retrieval scoring to improve result quality using cross-encoders or LLM judges.' },
    ],
    examples: ['LlamaIndex', 'LangChain RAG', 'Pinecone', 'Weaviate', 'ChromaDB'],
  },
  {
    id: 'evaluation',
    title: 'Agent Evaluation',
    icon: '🧪',
    color: 'cyan',
    description: 'Systematic approaches to measuring agent performance, reliability, safety, and alignment with intended behaviors.',
    details: [
      { title: 'Benchmark Suites', desc: 'Standardized tests: SWE-bench (coding), GAIA (general), WebArena (web tasks), HumanEval (code gen).' },
      { title: 'Adversarial Testing', desc: 'Red-teaming agents with edge cases, prompt injections, and unexpected inputs to find weaknesses.' },
      { title: 'Regression Testing', desc: 'Ensuring agent updates don\'t break existing capabilities. Automated test suites for agent behavior.' },
      { title: 'Human Evaluation', desc: 'Expert review of agent outputs for quality, accuracy, and alignment. Inter-rater agreement metrics.' },
    ],
    examples: ['SWE-bench', 'GAIA', 'WebArena', 'AgentBench', 'ToolBench'],
  },
  {
    id: 'finetuning',
    title: 'Fine-Tuning & Customization',
    icon: '🎯',
    color: 'amber',
    description: 'Adapting base models and agent behaviors for specific domains, organizations, and use cases through targeted training.',
    details: [
      { title: 'LoRA / QLoRA', desc: 'Parameter-efficient fine-tuning that adapts models with minimal compute. Freeze base weights, train small adapters.' },
      { title: 'RLHF / DPO', desc: 'Reinforcement learning from human feedback. Train models to prefer outputs humans rate higher.' },
      { title: 'Tool Training', desc: 'Teaching agents to use specific tools effectively through demonstration and practice data.' },
      { title: 'Domain Adaptation', desc: 'Specializing general models for specific industries — legal, medical, financial, or technical domains.' },
    ],
    examples: ['OpenAI Fine-tuning', 'Anthropic Claude', 'Hugging Face TRL', 'Axolotl', 'Unsloth'],
  },
  {
    id: 'security',
    title: 'Security & Trust',
    icon: '🔒',
    color: 'rose',
    description: 'Building robust security frameworks to protect against prompt injection, data leakage, and unauthorized actions.',
    details: [
      { title: 'Prompt Injection Defense', desc: 'Techniques to prevent malicious inputs from overriding agent instructions and safety constraints.' },
      { title: 'Sandboxed Execution', desc: 'Running agent code and tool calls in isolated environments to prevent system compromise.' },
      { title: 'Permission Models', desc: 'Fine-grained access control — what each agent can read, write, execute, and access.' },
      { title: 'Audit & Explainability', desc: 'Complete logging of agent decisions with reasoning traces for accountability and debugging.' },
    ],
    examples: ['Guardrails AI', 'NeMo Guardrails', 'Rebuff', 'Lakera', 'CalypsoAI'],
  },
  {
    id: 'deployment',
    title: 'Production Deployment',
    icon: '🚀',
    color: 'emerald',
    description: 'Production-ready architectures for deploying agents at scale with reliability, observability, and cost management.',
    details: [
      { title: 'Architecture Patterns', desc: 'Event-driven vs request-response, streaming vs batch, synchronous vs asynchronous processing.' },
      { title: 'Cost Optimization', desc: 'Caching strategies, model routing (cheap models for simple tasks), token budget management.' },
      { title: 'Observability', desc: 'Tracing agent execution, monitoring costs, tracking success rates, and alerting on anomalies.' },
      { title: 'Scaling Strategies', desc: 'Horizontal scaling, load balancing, queue management, and graceful degradation under load.' },
    ],
    examples: ['LangSmith', 'Braintrust', 'Arize Phoenix', 'Helicone', 'Portkey'],
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
};

export default function AdvancedTab() {
  const [activeTopic, setActiveTopic] = useState('multi-agent');
  const currentTopic = advancedTopics.find(t => t.id === activeTopic)!;

  return (
    <div className="space-y-6">
      <Window title="advanced — Deep Dive Topics">
        <SectionTitle
          badge="🧬 Advanced"
          badgeColor="amber"
          title="Going"
          highlight="Beyond Basics"
          description="Master the cutting-edge techniques and architectures that separate production-grade agent systems from simple prototypes."
        />

        {/* Topic selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {advancedTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopic(topic.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                activeTopic === topic.id
                  ? `${colorMap[topic.color]} font-medium`
                  : 'bg-white/2 border-white/5 text-white/40 hover:text-white/60 hover:border-white/10'
              }`}
            >
              <span>{topic.icon}</span>
              <span className="hidden md:inline">{topic.title}</span>
            </button>
          ))}
        </div>

        {/* Active topic detail */}
        <div className="glass-card p-6 gradient-border">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{currentTopic.icon}</span>
            <h3 className="text-xl font-bold text-white">{currentTopic.title}</h3>
          </div>
          <p className="text-sm text-white/50 leading-relaxed mb-6">{currentTopic.description}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {currentTopic.details.map((detail) => (
              <div key={detail.title} className="p-4 rounded-xl bg-white/3 border border-white/5">
                <div className="text-sm font-medium text-white/80 mb-1">{detail.title}</div>
                <div className="text-xs text-white/40 leading-relaxed">{detail.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            <span className="text-[10px] text-white/25 mr-2">Tools & Frameworks:</span>
            {currentTopic.examples.map((ex) => (
              <span key={ex} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-white/35">
                {ex}
              </span>
            ))}
          </div>
        </div>
      </Window>

      {/* Frameworks comparison */}
      <Window title="advanced — Framework Comparison">
        <SectionTitle
          badge="🛠️ Tools"
          badgeColor="cyan"
          title="Popular Agent"
          highlight="Frameworks"
          description="Compare the most popular frameworks for building AI agents. Each has different strengths and trade-offs."
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left py-3 px-4 text-xs font-medium text-white/40">Framework</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-white/40">Best For</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-white/40">Language</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-white/40">Complexity</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-white/40">Stars</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'LangChain', best: 'General-purpose chains', lang: 'Python/JS', complexity: 'Medium', stars: '90k+' },
                { name: 'AutoGen', best: 'Multi-agent conversations', lang: 'Python', complexity: 'High', stars: '30k+' },
                { name: 'CrewAI', best: 'Role-based teams', lang: 'Python', complexity: 'Low', stars: '15k+' },
                { name: 'LlamaIndex', best: 'Data-connected agents', lang: 'Python/TS', complexity: 'Medium', stars: '35k+' },
                { name: 'Semantic Kernel', best: 'Enterprise integration', lang: 'C#/Python', complexity: 'Medium', stars: '20k+' },
                { name: 'LangGraph', best: 'Stateful workflows', lang: 'Python/JS', complexity: 'High', stars: 'New' },
                { name: 'Dify', best: 'Visual agent builder', lang: 'Python', complexity: 'Low', stars: '40k+' },
                { name: 'OpenAI Swarm', best: 'Lightweight orchestration', lang: 'Python', complexity: 'Low', stars: 'New' },
              ].map((fw) => (
                <tr key={fw.name} className="border-b border-white/3 hover:bg-white/2 transition-colors">
                  <td className="py-3 px-4 font-medium text-white/80">{fw.name}</td>
                  <td className="py-3 px-4 text-white/40">{fw.best}</td>
                  <td className="py-3 px-4 text-white/40">{fw.lang}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      fw.complexity === 'Low' ? 'bg-green-500/10 text-green-400' :
                      fw.complexity === 'Medium' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-rose-500/10 text-rose-400'
                    }`}>{fw.complexity}</span>
                  </td>
                  <td className="py-3 px-4 text-white/30">⭐ {fw.stars}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Window>

      {/* Code Example */}
      <Window title="advanced — Code Example">
        <h3 className="text-lg font-bold text-white mb-4">Building a Simple Agent (Python)</h3>
        <div className="p-5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs overflow-x-auto">
          <pre className="text-white/60">
{`from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI
from langchain.utilities import SerpAPIWrapper

# Define tools the agent can use
search = SerpAPIWrapper()
tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Useful for answering questions about current events"
    ),
    Tool(
        name="Calculator", 
        func=lambda x: str(eval(x)),
        description="Useful for mathematical calculations"
    )
]

# Initialize the agent with ReAct reasoning
agent = initialize_agent(
    tools, 
    OpenAI(temperature=0),
    agent="react-docstore",
    verbose=True  # Show reasoning steps
)

# Run the agent
result = agent.run(
    "What is the current price of Bitcoin in EUR? "
    "If I bought 0.5 BTC today, how much would that be?"
)
print(result)`}
          </pre>
        </div>
        <p className="text-xs text-white/30 mt-3">
          This example shows a basic ReAct agent with search and calculator tools. 
          Production agents add memory, guardrails, error handling, and more sophisticated planning.
        </p>
      </Window>
    </div>
  );
}
