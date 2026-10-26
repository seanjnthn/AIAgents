import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    id: 1,
    title: 'Receive Goal',
    description: 'The agent receives a high-level objective from the user or system. This could be "Research competitors and write a report" or "Debug this production issue."',
    visual: '🎯',
    detail: 'The goal is parsed and validated against safety constraints before proceeding.',
  },
  {
    id: 2,
    title: 'Decompose Task',
    description: 'The agent breaks the goal into smaller, manageable sub-tasks using planning frameworks like Chain-of-Thought or Tree-of-Thought reasoning.',
    visual: '🧩',
    detail: 'Creates a dependency graph of sub-tasks and identifies which can run in parallel.',
  },
  {
    id: 3,
    title: 'Select Tools',
    description: 'For each sub-task, the agent determines which tools, APIs, or capabilities are needed — web search, code execution, database queries, etc.',
    visual: '🔧',
    detail: 'Tool selection is based on capability matching, availability, and cost optimization.',
  },
  {
    id: 4,
    title: 'Execute Actions',
    description: 'The agent invokes selected tools, processes results, and takes concrete actions in the real world or digital environment.',
    visual: '⚡',
    detail: 'Each action is logged and monitored for errors, timeouts, and unexpected outputs.',
  },
  {
    id: 5,
    title: 'Evaluate & Adapt',
    description: 'Results are evaluated against expected outcomes. If the approach isn\'t working, the agent revises its strategy and tries alternative paths.',
    visual: '🔄',
    detail: 'Self-reflection enables the agent to learn from mistakes and improve its approach.',
  },
  {
    id: 6,
    title: 'Deliver Result',
    description: 'The final output is compiled, validated, and presented to the user in a clear, actionable format with supporting evidence.',
    visual: '✅',
    detail: 'Results include confidence scores, sources, and recommendations for next steps.',
  },
];

export default function HowItWorksSection() {
  const { ref, isInView } = useInView(0.1);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            Process
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How AI Agents <span className="gradient-text">Think & Act</span>
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            Follow the journey of an AI agent as it processes a complex task — from initial goal 
            to final delivery, step by autonomous step.
          </p>
        </div>

        {/* Interactive step viewer */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          {/* Step selector */}
          <div className="space-y-3">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 ${
                  activeStep === idx
                    ? 'glass-card border-blue-500/30 bg-blue-500/5 glow-blue'
                    : 'border-white/5 hover:border-white/10 hover:bg-white/2'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 ${
                    activeStep === idx ? 'bg-blue-500/20 scale-110' : 'bg-white/5'
                  }`}>
                    {step.visual}
                  </div>
                  <div>
                    <div className={`font-medium transition-colors ${activeStep === idx ? 'text-white' : 'text-white/60'}`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-white/30 mt-0.5">Step {step.id} of {steps.length}</div>
                  </div>
                  {activeStep === idx && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="glass-card p-8 md:p-10 gradient-border">
            <div className="text-6xl mb-6 float-animation">{steps[activeStep].visual}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{steps[activeStep].title}</h3>
            <p className="text-white/60 leading-relaxed mb-6">{steps[activeStep].description}</p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <p className="text-sm text-white/40">
                <span className="text-blue-400 font-medium">Technical Detail: </span>
                {steps[activeStep].detail}
              </p>
            </div>
            
            {/* Progress bar */}
            <div className="mt-8">
              <div className="flex justify-between text-xs text-white/30 mb-2">
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
    </section>
  );
}
