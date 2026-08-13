export interface Template {
  slug: string;
  name: string;
  /** Display price; null = free */
  price: number | null;
  checkout: string;
  integrations: string[];
  /** Filename under src/assets/workflows/ */
  image: string | null;
  imageAlt: string;
  /** Mechanism-first one-liner (final copy may refine on the page) */
  mechanism: string;
  /** Verified client provenance, only where true */
  provenance: string | null;
  featured: boolean;
}

export const templates: Template[] = [
  {
    slug: 'meeting-prep-agent',
    name: 'Meeting Prep Agent',
    price: 249,
    checkout: 'https://checkout.lemonsqueezy.com/buy/1320537',
    integrations: ['Google Calendar', 'Gmail', 'OpenAI'],
    image: 'MeetingPrepAgent.PNG',
    imageAlt: 'n8n workflow diagram for the Meeting Prep Agent automation',
    mechanism:
      'An AI that reads your email history with every meeting attendee and sends you a structured briefing one hour before the call.',
    provenance: null,
    featured: false,
  },
  {
    slug: 'ai-relationship-nurturing-engine',
    name: 'AI Relationship Nurturing Engine',
    price: 299,
    checkout: 'https://checkout.lemonsqueezy.com/buy/1320599',
    integrations: ['HubSpot', 'OpenAI', 'Gmail'],
    image: 'AutomatedCheckInEmailSystem.PNG',
    imageAlt: 'n8n workflow diagram for the AI Relationship Nurturing Engine',
    mechanism:
      'An AI that watches your CRM for relationships going quiet and writes personal check-in emails in your voice, sent automatically.',
    provenance: null,
    featured: false,
  },
  {
    slug: 'jarvis-ai-executive-assistant',
    name: 'Jarvis: AI Executive Assistant',
    price: 399,
    checkout: 'https://checkout.lemonsqueezy.com/buy/1320707',
    integrations: ['Slack', 'Gmail', 'Google Calendar', 'Google Tasks', 'Google Contacts', 'Anthropic Claude', 'PostgreSQL'],
    image: 'Jarvis.PNG',
    imageAlt: 'n8n workflow diagram for Jarvis, the AI executive assistant in Slack',
    mechanism:
      'An AI assistant living inside Slack that reads your email, manages your calendar, and tracks your tasks on plain-English instructions.',
    provenance: null,
    featured: true,
  },
  {
    slug: 'business-card-scanner',
    name: 'Business Card Scanner',
    price: 249,
    checkout: 'https://checkout.lemonsqueezy.com/buy/1320724',
    integrations: ['Slack', 'OpenAI GPT-4o Vision', 'HubSpot'],
    image: 'BusinessCardScanner.PNG',
    imageAlt: 'n8n workflow diagram for the Business Card Scanner automation',
    mechanism:
      'Drop a photo in Slack; an AI reads the card, extracts every field, and creates the CRM contact.',
    provenance: 'Running in production at an event production agency.',
    featured: true,
  },
  {
    slug: 'sales-contact-scraper',
    name: 'Sales Contact Scraper',
    price: 299,
    checkout: 'https://checkout.lemonsqueezy.com/buy/1320732',
    integrations: ['Gmail', 'Apify', 'Google Sheets'],
    image: 'SalesContactScraper.PNG',
    imageAlt: 'n8n workflow diagram for the Sales Contact Scraper automation',
    mechanism:
      'An automation that scans your Gmail history, extracts every person you have emailed, enriches them with company info, and delivers an organized contact list.',
    provenance: null,
    featured: false,
  },
  {
    slug: 'ai-newsletter-curator',
    name: 'AI Newsletter Curator',
    price: 249,
    checkout: 'https://checkout.lemonsqueezy.com/buy/1320787',
    integrations: ['Google Sheets', 'Apify', 'OpenAI', 'Gmail'],
    image: 'AINewsletterCurator.PNG',
    imageAlt: 'n8n workflow diagram for the AI Newsletter Curator automation',
    mechanism:
      'An AI that scrapes your chosen industry sources overnight, picks the most newsworthy stories, writes summaries, and delivers a finished newsletter every morning.',
    provenance: 'The production version at a travel media company processes 400+ articles a day.',
    featured: true,
  },
  {
    slug: 'sheets-hubspot-task-manager',
    name: 'Sheets ↔ HubSpot Task Manager',
    price: null,
    checkout: 'https://checkout.lemonsqueezy.com/buy/1320841',
    integrations: ['Google Sheets', 'HubSpot'],
    image: 'Sheets_Hubspot_Task_Manager.PNG',
    imageAlt: 'n8n workflow diagram for the Sheets to HubSpot task sync',
    mechanism:
      'A live two-way sync between a Google Sheet and HubSpot tasks: create, update, and complete in either; both stay current.',
    provenance: null,
    featured: false,
  },
];
