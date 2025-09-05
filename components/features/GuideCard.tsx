'use client';

import { StateGuide } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Lock, Eye } from 'lucide-react';

interface GuideCardProps {
  guide: StateGuide;
  onView: (guide: StateGuide) => void;
  onPurchase?: (guide: StateGuide) => void;
}

export function GuideCard({ guide, onView, onPurchase }: GuideCardProps) {
  return (
    <Card className="hover:ring-2 hover:ring-primary hover:ring-opacity-50 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-text-primary">{guide.title}</h3>
        {guide.isPremium && (
          <div className="flex items-center space-x-1 text-accent">
            <Lock className="w-4 h-4" />
            <span className="text-sm">${guide.price}</span>
          </div>
        )}
      </div>
      
      <p className="text-text-secondary text-sm mb-4 line-clamp-3">
        {guide.content.substring(0, 120)}...
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {guide.languageSupport.map((lang) => (
            <span
              key={lang}
              className="px-2 py-1 bg-surface rounded-full text-xs text-text-secondary"
            >
              {lang.toUpperCase()}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onView(guide)}
            className="flex items-center space-x-1"
          >
            <Eye className="w-4 h-4" />
            <span>View</span>
          </Button>
          
          {guide.isPremium && onPurchase && (
            <Button
              variant="accent"
              size="sm"
              onClick={() => onPurchase(guide)}
            >
              Buy
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
