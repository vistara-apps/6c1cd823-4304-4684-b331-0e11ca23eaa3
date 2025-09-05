export const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];

export const GUIDE_CATEGORIES = [
  { id: 'traffic', name: 'Traffic Stop', icon: '🚗' },
  { id: 'home', name: 'Home Encounter', icon: '🏠' },
  { id: 'street', name: 'Street Interaction', icon: '🚶' },
  { id: 'workplace', name: 'Workplace Rights', icon: '💼' },
];

export const SAMPLE_GUIDES = [
  {
    stateCode: 'CA',
    title: 'California Traffic Stop Rights',
    content: `**Your Rights During a California Traffic Stop:**

1. **Stay Calm and Polite**
   - Keep hands visible on steering wheel
   - Turn on interior light if stopped at night
   - Remain in vehicle unless asked to exit

2. **Required Documents**
   - Driver's license
   - Vehicle registration
   - Proof of insurance

3. **What You Can Say:**
   - "I am exercising my right to remain silent"
   - "I do not consent to any searches"
   - "Am I free to go?"

4. **What NOT to Say:**
   - Don't admit guilt or fault
   - Don't argue about the stop
   - Don't volunteer information

5. **California Specific Laws:**
   - You must provide ID if lawfully detained
   - Recording is legal in public spaces
   - You can refuse consent to search your vehicle`,
    scriptsEn: [
      "Officer, I am exercising my right to remain silent.",
      "I do not consent to any searches of my person or vehicle.",
      "Am I being detained or am I free to go?",
      "I would like to speak with an attorney."
    ],
    scriptsEs: [
      "Oficial, estoy ejerciendo mi derecho a permanecer en silencio.",
      "No consiento a ningún registro de mi persona o vehículo.",
      "¿Estoy siendo detenido o soy libre de irme?",
      "Me gustaría hablar con un abogado."
    ],
    languageSupport: ['en', 'es'] as ('en' | 'es')[],
    price: 0.99,
    isPremium: false
  }
];
