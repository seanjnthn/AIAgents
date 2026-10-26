import { Window, SectionTitle } from '../shared';

const personalCases = [
  {
    icon: '📧',
    title: 'Email & Calendar Manager',
    category: 'Productivity',
    description: 'Automatically triage emails by priority, draft contextual responses, schedule meetings around your preferences, and manage your daily agenda.',
    capabilities: ['Priority sorting', 'Smart replies', 'Meeting scheduling', 'Daily briefings', 'Follow-up reminders'],
    tools: ['Gmail API', 'Calendar API', 'NLP for drafting'],
    timeSaved: '2+ hours/day',
  },
  {
    icon: '📚',
    title: 'Research Assistant',
    category: 'Learning',
    description: 'Deep-dive into any topic, summarize academic papers, compare viewpoints across sources, and generate comprehensive research briefs with citations.',
    capabilities: ['Paper summarization', 'Source comparison', 'Citation management', 'Knowledge graphs', 'Gap analysis'],
    tools: ['Web search', 'PDF parsing', 'Vector databases'],
    timeSaved: '10x research speed',
  },
  {
    icon: '💻',
    title: 'Code Companion',
    category: 'Development',
    description: 'Write, debug, refactor, and explain code. Build entire applications from natural language descriptions with iterative refinement and testing.',
    capabilities: ['Code generation', 'Bug detection', 'Test writing', 'Documentation', 'Architecture advice'],
    tools: ['Code interpreter', 'Git integration', 'Package managers'],
    timeSaved: '5x development speed',
  },
  {
    icon: '🎨',
    title: 'Creative Partner',
    category: 'Creative',
    description: 'Generate content ideas, write drafts, create visual concepts, brainstorm names, and iterate on creative projects with contextual understanding.',
    capabilities: ['Idea generation', 'Content drafting', 'Style adaptation', 'Image prompts', 'Brand voice'],
    tools: ['Image generation', 'Writing tools', 'Trend analysis'],
    timeSaved: 'Unlimited ideation',
  },
  {
    icon: '💰',
    title: 'Financial Advisor',
    category: 'Finance',
    description: 'Track spending patterns, analyze investment portfolios, optimize budgets, forecast expenses, and provide personalized financial recommendations.',
    capabilities: ['Spending analysis', 'Budget optimization', 'Investment tracking', 'Tax planning', 'Goal forecasting'],
    tools: ['Bank APIs', 'Market data', 'Spreadsheet tools'],
    timeSaved: 'Smarter decisions',
  },
  {
    icon: '🏥',
    title: 'Health & Wellness Coach',
    category: 'Health',
    description: 'Monitor health metrics from wearables, suggest personalized workout plans, track nutrition, and provide evidence-based wellness recommendations.',
    capabilities: ['Workout planning', 'Nutrition tracking', 'Sleep analysis', 'Habit formation', 'Progress reports'],
    tools: ['Health APIs', 'Wearable data', 'Nutrition databases'],
    timeSaved: 'Personalized guidance',
  },
  {
    icon: '🎓',
    title: 'Learning Tutor',
    category: 'Education',
    description: 'Adaptive learning companion that adjusts to your pace, identifies knowledge gaps, creates practice problems, and explains concepts in multiple ways.',
    capabilities: ['Adaptive difficulty', 'Spaced repetition', 'Concept explanation', 'Quiz generation', 'Progress tracking'],
    tools: ['Knowledge bases', 'Assessment tools', 'Content generation'],
    timeSaved: '2x learning speed',
  },
  {
    icon: '🏠',
    title: 'Home & Life Manager',
    category: 'Lifestyle',
    description: 'Manage household tasks, plan meals, coordinate family schedules, track subscriptions, and handle life admin tasks automatically.',
    capabilities: ['Meal planning', 'Shopping lists', 'Bill tracking', 'Maintenance reminders', 'Travel planning'],
    tools: ['Calendar APIs', 'Recipe databases', 'Price comparison'],
    timeSaved: '5+ hours/week',
  },
];

