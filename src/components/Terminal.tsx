
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
  typingEffect?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ 
  title = "TERMINAL", 
  className, 
  children,
  typingEffect = false
}) => {
  const [typedContent, setTypedContent] = useState("");
  const [isTyping, setIsTyping] = useState(typingEffect);
  const content = typeof children === 'string' ? children : '';
  
  useEffect(() => {
    if (!typingEffect) return;
    
    let currentIndex = 0;
    const childrenText = content;
    setTypedContent("");
    
    const typingInterval = setInterval(() => {
      if (currentIndex < childrenText.length) {
        setTypedContent(prev => prev + childrenText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 30);
    
    return () => clearInterval(typingInterval);
  }, [typingEffect, content]);

  return (
    <div className={cn("terminal relative", className)}>
      <div className="terminal-header">
        <span className="text-dexter-teal font-bold">{title}</span>
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-dexter-red"></div>
          <div className="h-3 w-3 rounded-full bg-dexter-orange"></div>
          <div className="h-3 w-3 rounded-full bg-dexter-green"></div>
        </div>
      </div>
      <div className="terminal-content">
        {typingEffect ? (
          <div>
            {typedContent}
            {isTyping && <span className="animate-blink">_</span>}
          </div>
        ) : (
          children
        )}
      </div>
      <div className="scan-line"></div>
    </div>
  );
};

export default Terminal;