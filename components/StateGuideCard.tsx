'use client';

import { StateGuide } from '@/lib/types';
import { Card } from './Card';
import { Button } from './Button';
import { Lock, Globe } from 'lucide-react';

interface StateGuideCardProps {
  guide: StateGuide;
  onSelect: (guide: StateGuide) => void;
  isPurchased?: boolean;
}

export function StateGuideCard({ guide, onSelect, isPurchased = false }: StateGuideCardProps) {
  const handleSelect = () => {
    onSelect(guide);
  };

  return (
    <Card className="space-y-4" onClick={handleSelect}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-text-primary mb-2">{guide.title}</h3>
          <p className="text-sm text-text-secondary line-clamp-3">
            {guide.content.substring(0, 120)}...
          </p>
        </div>
        
        {guide.isPremium && !isPurchased && (
          <div className="ml-3 flex items-center space-x-1 text-accent">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">${guide.price}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {guide.languageSupport.includes('es') && (
            <div className="flex items-center space-x-1 text-secondary">
              <Globe className="w-4 h-4" />
              <span className="text-xs">ES/EN</span>
            </div>
          )}
          <span className="text-xs text-text-secondary bg-surface px-2 py-1 rounded">
            {guide.stateCode}
          </span>
        </div>
        
        <Button size="sm" variant={isPurchased ? "secondary" : "primary"}>
          {isPurchased ? "View" : guide.isPremium ? "Purchase" : "Free"}
        </Button>
      </div>
    </Card>
  );
}
