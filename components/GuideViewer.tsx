'use client';

import { useState } from 'react';
import { StateGuide } from '@/lib/types';
import { Card } from './Card';
import { Button } from './Button';
import { Share2, Copy, Globe, ArrowLeft } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface GuideViewerProps {
  guide: StateGuide;
  onBack: () => void;
  onShare: (guide: StateGuide) => void;
}

export function GuideViewer({ guide, onBack, onShare }: GuideViewerProps) {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [copiedScript, setCopiedScript] = useState<string | null>(null);

  const scripts = language === 'en' ? guide.scriptsEn : guide.scriptsEs;

  const handleCopyScript = async (script: string) => {
    const success = await copyToClipboard(script);
    if (success) {
      setCopiedScript(script);
      setTimeout(() => setCopiedScript(null), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button onClick={onBack} variant="iconOnly" size="sm">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center space-x-2">
          {guide.languageSupport.includes('es') && (
            <div className="flex bg-surface rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
                  language === 'en' ? 'bg-primary text-white' : 'text-text-secondary'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
                  language === 'es' ? 'bg-primary text-white' : 'text-text-secondary'
                }`}
              >
                ES
              </button>
            </div>
          )}
          
          <Button onClick={() => onShare(guide)} variant="iconOnly" size="sm">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Guide Content */}
      <Card>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium">
              {guide.stateCode}
            </span>
            <h1 className="text-xl font-bold text-text-primary">{guide.title}</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-text-primary whitespace-pre-line">
              {guide.content}
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Scripts */}
      <Card>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
            <span>Quick Scripts</span>
            {language === 'es' && <Globe className="w-4 h-4 text-secondary" />}
          </h2>
          
          <div className="space-y-3">
            {scripts.map((script, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-surface p-3 rounded-lg"
              >
                <p className="text-text-primary flex-1 mr-3">{script}</p>
                <Button
                  onClick={() => handleCopyScript(script)}
                  variant="iconOnly"
                  size="sm"
                  className={copiedScript === script ? 'bg-green-600' : ''}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Share Guide */}
      <Card>
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Share This Guide</h3>
          <p className="text-text-secondary text-sm">
            Help others stay informed about their rights
          </p>
          <Button onClick={() => onShare(guide)} className="w-full">
            <Share2 className="w-4 h-4 mr-2" />
            Create Shareable Card
          </Button>
        </div>
      </Card>
    </div>
  );
}
