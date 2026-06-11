import { SITE_URL, SITE_NAME, FOUNDER, BOILERPLATE, EMAIL } from '../data/site';

const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#erick-bonilla`;
const SITE_ID = `${SITE_URL}/#website`;

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: FOUNDER,
  jobTitle: 'Founder & Automation Engineer',
  worksFor: { '@id': ORG_ID },
  email: `mailto:${EMAIL}`,
  knowsAbout: [
    'AI automation',
    'n8n',
    'Make.com',
    'workflow automation',
    'AI agents',
    'OpenAI API',
    'Anthropic Claude API',
  ],
};

export const organizationSchema = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description: BOILERPLATE,
  founder: { '@id': PERSON_ID },
  email: `mailto:${EMAIL}`,
  areaServed: 'US',
  priceRange: '$249 - $1,500+',
  knowsAbout: [
    'AI workflow automation',
    'n8n consulting',
    'business process automation',
    'AI agents for small business',
  ],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { '@id': ORG_ID },
};

/** Wrap page-level schemas with the site-wide entity graph. */
export function graph(...schemas: object[]) {
  return [
    {
      '@context': 'https://schema.org',
      '@graph': [organizationSchema, personSchema, websiteSchema, ...schemas],
    },
  ];
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  price?: string;
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { '@id': ORG_ID },
    areaServed: 'US',
    ...(opts.price ? { offers: { '@type': 'Offer', price: opts.price, priceCurrency: 'USD' } } : {}),
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  path: string;
  price: number | null;
  image?: string;
}) {
  return {
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    ...(opts.image ? { image: `${SITE_URL}${opts.image}` } : {}),
    brand: { '@id': ORG_ID },
    offers: {
      '@type': 'Offer',
      price: opts.price ?? 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}${opts.path}`,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function reviewSchema(opts: { body: string; authorName: string; authorTitle: string }) {
  return {
    '@type': 'Review',
    reviewBody: opts.body,
    author: { '@type': 'Person', name: opts.authorName, jobTitle: opts.authorTitle },
    itemReviewed: { '@id': ORG_ID },
  };
}
