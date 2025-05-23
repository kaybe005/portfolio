import React from 'react';
import { cn } from '@/lib/utils';

interface ControlButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const ControlButton: React.FC<ControlButtonProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "font-orbitron px-4 py-2 rounded-md border-2 transition-all duration-300",
        active 
          ? "bg-dexter-teal text-black border-dexter-green" 
          : "bg-dexter-darkPurple text-dexter-teal border-dexter-teal hover:bg-dexter-purple"
      )}
    >
      {label}
    </button>
  );
};

interface ControlPanelProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  className?: string;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ 
  activeSection, 
  onSectionChange,
  className
}) => {
  const sections = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <div className={cn("lab-panel p-3", className)}>
      <div className="flex flex-wrap justify-center gap-2">
        {sections.map((section) => (
          <ControlButton
            key={section.id}
            label={section.label}
            active={activeSection === section.id}
            onClick={() => onSectionChange(section.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;