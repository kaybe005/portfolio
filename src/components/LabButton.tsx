import React from 'react';
import { cn } from '@/lib/utils';

interface LabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const LabButton = React.forwardRef<HTMLButtonElement, LabButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "font-bungee rounded-md transition-all duration-300 border-b-4 border-r-4 focus:outline-none";
    
    const variantStyles = {
      primary: "bg-dexter-orange text-black border-dexter-red hover:bg-dexter-red hover:border-dexter-orange",
      secondary: "bg-dexter-teal text-black border-dexter-purple hover:bg-dexter-purple hover:border-dexter-teal hover:text-white",
      danger: "bg-dexter-red text-white border-dexter-purple hover:bg-dexter-purple hover:border-dexter-red",
    };
    
    const sizeStyles = {
      sm: "px-3 py-1 text-sm",
      md: "px-6 py-2",
      lg: "px-8 py-3 text-lg",
    };
    
    const animationStyle = "hover:translate-y-1 active:translate-y-2";
    
    return (
      <button
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], animationStyle, className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LabButton.displayName = "LabButton";

export default LabButton;