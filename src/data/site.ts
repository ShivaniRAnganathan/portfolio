/**
 * Site-wide flags and short copy.
 *
 * SHOW_PENDING_BADGES
 *   Set to false after Shivani confirms the unverified figures.
 *   That hides every "Unconfirmed" badge on the site at once.
 *
 * USE_CONFIDENTIAL_FALLBACKS
 *   Set to true to publish the safer FundsIndia wording stored beside
 *   each flagged claim (see confidentiality-flags). Vendor name,
 *   engagement counts and adoption figures swap together.
 *   Fallback text is the publishable line, so it does not carry a badge.
 */

export const SHOW_PENDING_BADGES = true;
export const USE_CONFIDENTIAL_FALLBACKS = false;

export type Copy = {
  primary: string;
  fallback?: string;
  pending?: boolean;
};

export const site = {
  name: 'Shivani Ranganathan',
  email: 'rshivani98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shivaniranganathan0/',
  resumePath: '/resume.pdf',
  location:
    'Chennai, India. Authorized to work in India. Open to remote roles and to relocation.',
  positioning:
    'A fintech and consumer-growth product manager who turns retention and monetization problems into shipped products.',
  intro:
    "I'm Shivani, a product manager in Private Wealth at FundsIndia in Chennai, with 4+ years in fintech and high-scale consumer products across FundsIndia, Ketto (growth and monetization), HSBC and ElasticRun. I start with the people closest to the problem, turn what they tell me into a roadmap they can check, and ship. I'm looking for a remote product manager role where I own a product from the first user conversation to the numbers after launch.",
  heroMetrics: [
    { value: '37%', label: 'GMV growth', pending: true },
    { value: '−18%', label: 'Churn', pending: true },
    { value: '210M+', label: 'Visits', pending: true },
  ],
  heroMetricsNote:
    'Company, timeframe and baseline for these three figures: [Copy pending]',
  howIWork: [
    {
      principle: 'Start with the people closest to the problem.',
      example:
        'Relationship-manager focus groups in Private Wealth. Donor surveys and behavioural analytics at Ketto.',
    },
    {
      principle: 'Turn what they tell me into a roadmap they can check.',
      example:
        'Private Wealth feedback grouped into four lifecycle themes. A subset committed for the quarter, the rest shown as queued, and a monthly newsletter so people can see what shipped.',
    },
    {
      principle: 'Accuracy had to come before launch.',
      example:
        'Held the consolidated portfolio view until a check of 15–20 client portfolios, across PMS, AIF, mutual funds and equities, showed no mismatches.',
    },
    {
      principle: 'Every extra step between “I want to help” and “done” costs money.',
      example:
        'At Ketto, one checkout for several causes, instead of a separate payment for each cause.',
    },
  ],
  experience: [
    {
      company: 'FundsIndia',
      role: 'Product Manager, Private Wealth',
      detail: 'Current role. Products for relationship managers and their clients.',
    },
    {
      company: 'Ketto',
      role: 'Product Manager, Growth and Monetization',
      detail:
        'Gross merchandise value: bulk donation, donation amounts and tipping.',
    },
    {
      company: 'HSBC',
      role: 'Business Analyst',
      detail: '[Copy pending]',
    },
    {
      company: 'ElasticRun',
      role: 'Intern',
      detail: 'Sales enablement, Jun–Oct 2021.',
    },
  ],
  education: [
    { credential: 'MBA', school: 'BITS Pilani', year: '2022' },
    { credential: 'B.S. Computer Science', school: 'Anurag University', year: '2020' },
  ],
  resumeNote: 'The PDF linked here is a placeholder. Replace it before sharing.',
  updated: 'September 2026',
};
