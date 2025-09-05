'use client';

import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { US_STATES } from '@/lib/constants';
import { Button } from './Button';
import { Input } from './Input';

interface StateSelectorProps {
  selectedState?: string;
  onStateSelect: (state: string) => void;
}

export function StateSelector({ selectedState, onStateSelect }: StateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStates = US_STATES.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedStateName = US_STATES.find(state => state.code === selectedState)?.name;

  const handleStateSelect = (stateCode: string) => {
    onStateSelect(stateCode);
    setIsOpen(false);
    setSearchTerm('');
  };

  const detectLocation = async () => {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 });
      });
      
      // Simple location detection - in production, use a proper geocoding service
      const { latitude, longitude } = position.coords;
      
      // Basic state detection logic (simplified)
      if (latitude >= 32.5 && latitude <= 42 && longitude >= -124 && longitude <= -114) {
        handleStateSelect('CA');
      } else if (latitude >= 40.5 && latitude <= 45 && longitude >= -79.8 && longitude <= -71.8) {
        handleStateSelect('NY');
      } else {
        // Default to a common state if detection fails
        handleStateSelect('CA');
      }
    } catch (error) {
      console.error('Location detection failed:', error);
      // Default to California if location detection fails
      handleStateSelect('CA');
    }
  };

  return (
    <div className="relative">
      <div className="flex space-x-2">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="secondary"
          className="flex-1 justify-between"
        >
          <span>{selectedStateName || 'Select State'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
        
        <Button
          onClick={detectLocation}
          variant="iconOnly"
          className="px-3"
        >
          <MapPin className="w-4 h-4" />
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-gray-600 rounded-lg shadow-card z-50 max-h-64 overflow-hidden">
          <div className="p-3 border-b border-gray-600">
            <Input
              placeholder="Search states..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-sm"
            />
          </div>
          
          <div className="max-h-48 overflow-y-auto">
            {filteredStates.map((state) => (
              <button
                key={state.code}
                onClick={() => handleStateSelect(state.code)}
                className="w-full px-3 py-2 text-left hover:bg-gray-700 transition-colors duration-200 text-text-primary"
              >
                <span className="font-medium">{state.name}</span>
                <span className="ml-2 text-text-secondary text-sm">({state.code})</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
