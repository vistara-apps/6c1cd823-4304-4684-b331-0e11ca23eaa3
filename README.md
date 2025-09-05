# Bailiwick Guides - Base Mini App

A mobile-first legal rights application providing instant, state-specific guides and preparedness tools for interactions with law enforcement.

## Features

### 🏛️ State-Specific Rights Cards
- One-page, mobile-optimized legal guides
- State-specific laws and regulations
- Pre-written scripts in English and Spanish
- Location-based guide suggestions

### 🎥 Instant Record Button
- One-tap audio and video recording
- GPS location and timestamp capture
- Secure storage and easy sharing
- Real-time recording indicators

### 📤 Shareable Incident Summaries
- Automated generation of incident reports
- Quick sharing with trusted contacts
- Rights summary cards
- Social media integration

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety
- **State Management**: React hooks
- **Recording**: MediaRecorder API
- **Location**: Geolocation API

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your API keys:
   - `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
   - `OPENAI_API_KEY`: OpenAI API key for dynamic content

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main application page
│   ├── providers.tsx      # MiniKit and other providers
│   └── globals.css        # Global styles and design tokens
├── components/            # Reusable UI components
│   ├── AppShell.tsx       # Main app layout
│   ├── Card.tsx           # Card component variants
│   ├── Button.tsx         # Button component variants
│   ├── RecordButton.tsx   # Recording functionality
│   ├── StateSelector.tsx  # State selection interface
│   └── GuideViewer.tsx    # Legal guide display
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript type definitions
│   ├── constants.ts       # App constants and sample data
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Design System

### Colors
- **Background**: `hsl(220, 20%, 12%)`
- **Surface**: `hsl(220, 20%, 18%)`
- **Primary**: `hsl(210, 70%, 50%)`
- **Secondary**: `hsl(160, 60%, 45%)`
- **Accent**: `hsl(45, 90%, 50%)`

### Components
- **Glass Cards**: Semi-transparent cards with backdrop blur
- **Gradient Buttons**: Purple to pink gradient primary actions
- **Floating Shapes**: Animated background elements
- **Mobile-First**: Responsive design optimized for mobile

## Key Features Implementation

### Recording System
- Uses MediaRecorder API for audio/video capture
- Real-time duration tracking
- Automatic permission handling
- Secure local storage

### State Detection
- GPS-based state detection
- Manual state selection fallback
- Location-aware guide filtering
- Privacy-conscious implementation

### Legal Content
- Structured guide format
- Multi-language support (EN/ES)
- Quick-copy scripts
- State-specific legal references

## Business Model

- **Micro-transactions**: $0.99 per state-specific guide
- **Premium Features**: $4.99 one-time unlock
- **Freemium**: Basic guides free, advanced features paid
- **Base Integration**: On-chain payments and ownership

## Future Enhancements

- [ ] Supabase backend integration
- [ ] OpenAI-powered dynamic content
- [ ] IPFS storage for recordings
- [ ] Advanced sharing features
- [ ] Multi-language expansion
- [ ] Offline mode support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@bailiwickguides.com or join our community Discord.

---

**Know Your Rights. Stay Prepared. Instantly.** 🛡️
