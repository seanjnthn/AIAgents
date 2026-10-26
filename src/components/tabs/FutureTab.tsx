import { Window, SectionTitle } from '../shared';

const timeline = [
  {
    year: '2024',
    title: 'The Agent Awakening',
    status: 'current',
    description: 'Single-purpose agents become mainstream. Coding assistants, research tools, and customer service bots demonstrate clear value. Major tech companies release agent platforms.',
    predictions: [
      'GPT-4 class models become commoditized',
      'Agent frameworks reach production maturity',
      'First wave of enterprise agent deployments',
      'Regulatory frameworks begin forming',
    ],
  },
  {
    year: '2025',
    title: 'Multi-Agent Orchestration',
    status: 'emerging',
    description: 'Teams of specialized agents collaborate seamlessly. Enterprise workflows are automated end-to-end with agent swarms. Agent-to-agent communication standards emerge.',
    predictions: [
      'Standard agent communication protocols (MCP, A2A)',
      'Agent marketplaces and sharing ecosystems',
      'Self-healing autonomous systems',
      'First agent-native companies (no human employees)',
    ],
  },
  {
    year: '2026',
    title: 'Embodied & Physical Agents',
    status: 'emerging',
    description: 'AI agents extend into robotics, IoT, and physical environments. Agents control real-world systems with precision. Humanoid robots with agent brains emerge.',
    predictions: [
      'Agent-controlled robotics in warehouses',
      'Smart home agents that learn preferences',
      'Autonomous vehicle fleet coordination',
      'Physical-digital agent convergence',
    ],
  },
  {
    year: '2027',
    title: 'Self-Improving Systems',
    status: 'future',
    description: 'Agents that continuously learn, optimize their own architectures, and develop novel capabilities without human intervention. Recursive self-improvement begins.',
    predictions: [
      'Agents that write better versions of themselves',
      'Emergent capabilities from agent interactions',
      'Agent-designed scientific experiments',
      'Autonomous research and discovery',
    ],
  },
  {
    year: '2028+',
    title: 'Autonomous Organizations',
    status: 'future',
    description: 'Fully autonomous agent-run organizations that can plan, execute, and adapt entire business operations independently. New forms of economic organization emerge.',
    predictions: [
      'Agent-run companies with human oversight',
      'Decentralized autonomous agent networks',
      'Agent-to-agent economies and markets',
      'Fundamental rethinking of work and value',
    ],
  },
];

const statusColors: Record<string, string> = {
  current: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  emerging: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  future: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
};

const dotColors: Record<string, string> = {
  current: 'bg-blue-400',
  emerging: 'bg-purple-400',
  future: 'bg-rose-400',
};

export default function FutureTab() {
  return (
    <div className="space-y-6">
      <Window title="future — What's Coming Next">
        <SectionTitle
          badge="🔮 Future"
          badgeColor="rose"
          title="The"
          highlight="Road Ahead"
          description="The pace of AI agent evolution is accelerating. Here's what experts predict for the next few years of agent development and the challenges we'll face."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-rose-500/30" />

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-12">
                {/* Dot */}
                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 border-white/10 bg-[#06060f]">
                  <div className={`absolute inset-0.5 rounded-full ${dotColors[item.status]}`} />
                </div>

                {/* Content */}
                <div className="glass-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`info-badge ${statusColors[item.status]}`}>
                      {item.year}
                    </span>
                    <span className="text-xs text-white/25">
                      {item.status === 'current' ? 'Happening Now' : item.status === 'emerging' ? 'Emerging' : 'Future'}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {item.predictions.map((pred) => (
                      <div key={pred} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${dotColors[item.status]} opacity-60`} />
                        <span className="text-[11px] text-white/35">{pred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Window>

      {/* Challenges */}
      <Window title="future — Key Challenges">
        <SectionTitle
          badge="⚠️ Challenges"
          badgeColor="amber"
          title="Critical"
          highlight="Challenges Ahead"
          description="The agent revolution brings profound challenges that society, industry, and regulators must address."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: '⚖️',
              title: 'Alignment & Safety',
              desc: 'Ensuring agents act in accordance with human values and intentions. Preventing harmful actions while maintaining capability. The alignment problem becomes critical as agents gain more autonomy.',
              severity: 'Critical',
              severityColor: 'rose',
            },
            {
              icon: '🔍',
              title: 'Transparency & Explainability',
              desc: 'Making agent decisions understandable and auditable. When an agent takes an action, humans need to understand why. Black-box decision-making is unacceptable for critical systems.',
              severity: 'High',
              severityColor: 'amber',
            },
            {
              icon: '🛡️',
              title: 'Security & Adversarial Attacks',
              desc: 'Protecting against prompt injection, data poisoning, and adversarial manipulation. As agents gain access to more systems, the attack surface grows exponentially.',
              severity: 'Critical',
              severityColor: 'rose',
            },
            {
              icon: '🤝',
              title: 'Governance & Regulation',
              desc: 'Establishing frameworks for responsible agent deployment. Who is liable when an agent makes a mistake? How do we regulate autonomous systems?',
              severity: 'High',
              severityColor: 'amber',
            },
            {
              icon: '💼',
              title: 'Economic Disruption',
              desc: 'Agents will automate many jobs. How do we manage the transition? What new roles emerge? How do we distribute the value created by autonomous systems?',
              severity: 'Medium',
              severityColor: 'blue',
            },
            {
              icon: '🌍',
              title: 'Environmental Impact',
              desc: 'Training and running agents requires significant compute. As agent usage scales, energy consumption and carbon footprint become important considerations.',
              severity: 'Medium',
              severityColor: 'blue',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.severityColor === 'rose' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                    item.severityColor === 'amber' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                    'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {item.severity} Priority
                  </span>
                </div>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Window>

      {/* Opportunities */}
      <Window title="future — Opportunities">
        <SectionTitle
          badge="✨ Opportunities"
          badgeColor="emerald"
          title="The"
          highlight="Possibilities"
          description="Beyond challenges, AI agents unlock unprecedented opportunities for human progress and creativity."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '🔬', title: 'Scientific Discovery', desc: 'Agents accelerating research in medicine, materials science, and climate solutions.' },
            { icon: '🎓', title: 'Universal Education', desc: 'Personalized tutoring available to everyone, anywhere, in any language.' },
            { icon: '🏥', title: 'Healthcare Access', desc: 'AI-powered diagnostics and treatment planning reaching underserved populations.' },
            { icon: '🌱', title: 'Climate Solutions', desc: 'Optimizing energy systems, monitoring ecosystems, and accelerating clean tech.' },
            { icon: '🎨', title: 'Creative Explosion', desc: 'New forms of art, music, and storytelling enabled by human-agent collaboration.' },
            { icon: '🤝', title: 'Global Collaboration', desc: 'Breaking language barriers and enabling seamless cross-cultural cooperation.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-5 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-white/40">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 border border-white/5 text-center">
          <h3 className="text-lg font-bold text-white mb-2">The Future is Being Built Now</h3>
          <p className="text-sm text-white/40 max-w-xl mx-auto">
            Every day, researchers, developers, and organizations are pushing the boundaries of what AI agents can do. 
            The question isn't whether agents will transform our world — it's how we'll shape that transformation.
          </p>
        </div>
      </Window>
    </div>
  );
}
