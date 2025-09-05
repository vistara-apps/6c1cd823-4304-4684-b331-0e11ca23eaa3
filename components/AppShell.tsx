'use client';

import { ReactNode } from 'react';
import { Menu, User, Settings2 } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'minimal';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  if (variant === 'minimal') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="floating-shapes">
          <div className="floating-shape w-20 h-20 bg-white rounded-lg opacity-5 top-10 left-10" style={{ animationDelay: '0s' }} />
          <div className="floating-shape w-16 h-16 bg-purple-300 rounded-full opacity-10 top-32 right-20" style={{ animationDelay: '5s' }} />
          <div className="floating-shape w-12 h-12 bg-blue-300 rounded-lg opacity-5 top-64 left-1/3" style={{ animationDelay: '10s' }} />
        </div>
        <main className="relative z-10">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Floating background shapes */}
      <div className="floating-shapes">
        <div className="floating-shape w-20 h-20 bg-white rounded-lg opacity-5 top-10 left-10" style={{ animationDelay: '0s' }} />
        <div className="floating-shape w-16 h-16 bg-purple-300 rounded-full opacity-10 top-32 right-20" style={{ animationDelay: '5s' }} />
        <div className="floating-shape w-12 h-12 bg-blue-300 rounded-lg opacity-5 top-64 left-1/3" style={{ animationDelay: '10s' }} />
        <div className="floating-shape w-24 h-24 bg-pink-300 rounded-full opacity-5 bottom-32 right-1/4" style={{ animationDelay: '15s' }} />
        <div className="floating-shape w-14 h-14 bg-indigo-300 rounded-lg opacity-10 bottom-64 left-20" style={{ animationDelay: '20s' }} />
      </div>

      {/* Header */}
      <header className="relative z-20 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <h1 className="text-xl font-bold text-white">Bailiwick</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#" className="text-text-secondary hover:text-white transition-colors duration-200">Legal Info</a>
          <a href="#" className="text-text-secondary hover:text-white transition-colors duration-200">Blog</a>
          <a href="#" className="text-text-secondary hover:text-white transition-colors duration-200">Education</a>
          <a href="#" className="text-text-secondary hover:text-white transition-colors duration-200">Location</a>
          <a href="#" className="text-text-secondary hover:text-white transition-colors duration-200">Upcoming</a>
          <a href="#" className="text-text-secondary hover:text-white transition-colors duration-200">Web 3</a>
        </nav>

        <div className="flex items-center space-x-3">
          <button className="hidden md:block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-30 transition-all duration-200">
            Explore
          </button>
          <button className="p-2 text-text-secondary hover:text-white transition-colors duration-200">
            <User className="w-5 h-5" />
          </button>
          <button className="md:hidden p-2 text-text-secondary hover:text-white transition-colors duration-200">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 px-4 pb-8">
        {children}
      </main>
    </div>
  );
}
