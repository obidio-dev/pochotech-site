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
    slug: 'dahlia-plus-agency',
    client: 'Dahlia+ Agency',
    industry: 'Event Production & Consulting',
    industrySlug: 'marketing-agencies',
    metric: '2 hours → 15 minutes',
    metricContext: 'per proposal, 2–4 proposals a day — 6–8 hours of manual ops eliminated daily',
    oneLiner:
      'Four automations covering the full client lifecycle: lead routing, AI referral capture, a proposal-to-invoice pipeline, and a business card scanner.',
    stack: ['HubSpot', 'Monday.com', 'QuickBooks', 'Slack', 'Gmail', 'Beehiiv', 'Fresh Proposals', 'OpenAI'],
    quote: null,
  },
  {
    slug: 'tps-workforce-hub',
    client: 'TPS Workforce Hub',
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
      title: 'TPS Energy',
    },
  },
  {
    slug: 'matador-network',
    client: 'Matador Network',
    industry: 'Digital Media / Travel Publishing',
    industrySlug: 'media-publishing',
    metric: '5 hours a week → 1.5',
    metricContext: 'creator tracking, while going from 30 to 70 creators monitored — plus 400+ articles processed daily',
    oneLiner:
      'A creator tracking digest, an AI newsletter curator processing 400+ articles a day, affiliate performance reporting, and event discovery.',
    stack: ['Apify', 'OpenAI', 'Google Analytics 4', 'Google Sheets', 'Gmail'],
    quote: {
      body: 'Erick was incredibly helpful in setting up the system to automatically track creator content. This automation saves me roughly 3-4 hours per week, and has made my workflow much smoother and saves a lot of manual effort.',
      author: 'Kyrene Kagahastian',
      title: 'Social Media Team, Matador Network',
    },
  },
];
