import React from 'react';
import { cn } from '@/lib/utils';

interface LabPanelProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  glowing?: boolean;
}

const LabPanel: React.FC<LabPanelProps> = ({ className, children, title, glowing = false }) => {
  return (
    <div 
      className={cn(
        "lab-panel", 
        glowing && "before:absolute before:inset-0 before:rounded-xl before:bg-dexter-teal/20 before:animate-pulse before:-z-10",
        className
      )}
    >
      {title && (
        <div className="absolute -top-5 left-4 bg-dexter-darkPurple px-3 font-orbitron text-dexter-teal border-2 border-dexter-teal rounded-md">
          {title}
        </div>
      )}
      {children}
      <div className="scan-line rounded-xl"></div>
    </div>
  );
};

export default LabPanel;