export default function PersonalTab() {
  return (
    <div className="space-y-6">
      <Window title="personal — AI Agents for You">
        <SectionTitle
          badge="👤 Personal"
          badgeColor="pink"
          title="Agents for"
          highlight="Your Life"
          description="AI agents aren't just for businesses. Discover how personal AI agents can transform your daily routines, boost productivity, and help you achieve your goals."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {personalCases.map((item) => (
            <div key={item.title} className="glass-card p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.capabilities.map((cap) => (
                  <span key={cap} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-white/35">
                    {cap}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-green-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-[10px] text-green-400/60">{item.timeSaved}</span>
                </div>
                <div className="text-[10px] text-white/20">
                  Tools: {item.tools.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Window>

      {/* Getting Started */}
      <Window title="personal — Getting Started">
        <SectionTitle
          badge="🚀 Start"
          badgeColor="emerald"
          title="Start Using"
          highlight="Personal Agents"
          description="You don't need to be technical to benefit from AI agents. Here are accessible options available today."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              level: 'No Code',
              color: 'green',
              tools: [
                { name: 'ChatGPT + Plugins', desc: 'General-purpose agent with web browsing, code, and image tools' },
                { name: 'Claude Projects', desc: 'Persistent context and file analysis for ongoing projects' },
                { name: 'Microsoft Copilot', desc: 'Integrated into Windows, Office, and Edge browser' },
                { name: 'Google Gemini', desc: 'Multimodal agent with Google ecosystem integration' },
              ],
            },
            {
              level: 'Low Code',
              color: 'blue',
              tools: [
                { name: 'Zapier AI', desc: 'Connect AI agents to 5000+ apps with visual workflows' },
                { name: 'Make.com AI', desc: 'Build automated agent workflows with drag-and-drop' },
                { name: 'Dify', desc: 'Visual agent builder with RAG and tool integration' },
                { name: 'Relevance AI', desc: 'No-code agent builder for business workflows' },
              ],
            },
            {
              level: 'Developer',
              color: 'purple',
              tools: [
                { name: 'LangChain', desc: 'Python/JS framework for building custom agent chains' },
                { name: 'CrewAI', desc: 'Multi-agent framework with role-based collaboration' },
                { name: 'AutoGen', desc: 'Microsoft\'s framework for conversational agent teams' },
                { name: 'OpenAI Assistants API', desc: 'Hosted agent platform with built-in tools' },
              ],
            },
          ].map((tier) => (
            <div key={tier.level} className="glass-card p-5">
              <div className={`text-xs font-semibold mb-3 ${
                tier.color === 'green' ? 'text-green-400' :
                tier.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
              }`}>
                {tier.level}
              </div>
              <div className="space-y-3">
                {tier.tools.map((tool) => (
                  <div key={tool.name} className="p-3 rounded-lg bg-white/3 border border-white/5">
                    <div className="text-xs font-medium text-white/80">{tool.name}</div>
                    <div className="text-[10px] text-white/30 mt-0.5">{tool.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Window>

      {/* Tips */}
      <Window title="personal — Best Practices">
        <h3 className="text-lg font-bold text-white mb-4">Tips for Effective Personal Agent Use</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { tip: 'Start with clear goals', detail: 'Define what you want the agent to accomplish before engaging. Specific goals yield better results.' },
            { tip: 'Provide context', detail: 'Share relevant background, preferences, and constraints. The more context, the better the agent can help.' },
            { tip: 'Iterate and refine', detail: 'Don\'t expect perfection on the first try. Give feedback and let the agent adjust its approach.' },
            { tip: 'Verify important outputs', detail: 'Always double-check critical information, especially for financial, legal, or health-related decisions.' },
            { tip: 'Build workflows gradually', detail: 'Start with simple tasks and progressively add complexity as you build trust in the agent.' },
            { tip: 'Use memory features', detail: 'Take advantage of persistent memory to avoid repeating context. Build on previous interactions.' },
          ].map((item) => (
            <div key={item.tip} className="p-4 rounded-xl bg-white/3 border border-white/5">
              <div className="text-sm font-medium text-white/80 mb-1">{item.tip}</div>
              <div className="text-xs text-white/40">{item.detail}</div>
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
}
