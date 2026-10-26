interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Window({ title, children, className = '' }: WindowProps) {
  return (
    <div className={`window-panel overflow-hidden ${className}`}>
      <div className="window-header">
        <div className="window-dot bg-red-500/80" />
        <div className="window-dot bg-yellow-500/80" />
        <div className="window-dot bg-green-500/80" />
        <span className="ml-3 text-xs text-white/40 font-medium">{title}</span>
      </div>
      <div className="content-section">
        {children}
      </div>
    </div>
  );
}

interface SectionTitleProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export function SectionTitle({ badge, badgeColor = 'blue', title, highlight, description }: SectionTitleProps) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
    emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
  };

  return (
    <div className="mb-10">
      {badge && (
        <span className={`info-badge mb-4 ${colorMap[badgeColor] || colorMap.blue}`}>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-white/50 text-base leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function InfoCard({ icon, title, description, className = '' }: InfoCardProps) {
  return (
    <div className={`glass-card p-6 ${className}`}>
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-base font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-white/50 leading-relaxed">{description}</p>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export function StatCard({ value, label, sublabel }: StatCardProps) {
  return (
    <div className="text-center p-4">
      <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{value}</div>
      <div className="text-sm font-medium text-white/60">{label}</div>
      {sublabel && <div className="text-xs text-white/30 mt-0.5">{sublabel}</div>}
    </div>
  );
}
