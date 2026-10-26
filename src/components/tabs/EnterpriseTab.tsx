import { Window, SectionTitle } from '../shared';
import { useState } from 'react';

const departments = [
  {
    id: 'customer',
    name: 'Customer Operations',
    icon: '🎧',
    color: 'blue',
    cases: [
      {
        title: 'Intelligent Support Agent',
        description: 'Handles 80% of customer queries autonomously, escalates complex issues with full context, and learns from every interaction to improve resolution rates.',
        metrics: { resolution: '80%', satisfaction: '4.8/5', response: '< 30s' },
        details: ['Multi-language support', 'Sentiment detection', 'Knowledge base integration', 'Seamless handoff to humans'],
      },
      {
        title: 'Proactive Outreach Agent',
        description: 'Monitors customer health signals, identifies at-risk accounts, and initiates personalized retention campaigns before issues escalate.',
        metrics: { resolution: '40% less churn', satisfaction: '25% upsell', response: 'Automated' },
        details: ['Health score monitoring', 'Trigger-based campaigns', 'Personalized messaging', 'A/B testing automation'],
      },
      {
        title: 'Voice Agent (Call Center)',
        description: 'Handles inbound calls with natural speech, resolves common issues, processes transactions, and routes complex cases to specialists.',
        metrics: { resolution: '70% automated', satisfaction: '4.5/5', response: 'Real-time' },
        details: ['Speech recognition', 'Intent classification', 'CRM integration', 'Compliance monitoring'],
      },
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering & DevOps',
    icon: '⚙️',
    color: 'cyan',
    cases: [
      {
        title: 'Incident Response Agent',
        description: 'Detects anomalies in production, diagnoses root causes using logs and metrics, executes remediation playbooks, and coordinates cross-team response.',
        metrics: { resolution: '90% faster MTTR', satisfaction: '24/7', response: 'Instant' },
        details: ['Anomaly detection', 'Root cause analysis', 'Automated rollback', 'Post-mortem generation'],
      },
      {
        title: 'Code Review Agent',
        description: 'Reviews every PR for bugs, security vulnerabilities, performance issues, and style consistency. Provides actionable suggestions with explanations.',
        metrics: { resolution: '60% fewer bugs', satisfaction: '3x speed', response: '< 5 min' },
        details: ['Static analysis', 'Security scanning', 'Performance profiling', 'Best practice enforcement'],
      },
      {
        title: 'Infrastructure Optimizer',
        description: 'Continuously monitors cloud resources, right-sizes instances, identifies waste, and implements cost-saving recommendations automatically.',
        metrics: { resolution: '30% cost savings', satisfaction: '99.9% uptime', response: 'Continuous' },
        details: ['Resource monitoring', 'Auto-scaling', 'Waste detection', 'Capacity planning'],
      },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Marketing',
    icon: '📈',
    color: 'purple',
    cases: [
      {
        title: 'Lead Qualification Agent',
        description: 'Researches prospects across multiple sources, scores leads based on fit signals, drafts personalized outreach sequences, and books qualified meetings.',
        metrics: { resolution: '3x pipeline', satisfaction: '50% time saved', response: 'Automated' },
        details: ['ICP matching', 'Intent signals', 'Personalized sequences', 'CRM sync'],
      },
      {
        title: 'Content Strategy Agent',
        description: 'Analyzes market trends and competitor content, generates editorial calendars, creates multi-format content, and optimizes based on performance data.',
        metrics: { resolution: '200% output', satisfaction: 'Data-driven', response: 'Weekly cycles' },
        details: ['Trend analysis', 'SEO optimization', 'Multi-channel', 'Performance tracking'],
      },
      {
        title: 'Sales Enablement Agent',
        description: 'Provides real-time coaching during calls, suggests objection handling, surfaces relevant case studies, and generates follow-up materials automatically.',
        metrics: { resolution: '20% win rate ↑', satisfaction: 'Real-time', response: 'Instant' },
        details: ['Call analysis', 'Objection handling', 'Content surfacing', 'Follow-up automation'],
      },
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Legal',
    icon: '📊',
    color: 'amber',
    cases: [
      {
        title: 'Compliance Monitoring Agent',
        description: 'Continuously monitors regulatory changes, audits internal processes against requirements, flags potential violations, and generates compliance reports.',
        metrics: { resolution: '100% coverage', satisfaction: 'Real-time', response: 'Automated' },
        details: ['Regulatory tracking', 'Policy auditing', 'Risk scoring', 'Report generation'],
      },
      {
        title: 'Financial Analysis Agent',
        description: 'Processes financial data from multiple sources, generates forecasts, identifies anomalies, detects fraud patterns, and produces executive-ready reports.',
        metrics: { resolution: '95% accuracy', satisfaction: 'Instant', response: 'On-demand' },
        details: ['Forecasting', 'Anomaly detection', 'Fraud patterns', 'Executive reporting'],
      },
      {
        title: 'Contract Analysis Agent',
        description: 'Reviews contracts for key terms, identifies risks, compares against standard clauses, extracts obligations, and flags non-standard provisions.',
        metrics: { resolution: '80% time saved', satisfaction: 'Risk flagged', response: '< 10 min' },
        details: ['Clause extraction', 'Risk identification', 'Comparison analysis', 'Obligation tracking'],
      },
    ],
  },
  {
    id: 'hr',
    name: 'Human Resources',
    icon: '👥',
    color: 'rose',
    cases: [
      {
        title: 'Recruiting Agent',
        description: 'Sources candidates, screens resumes against requirements, schedules interviews, generates scorecards, and manages candidate communication end-to-end.',
        metrics: { resolution: '60% faster hiring', satisfaction: 'Better matches', response: 'Automated' },
        details: ['Resume screening', 'Skills matching', 'Interview scheduling', 'Candidate engagement'],
      },
      {
        title: 'Employee Onboarding Agent',
        description: 'Guides new hires through company processes, answers policy questions, provisions accounts, schedules training, and tracks onboarding progress.',
        metrics: { resolution: '50% faster ramp', satisfaction: 'Higher NPS', response: '24/7' },
        details: ['Process guidance', 'Account provisioning', 'Training scheduling', 'Progress tracking'],
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
};

export default function EnterpriseTab() {
  const [activeDept, setActiveDept] = useState('customer');
  const currentDept = departments.find(d => d.id === activeDept)!;

  return (
    <div className="space-y-6">
      <Window title="enterprise — AI Agents at Scale">
        <SectionTitle
          badge="🏢 Enterprise"
          badgeColor="emerald"
          title="Agents at"
          highlight="Enterprise Scale"
          description="From Fortune 500 companies to fast-growing startups, AI agents are transforming every business function. Explore real-world enterprise deployments by department."
        />

        {/* Department tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDept(dept.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${
                activeDept === dept.id
                  ? `${colorMap[dept.color]} font-medium`
                  : 'bg-white/2 border-white/5 text-white/40 hover:text-white/60 hover:border-white/10'
              }`}
            >
              <span>{dept.icon}</span>
              <span className="hidden md:inline">{dept.name}</span>
            </button>
          ))}
        </div>

        {/* Cases for selected department */}
        <div className="space-y-4">
          {currentDept.cases.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span key={detail} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-white/35">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex md:flex-col gap-3 md:gap-2 flex-shrink-0">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2.5 rounded-lg bg-white/3 border border-white/5 min-w-[80px]">
                      <div className="text-xs font-bold gradient-text">{value}</div>
                      <div className="text-[9px] text-white/25 capitalize mt-0.5">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Window>

      {/* ROI */}
      <Window title="enterprise — ROI Impact">
        <SectionTitle
          badge="💰 ROI"
          badgeColor="amber"
          title="Enterprise"
          highlight="ROI Impact"
          description="Measurable business outcomes from AI agent deployments across industries."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: '40%', label: 'Cost Reduction', desc: 'Average operational savings' },
            { value: '3x', label: 'Productivity', desc: 'Output per employee' },
            { value: '60%', label: 'Faster Delivery', desc: 'Time-to-market' },
            { value: '95%', label: 'Accuracy', desc: 'Error reduction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-xl bg-white/3 border border-white/5">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-white/60">{stat.label}</div>
              <div className="text-[10px] text-white/30 mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Implementation timeline */}
        <h3 className="text-base font-bold text-white mb-4">Typical Implementation Timeline</h3>
        <div className="grid md:grid-cols-4 gap-3">
          {[
            { phase: 'Week 1-2', task: 'Discovery & Planning', detail: 'Identify use cases, define success metrics, select tools' },
            { phase: 'Week 3-4', task: 'Prototype & Test', detail: 'Build MVP agent, test with sample data, iterate' },
            { phase: 'Week 5-8', task: 'Integration', detail: 'Connect to existing systems, add guardrails, UAT' },
            { phase: 'Week 9-12', task: 'Production & Scale', detail: 'Go live, monitor performance, expand use cases' },
          ].map((item) => (
            <div key={item.phase} className="p-4 rounded-xl bg-white/3 border border-white/5">
              <div className="text-[10px] text-blue-400/60 font-medium mb-1">{item.phase}</div>
              <div className="text-sm font-medium text-white/80 mb-1">{item.task}</div>
              <div className="text-[10px] text-white/30">{item.detail}</div>
            </div>
          ))}
        </div>
      </Window>

      {/* Considerations */}
      <Window title="enterprise — Key Considerations">
        <h3 className="text-lg font-bold text-white mb-4">Enterprise Deployment Checklist</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Security & Compliance', items: ['Data encryption at rest and in transit', 'SOC 2 / ISO 27001 compliance', 'Data residency requirements', 'Access control and audit logs'] },
            { title: 'Integration', items: ['API compatibility with existing systems', 'SSO and identity management', 'Webhook and event-driven architecture', 'Legacy system connectors'] },
            { title: 'Governance', items: ['Human-in-the-loop policies', 'Escalation procedures', 'Cost controls and budgets', 'Performance SLAs'] },
            { title: 'Change Management', items: ['Employee training programs', 'Phased rollout strategy', 'Feedback collection systems', 'Success metrics tracking'] },
          ].map((section) => (
            <div key={section.title} className="p-5 rounded-xl bg-white/3 border border-white/5">
              <h4 className="text-sm font-semibold text-white mb-3">{section.title}</h4>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-emerald-400/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-white/40">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
}
