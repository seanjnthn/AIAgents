import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const enterpriseCases = [
  {
    category: 'Customer Operations',
    icon: '🎧',
    color: 'from-blue-500 to-indigo-500',
    cases: [
      {
        title: 'Intelligent Support Agent',
        description: 'Handles 80% of customer queries autonomously, escalates complex issues with full context, and learns from every interaction.',
        metrics: ['80% resolution rate', '4.8/5 CSAT', '< 30s response'],
      },
      {
        title: 'Proactive Outreach Agent',
        description: 'Monitors customer health signals, identifies at-risk accounts, and initiates personalized retention campaigns.',
        metrics: ['40% churn reduction', '25% upsell lift', 'Automated scoring'],
      },
    ],
  },
  {
    category: 'Engineering & DevOps',
    icon: '⚙️',
    color: 'from-cyan-500 to-teal-500',
    cases: [
      {
        title: 'Incident Response Agent',
        description: 'Detects anomalies, diagnoses root causes, executes remediation playbooks, and coordinates cross-team response in real-time.',
        metrics: ['90% MTTR reduction', '24/7 coverage', 'Auto-remediation'],
      },
      {
        title: 'Code Review Agent',
        description: 'Reviews PRs for bugs, security issues, performance problems, and style consistency. Suggests improvements with explanations.',
        metrics: ['60% fewer bugs', '3x review speed', 'Security scanning'],
      },
    ],
  },
  {
    category: 'Sales & Marketing',
    icon: '📈',
    color: 'from-purple-500 to-pink-500',
    cases: [
      {
        title: 'Lead Qualification Agent',
        description: 'Researches prospects, scores leads based on fit signals, drafts personalized outreach, and schedules qualified meetings.',
        metrics: ['3x pipeline growth', '50% time saved', 'Higher conversion'],
      },
      {
        title: 'Content Strategy Agent',
        description: 'Analyzes market trends, generates content calendars, creates multi-channel campaigns, and optimizes based on performance data.',
        metrics: ['200% content output', 'Data-driven', 'Multi-channel'],
      },
    ],
  },
  {
    category: 'Finance & Legal',
    icon: '📊',
    color: 'from-amber-500 to-orange-500',
    cases: [
      {
        title: 'Compliance Monitoring Agent',
        description: 'Continuously monitors regulatory changes, audits internal processes, flags violations, and generates compliance reports.',
        metrics: ['100% coverage', 'Real-time alerts', 'Audit-ready'],
      },
      {
        title: 'Financial Analysis Agent',
        description: 'Processes financial data, generates forecasts, identifies anomalies, and produces executive-ready reports with recommendations.',
        metrics: ['95% accuracy', 'Instant reports', 'Predictive models'],
      },
    ],
  },
];

export default function EnterpriseUseCases() {
  const { ref, isInView } = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="enterprise" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            Enterprise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Agents at <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            From Fortune 500 companies to fast-growing startups, AI agents are transforming 
            every business function. Explore real-world enterprise deployments.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          {enterpriseCases.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 ${
                activeCategory === idx
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-white/2 border-white/5 text-white/50 hover:text-white/70 hover:border-white/10'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="text-sm font-medium">{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active category content */}
        <div className={`grid md:grid-cols-2 gap-8 ${isInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          {enterpriseCases[activeCategory].cases.map((item) => (
            <div key={item.title} className="glass-card p-8 hover-glow">
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed mb-6">{item.description}</p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {item.metrics.map((metric) => (
                  <div key={metric} className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-xs text-white/60">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ROI section */}
        <div className={`mt-20 glass-card p-8 md:p-12 ${isInView ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Enterprise ROI Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '40%', label: 'Cost Reduction', desc: 'Average operational savings' },
              { value: '3x', label: 'Productivity', desc: 'Output per employee increase' },
              { value: '60%', label: 'Faster Delivery', desc: 'Time-to-market improvement' },
              { value: '95%', label: 'Accuracy', desc: 'Error reduction in processes' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-white/70">{stat.label}</div>
                <div className="text-xs text-white/30 mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
