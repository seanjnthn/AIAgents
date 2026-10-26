import { useState } from 'react';
import TabContent from './components/TabContent';

const tabs = [
  { id: 'overview', label: 'Overview', icon: '🏠' },
  { id: 'fundamentals', label: 'Fundamentals', icon: '📖' },
  { id: 'architecture', label: 'Architecture', icon: '🏗️' },
  { id: 'how-it-works', label: 'How It Works', icon: '⚙️' },
  { id: 'personal', label: 'Personal', icon: '👤' },
  { id: 'enterprise', label: 'Enterprise', icon: '🏢' },
  { id: 'advanced', label: 'Advanced', icon: '🧬' },
  { id: 'future', label: 'Future', icon: '🔮' },
];

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="relative min-h-screen">
      {/* Background mesh */}
      <div className="bg-gradient-mesh">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="mesh-blob mesh-blob-4" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top bar */}
        <header className="glass-nav px-6 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 opacity-80" />
              <div className="absolute inset-[2px] rounded-[6px] bg-[#06060f] flex items-center justify-center">
                <span className="text-sm font-bold gradient-text">AI</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold text-white/90">AI Agents</h1>
              <p className="text-[10px] text-white/30">Interactive Guide</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400/80">2025 Edition</span>
            </span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/40 hover:text-white/70"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </header>

        {/* Tab navigation */}
        <nav className="glass-nav px-4 py-2 flex-shrink-0 border-t-0">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn flex items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}
              >
                <span className="text-sm">{tab.icon}</span>
                <span className="hidden md:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main content area */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <TabContent activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
}

export default App;
