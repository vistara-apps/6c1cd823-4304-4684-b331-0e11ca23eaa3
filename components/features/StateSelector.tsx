'use client';

import { useState } from 'react';
import { US_STATES } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { MapPin } from 'lucide-react';

interface StateSelectorProps {
  selectedState: string;
  onStateSelect: (stateCode: string) => void;
  onDetectLocation: () => void;
}

export function StateSelector({ selectedState, onStateSelect, onDetectLocation }: StateSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStates = US_STATES.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Select Your State</h3>
        <Button
          variant="secondary"
          size="sm"
          onClick={onDetectLocation}
          className="flex items-center space-x-2"
        >
          <MapPin className="w-4 h-4" />
          <span>Detect</span>
        </Button>
      </div>
      
      <Input
        placeholder="Search states..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
        {filteredStates.map((state) => (
          <button
            key={state.code}
            onClick={() => onStateSelect(state.code)}
            className={`p-2 rounded-md text-sm transition-all duration-200 ${
              selectedState === state.code
                ? 'bg-primary text-white'
                : 'bg-surface hover:bg-opacity-80 text-text-primary'
            }`}
          >
            {state.code} - {state.name}
          </button>
        ))}
      </div>
    </Card>
  );
}
