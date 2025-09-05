'use client';

import { type CardProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Card({ 
  variant = 'default', 
  children, 
  className = '' 
}: CardProps) {
  const baseClasses = 'glass-card p-6';
  
  const variantClasses = {
    default: '',
    highlighted: 'ring-2 ring-accent ring-opacity-50'
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
}
