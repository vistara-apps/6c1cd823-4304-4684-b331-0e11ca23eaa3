'use client';

import { type InputProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  className = ''
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn('input-field w-full', className)}
    />
  );
}
