import OverviewTab from './tabs/OverviewTab';
import FundamentalsTab from './tabs/FundamentalsTab';
import ArchitectureTab from './tabs/ArchitectureTab';
import HowItWorksTab from './tabs/HowItWorksTab';
import PersonalTab from './tabs/PersonalTab';
import EnterpriseTab from './tabs/EnterpriseTab';
import AdvancedTab from './tabs/AdvancedTab';
import FutureTab from './tabs/FutureTab';

interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const renderTab = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'fundamentals':
        return <FundamentalsTab />;
      case 'architecture':
        return <ArchitectureTab />;
      case 'how-it-works':
        return <HowItWorksTab />;
      case 'personal':
        return <PersonalTab />;
      case 'enterprise':
        return <EnterpriseTab />;
      case 'advanced':
        return <AdvancedTab />;
      case 'future':
        return <FutureTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div key={activeTab} className="animate-fade-in max-w-7xl mx-auto">
      {renderTab()}
    </div>
  );
}
