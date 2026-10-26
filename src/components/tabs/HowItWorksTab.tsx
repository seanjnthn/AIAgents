import { Window, SectionTitle } from '../shared';
import { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Receive & Parse Goal',
    icon: '🎯',
    description: 'The agent receives a high-level objective from the user or triggering system. The goal is parsed, validated against safety constraints, and normalized into an actionable format.',
    details: [
      'Natural language understanding extracts intent',
      'Safety checks validate the request is permissible',
      'Parameters and constraints are identified',
      'The goal is stored in working memory',
    ],
    example: '"Research the top 5 competitors in the CRM space and create a comparison report with pricing, features, and market positioning."',
  },
  {
    id: 2,
    title: 'Decompose into Sub-tasks',
    icon: '🧩',
    description: 'The agent breaks the goal into smaller, manageable sub-tasks using planning frameworks. It identifies dependencies and determines execution order.',
    details: [
      'Chain-of-Thought reasoning identifies steps',
      'Dependency graph is constructed',
      'Parallelizable tasks are identified',
      'Resource requirements are estimated',
    ],
    example: 'Sub-tasks: 1) Identify top CRM competitors 2) Research each one\'s pricing 3) Compare features 4) Analyze market positioning 5) Generate report',
  },
  {
    id: 3,
    title: 'Select & Invoke Tools',
    icon: '🔧',
    description: 'For each sub-task, the agent determines which tools are needed — web search, code execution, database queries, file operations, etc.',
    details: [
      'Tool capability matching against task needs',
      'API endpoint selection and parameter construction',
      'Authentication and permission verification',
      'Cost and latency estimation',
    ],
    example: 'Tools used: web_search (competitor discovery), web_scrape (pricing pages), code_interpreter (data analysis), file_write (report generation)',
  },
  {
    id: 4,
    title: 'Execute & Monitor',
    icon: '⚡',
    description: 'The agent invokes selected tools, processes results in real-time, and monitors for errors, timeouts, or unexpected outputs.',
    details: [
      'Tool calls are executed with error handling',
      'Results are parsed and validated',
      'Intermediate results stored in memory',
      'Progress is tracked against the plan',
    ],
    example: 'Executed 12 web searches, scraped 5 pricing pages, processed data for 50+ features, generated comparison matrix.',
  },
  {
    id: 5,
    title: 'Evaluate & Adapt',
    icon: '🔄',
    description: 'Results are evaluated against expected outcomes. If the approach isn\'t working, the agent revises its strategy and tries alternative paths.',
    details: [
      'Output quality is assessed against criteria',
      'Missing information triggers additional research',
      'Failed steps are retried with different approaches',
      'Self-reflection identifies improvement areas',
    ],
    example: 'Found that one competitor\'s pricing was hidden. Switched strategy to use review sites and case studies for pricing estimates.',
  },
  {
    id: 6,
    title: 'Synthesize & Deliver',
    icon: '✅',
    description: 'The final output is compiled, formatted, validated, and presented to the user in a clear, actionable format with supporting evidence.',
    details: [
      'Results are compiled into coherent output',
      'Sources and evidence are cited',
      'Confidence scores are assigned',
      'Recommendations for next steps are included',
    ],
    example: 'Delivered a 15-page report with comparison tables, pricing analysis, feature matrix, SWOT analysis, and strategic recommendations.',
  },
];

