export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  industrySlug: string;
  metric: string;
  metricContext: string;
  oneLiner: string;
  stack: string[];
  quote: { body: string; author: string; title: string } | null;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'furniture-factory',
    client: 'Furniture factory',
    industry: 'Made-to-Order Manufacturing',
    industrySlug: 'marketing-agencies',
    metric: '67 real orders on day one',
    metricContext: '364 pieces, their own order numbers; 11 late orders visible the first morning',
    oneLiner:
      'A custom production management system: work orders, pieces, statuses, priorities, and dispatch, loaded with the factory’s real operation before switch-on.',
    stack: ['Custom web app', 'PostgreSQL'],
    quote: null,
  },
  {
    slug: 'lube-center',
    client: 'Lube center',
    industry: 'Automotive Services',
    industrySlug: 'marketing-agencies',
    metric: 'Born digital: zero paper, ever',
    metricContext: 'system in production before the first customer walked in; opened on a Monday',
    oneLiner:
      'Service orders, multi-service checklists, scheduling, and invoicing as a PWA that runs on the counter phone and the office computer alike.',
    stack: ['Custom web app (PWA)', 'PostgreSQL'],
    quote: null,
  },
  {
    slug: 'event-production-agency',
    client: 'Event production agency',
    industry: 'Event Production & Consulting',
    industrySlug: 'marketing-agencies',
    metric: '2 hours → 15 minutes',
    metricContext: 'per proposal, 2–4 proposals a day: 6–8 hours of manual ops eliminated daily',
    oneLiner:
      'Four automations covering the full client lifecycle: lead routing, AI referral capture, a proposal-to-invoice pipeline, and a business card scanner.',
    stack: ['HubSpot', 'Monday.com', 'QuickBooks', 'Slack', 'Gmail', 'Beehiiv', 'Fresh Proposals', 'OpenAI'],
    quote: null,
  },
  {
    slug: 'edtech-workforce-training',
    client: 'EdTech workforce training',
    industry: 'EdTech / Workforce Development',
    industrySlug: 'media-publishing',
    metric: 'Zero visibility → automated daily reporting',
    metricContext: 'six systems covering a 30–40 applicant pipeline, built as an embedded team member',
    oneLiner:
      'An applicant tracking system, AI interview evaluation pipeline, automated scheduling, executive reporting, and stipend eligibility tracking.',
    stack: ['Airtable', 'OpenAI', 'Read.ai', 'Supabase', 'SendGrid', 'Power Automate', 'SharePoint'],
    quote: {
      body: 'You have done such a great job that I can’t remember how we were working before you.',
      author: 'CEO',
      title: 'EdTech workforce-training company',
    },
  },
  {
    slug: 'travel-media-company',
    client: 'Travel media company',
    industry: 'Digital Media / Travel Publishing',
    industrySlug: 'media-publishing',
    metric: '5 hours a week → 1.5',
    metricContext: 'creator tracking, while going from 30 to 70 creators monitored, plus 400+ articles processed daily',
    oneLiner:
      'A creator tracking digest, an AI newsletter curator processing 400+ articles a day, affiliate performance reporting, and event discovery.',
    stack: ['Apify', 'OpenAI', 'Google Analytics 4', 'Google Sheets', 'Gmail'],
    quote: {
      body: 'Erick was incredibly helpful in setting up the system to automatically track creator content. This automation saves me roughly 3-4 hours per week, and has made my workflow much smoother and saves a lot of manual effort.',
      author: 'Social media team member',
      title: 'Travel media company',
    },
  },
];
