'use client';

import { StateGuide } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { X, Share2, Copy } from 'lucide-react';
import { useState } from 'react';

interface GuideViewerProps {
  guide: StateGuide;
  onClose: () => void;
  onShare: (guide: StateGuide) => void;
}

export function GuideViewer({ guide, onClose, onShare }: GuideViewerProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'es'>('en');
  const [copiedScript, setCopiedScript] = useState<number | null>(null);

  const scripts = selectedLanguage === 'en' ? guide.scriptsEn : guide.scriptsEs;

  const copyScript = async (script: string, index: number) => {
    try {
      await navigator.clipboard.writeText(script);
      setCopiedScript(index);
      setTimeout(() => setCopiedScript(null), 2000);
    } catch (error) {
      console.error('Failed to copy script:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-purple-900 to-pink-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-surface bg-opacity-90 backdrop-blur-sm p-4 flex items-center justify-between border-b border-white border-opacity-20">
          <h2 className="text-xl font-semibold text-text-primary">{guide.title}</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onShare(guide)}
              className="flex items-center space-x-1"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
            <Button
              variant="iconOnly"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          {/* Language Toggle */}
          {guide.languageSupport.length > 1 && (
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-text-secondary text-sm">Language:</span>
              {guide.languageSupport.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                    selectedLanguage === lang
                      ? 'bg-primary text-white'
                      : 'bg-surface text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {lang === 'en' ? 'English' : 'Español'}
                </button>
              ))}
            </div>
          )}
          
          {/* Guide Content */}
          <Card className="mb-6">
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-line text-text-primary">
                {guide.content}
              </div>
            </div>
          </Card>
          
          {/* Scripts Section */}
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              {selectedLanguage === 'en' ? 'What to Say' : 'Qué Decir'}
            </h3>
            <div className="space-y-3">
              {scripts.map((script, index) => (
                <div
                  key={index}
                  className="bg-surface rounded-lg p-3 flex items-center justify-between"
                >
                  <p className="text-text-primary text-sm flex-1">{script}</p>
                  <Button
                    variant="iconOnly"
                    size="sm"
                    onClick={() => copyScript(script, index)}
                    className="ml-2"
                  >
                    <Copy className={`w-4 h-4 ${copiedScript === index ? 'text-secondary' : ''}`} />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
