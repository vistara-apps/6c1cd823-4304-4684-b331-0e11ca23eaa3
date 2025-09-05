'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'highlighted';
  className?: string;
  onClick?: () => void;
}

export function Card({ children, variant = 'default', className, onClick }: CardProps) {
  const baseClasses = "glass-card p-6 transition-all duration-200";
  
  const variantClasses = {
    default: "hover:bg-opacity-15 hover:shadow-xl",
    highlighted: "bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-20 border-purple-400 hover:bg-opacity-30"
  };

  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], onClick && "cursor-pointer", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
