import { Window, SectionTitle } from '../shared';
import { useState } from 'react';

export default function FundamentalsTab() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-6">
      {/* Definition Window */}
      <Window title="fundamentals — What Are AI Agents?">
        <SectionTitle
          badge="📖 Core Concepts"
          badgeColor="blue"
          title="What Are"
          highlight="AI Agents?"
          description="AI agents are autonomous software systems powered by large language models that can perceive their environment, make decisions, and take actions to achieve specific goals — without requiring constant human guidance."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Traditional AI */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                🤖
              </div>
              <h3 className="text-lg font-semibold text-white/60">Traditional AI / Chatbots</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Single-turn or limited conversation context',
                'Reactive — only responds when prompted',
                'Cannot use external tools or APIs',
                'No persistent memory across sessions',
                'Requires explicit step-by-step instructions',
                'Static, pre-defined response patterns',
                'Cannot take actions in the real world',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/40 text-sm">
                  <svg className="w-4 h-4 text-red-400/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Agents */}
          <div className="glass-card p-6 gradient-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg">
                ✨
              </div>
              <h3 className="text-lg font-semibold text-white">AI Agents</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Multi-step autonomous reasoning chains',
                'Proactive — pursues goals independently',
                'Uses tools, APIs, and external systems',
                'Persistent memory and long-term context',
                'Plans and decomposes complex tasks',
                'Adapts strategies based on outcomes',
                'Takes real-world actions autonomously',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Characteristics */}
        <h3 className="text-xl font-bold text-white mb-4">Key Characteristics</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: '🧠',
              title: 'Autonomy',
              description: 'Agents operate independently, making decisions and taking actions without requiring step-by-step human guidance. They can initiate tasks, not just respond to them.',
            },
            {
              icon: '🔄',
              title: 'Reasoning Loop',
              description: 'They follow observe-think-act cycles continuously, evaluating their environment, planning next steps, and adjusting strategies based on feedback and results.',
            },
            {
              icon: '🛠️',
              title: 'Tool Use',
              description: 'Agents can invoke APIs, search the web, write and execute code, access databases, send emails, and interact with virtually any digital system.',
            },
            {
              icon: '💾',
              title: 'Memory',
              description: 'Short-term memory for current task context, long-term memory for learned patterns, and episodic memory for past experiences and outcomes.',
            },
            {
              icon: '🎯',
              title: 'Goal-Directed',
              description: 'Agents work toward defined objectives, breaking them into sub-goals and tracking progress. They can handle ambiguity and adapt when plans need revision.',
            },
            {
              icon: '🤝',
              title: 'Collaboration',
              description: 'Multi-agent systems enable specialization — different agents handle different aspects of a complex task, communicating and coordinating to achieve shared goals.',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-5">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
              <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Window>

      {/* Types of Agents */}
      <Window title="fundamentals — Agent Types">
        <SectionTitle
          badge="🏷️ Classification"
          badgeColor="purple"
          title="Types of"
          highlight="AI Agents"
          description="AI agents come in various forms, each designed for different levels of complexity and autonomy."
        />

        <div className="space-y-4">
          {[
            {
              type: 'Simple Reflex Agents',
              level: 'Basic',
              color: 'green',
              description: 'React to current inputs using predefined rules. No memory or planning. Example: spam filters, basic chatbots.',
              examples: ['Rule-based chatbots', 'Spam filters', 'Auto-responders'],
            },
            {
              type: 'Model-Based Agents',
              level: 'Intermediate',
              color: 'blue',
              description: 'Maintain an internal model of the world. Can handle partially observable environments. Example: recommendation systems.',
              examples: ['Recommendation engines', 'Predictive systems', 'Context-aware assistants'],
            },
            {
              type: 'Goal-Based Agents',
              level: 'Advanced',
              color: 'purple',
              description: 'Consider future actions by evaluating how they contribute to achieving goals. Can plan ahead. Example: task automation agents.',
              examples: ['AutoGPT', 'Task planners', 'Workflow automators'],
            },
            {
              type: 'Utility-Based Agents',
              level: 'Expert',
              color: 'amber',
              description: 'Maximize a utility function to choose the best action among alternatives. Can trade off between competing objectives.',
              examples: ['Optimization agents', 'Resource allocators', 'Strategic planners'],
            },
            {
              type: 'Learning Agents',
              level: 'Cutting Edge',
              color: 'rose',
              description: 'Improve over time by learning from experience. Adapt their behavior based on feedback and outcomes. Most modern AI agents fall here.',
              examples: ['Claude', 'ChatGPT with tools', 'Custom fine-tuned agents'],
            },
          ].map((agent) => (
            <div key={agent.type} className="glass-card p-5">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:w-64 flex-shrink-0">
                  <span className={`info-badge ${
                    agent.color === 'green' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                    agent.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                    agent.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                    agent.color === 'amber' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                    'bg-rose-500/10 border-rose-500/20 text-rose-400'
                  }`}>
                    {agent.level}
                  </span>
                  <span className="text-sm font-semibold text-white">{agent.type}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/50 mb-2">{agent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.examples.map((ex) => (
                      <span key={ex} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/5 text-white/40">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Window>

      {/* Additional Reading */}
      <Window title="fundamentals — Key Concepts Deep Dive">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full text-left p-4 rounded-xl bg-white/3 border border-white/5 hover:bg-white/5 transition-all flex items-center justify-between"
        >
          <span className="text-sm font-medium text-white/70">
            {showMore ? '▼' : '▶'} Additional Concepts & Terminology
          </span>
          <span className="text-xs text-white/30">{showMore ? 'Collapse' : 'Expand'}</span>
        </button>
        
        {showMore && (
          <div className="mt-4 grid md:grid-cols-2 gap-4 animate-fade-in">
            {[
              { term: 'Prompt Engineering', def: 'Crafting inputs that guide agent behavior and output quality.' },
              { term: 'Chain-of-Thought (CoT)', def: 'A reasoning technique where the agent shows its step-by-step thinking process.' },
              { term: 'ReAct Pattern', def: 'Combining Reasoning and Acting — the agent thinks, then takes action, then observes results.' },
              { term: 'Tool Calling', def: 'The ability of an agent to invoke external functions, APIs, or services as part of its reasoning.' },
              { term: 'Hallucination', def: 'When an agent generates plausible-sounding but incorrect or fabricated information.' },
              { term: 'Grounding', def: 'Connecting agent outputs to verifiable sources and real-world data to reduce hallucinations.' },
              { term: 'Token', def: 'The basic unit of text processing for LLMs. Roughly 4 characters or ¾ of a word in English.' },
              { term: 'Context Window', def: 'The maximum amount of text an agent can process at once. Ranges from 4K to 1M+ tokens.' },
              { term: 'Embedding', def: 'A numerical representation of text that captures semantic meaning for similarity comparisons.' },
              { term: 'Fine-tuning', def: 'Adapting a pre-trained model on specific data to improve performance for a particular task.' },
            ].map((item) => (
              <div key={item.term} className="p-4 rounded-xl bg-white/3 border border-white/5">
                <div className="text-sm font-semibold text-blue-400 mb-1">{item.term}</div>
                <div className="text-xs text-white/40">{item.def}</div>
              </div>
            ))}
          </div>
        )}
      </Window>
    </div>
  );
}
