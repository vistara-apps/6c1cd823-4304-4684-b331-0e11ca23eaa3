// User entity
export interface User {
  userId: string;
  languagePreference: 'en' | 'es';
  savedStates: string[];
  purchaseHistory: string[];
}

// StateGuide entity
export interface StateGuide {
  stateCode: string;
  title: string;
  content: string;
  scriptsEn: string[];
  scriptsEs: string[];
  languageSupport: ('en' | 'es')[];
  price?: number;
  isPremium?: boolean;
}

// Recording entity
export interface Recording {
  recordingId: string;
  userId: string;
  timestamp: Date;
  location?: {
    latitude: number;
    longitude: number;
  };
  mediaUrl?: string;
  notes?: string;
  duration?: number;
}

// ShareableCard entity
export interface ShareableCard {
  cardId: string;
  userId: string;
  timestamp: Date;
  type: 'rights' | 'incident';
  content: string;
  shareUrl: string;
}

// UI Component types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'iconOnly';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  variant?: 'default' | 'highlighted';
  children: React.ReactNode;
  className?: string;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

// App state types
export interface AppState {
  selectedState: string;
  isRecording: boolean;
  currentUser: User | null;
  availableGuides: StateGuide[];
}