export default function HowItWorksTab() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-6">
      <Window title="process — The Agent Loop">
        <SectionTitle
          badge="⚙️ Process"
          badgeColor="cyan"
          title="How AI Agents"
          highlight="Think & Act"
          description="Follow the complete journey of an AI agent processing a complex task — from initial goal to final delivery, step by autonomous step."
        />

        {/* Interactive step viewer */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Step selector - left side */}
          <div className="lg:col-span-2 space-y-2">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-blue-500/5 border-blue-500/20 shadow-[0_0_20px_rgba(96,165,250,0.1)]'
                    : 'border-white/5 hover:border-white/10 hover:bg-white/2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{step.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium truncate ${activeStep === idx ? 'text-white' : 'text-white/50'}`}>
                      {step.title}
                    </div>
                    <div className="text-[10px] text-white/25">Step {step.id} of {steps.length}</div>
                  </div>
                  {activeStep === idx && (
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Active step detail - right side */}
          <div className="lg:col-span-3">
            <div className="glass-card p-6 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl float">{steps[activeStep].icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{steps[activeStep].title}</h3>
                  <span className="text-xs text-white/30">Step {steps[activeStep].id}</span>
                </div>
              </div>

              <p className="text-sm text-white/50 leading-relaxed mb-5">
                {steps[activeStep].description}
              </p>

              <div className="space-y-2 mb-5">
                {steps[activeStep].details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-white/40">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/3 border border-white/5">
                <div className="text-[10px] text-blue-400/60 font-medium mb-1">EXAMPLE</div>
                <p className="text-xs text-white/40 italic">{steps[activeStep].example}</p>
              </div>

              {/* Progress */}
              <div className="mt-5">
                <div className="flex justify-between text-[10px] text-white/30 mb-1.5">
                  <span>Progress</span>
                  <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>

      {/* Reasoning Frameworks */}
      <Window title="process — Reasoning Frameworks">
        <SectionTitle
          badge="🧠 Reasoning"
          badgeColor="amber"
          title="Agent Reasoning"
          highlight="Frameworks"
          description="Different approaches agents use to think through problems and decide on actions."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              name: 'ReAct (Reason + Act)',
              desc: 'Interleaves reasoning traces with actions. The agent thinks about what to do, does it, observes the result, then thinks again.',
              flow: 'Thought → Action → Observation → Thought → ...',
              best: 'Tasks requiring iterative tool use and adaptation',
            },
            {
              name: 'Chain-of-Thought (CoT)',
              desc: 'The agent reasons step-by-step, showing its work. Each step builds on the previous one toward the final answer.',
              flow: 'Step 1 → Step 2 → Step 3 → ... → Answer',
              best: 'Mathematical reasoning, logical problems, analysis',
            },
            {
              name: 'Tree-of-Thought (ToT)',
              desc: 'Explores multiple reasoning paths simultaneously. Evaluates different approaches and backtracks when needed.',
              flow: 'Branch 1, Branch 2, Branch 3 → Evaluate → Best path',
              best: 'Complex planning, creative tasks, strategic decisions',
            },
            {
              name: 'Reflexion',
              desc: 'The agent reflects on its own performance, identifies mistakes, and adjusts its approach for future attempts.',
              flow: 'Attempt → Reflect → Learn → Retry → Improve',
              best: 'Learning from mistakes, iterative improvement',
            },
          ].map((fw) => (
            <div key={fw.name} className="glass-card p-5">
              <h4 className="text-sm font-semibold text-white mb-2">{fw.name}</h4>
              <p className="text-xs text-white/40 mb-3">{fw.desc}</p>
              <div className="p-2.5 rounded-lg bg-white/3 border border-white/5 mb-3">
                <div className="text-[10px] text-white/25 mb-0.5">FLOW</div>
                <div className="text-xs text-blue-400/70 font-mono">{fw.flow}</div>
              </div>
              <div className="text-[10px] text-white/30">
                <span className="text-emerald-400/60">Best for: </span>{fw.best}
              </div>
            </div>
          ))}
        </div>
      </Window>

      {/* Real Example */}
      <Window title="process — Real-World Example">
        <h3 className="text-lg font-bold text-white mb-4">Complete Agent Execution Trace</h3>
        <p className="text-sm text-white/40 mb-6">Here's how an agent handles a real task from start to finish:</p>
        
        <div className="space-y-3">
          {[
            { step: 'INPUT', content: '"Find me a restaurant in San Francisco for dinner tonight. Italian, under $50/person, with outdoor seating. Make a reservation for 2 at 7pm."', color: 'blue' },
            { step: 'THINK', content: 'I need to: 1) Search for Italian restaurants in SF 2) Filter by price and outdoor seating 3) Check availability 4) Make a reservation', color: 'purple' },
            { step: 'ACT', content: '→ web_search("Italian restaurants San Francisco outdoor seating")\n→ web_search("best Italian restaurants SF under $50")', color: 'cyan' },
            { step: 'OBSERVE', content: 'Found 12 results. Top matches: A16 (Mission), Cotogna (Jackson Square), Flour + Water (Mission). All have outdoor seating.', color: 'amber' },
            { step: 'THINK', content: 'A16 is excellent but might be over $50. Let me check Cotogna and Flour + Water pricing and availability.', color: 'purple' },
            { step: 'ACT', content: '→ web_scrape(cotogna.com/reservations)\n→ web_scrape(flourandwater.com/book)', color: 'cyan' },
            { step: 'OBSERVE', content: 'Cotogna: $35-45/person ✓, 7pm available ✓\nFlour + Water: $40-55/person (might exceed budget)', color: 'amber' },
            { step: 'DECIDE', content: 'Cotogna fits all criteria. Making reservation for 2 at 7pm tonight.', color: 'green' },
            { step: 'ACT', content: '→ api_call(open_table, restaurant="Cotogna", party=2, time="19:00", date="today")', color: 'cyan' },
            { step: 'OUTPUT', content: '✅ Reservation confirmed! Cotogna, tonight at 7pm, party of 2. Address: 545 Jackson St. Avg price: $35-45/person. Outdoor patio available.', color: 'emerald' },
          ].map((item) => (
            <div key={item.step} className="flex gap-3">
              <div className={`flex-shrink-0 w-16 text-right`}>
                <span className={`text-[10px] font-mono font-bold ${
                  item.color === 'blue' ? 'text-blue-400' :
                  item.color === 'purple' ? 'text-purple-400' :
                  item.color === 'cyan' ? 'text-cyan-400' :
                  item.color === 'amber' ? 'text-amber-400' :
                  item.color === 'green' ? 'text-green-400' :
                  'text-emerald-400'
                }`}>{item.step}</span>
              </div>
              <div className="flex-1 p-3 rounded-lg bg-white/3 border border-white/5">
                <pre className="text-xs text-white/40 whitespace-pre-wrap font-sans">{item.content}</pre>
              </div>
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
}
