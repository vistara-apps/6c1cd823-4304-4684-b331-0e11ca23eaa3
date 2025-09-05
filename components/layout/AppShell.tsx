'use client';

import { ReactNode } from 'react';
import { FloatingShapes } from './FloatingShapes';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'minimal';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingShapes />
      
      {variant === 'default' && (
        <header className="relative z-10 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">B</span>
            </div>
            <span className="text-text-primary font-semibold text-lg">Bailiwick</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">Legal Info</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">Blog</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">Education</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">Location</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">Upcoming</a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">Web 3</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <button className="btn-secondary text-sm">Explore</button>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-text-primary text-sm">A</span>
            </div>
          </div>
        </header>
      )}
      
      <main className="relative z-10 container mx-auto px-4 pb-8">
        {children}
      </main>
    </div>
  );
}
