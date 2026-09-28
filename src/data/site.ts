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
 *
 * SHOW_RESUME_ONLY_CLAIMS
 *   Resume lines that no other source supports are marked resumeOnly.
 *   true (preview): they render with an Unconfirmed badge.
 *   false: they are removed. Sections that would be empty are omitted.
 */

export const SHOW_PENDING_BADGES = true;
export const USE_CONFIDENTIAL_FALLBACKS = false;
export const SHOW_RESUME_ONLY_CLAIMS = true;

export type Copy = {
  primary: string;
  fallback?: string;
  pending?: boolean;
  /** Only on the resume. Hidden entirely when SHOW_RESUME_ONLY_CLAIMS is false. */
  resumeOnly?: boolean;
  href?: string;
};

export const site = {
  masthead: 'Shiv Says Hi',
  name: 'Shivani Ranganathan',
  email: 'rshivani98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shivaniranganathan0/',
  resumePath: '/resume.pdf',
  location:
    'Chennai, India. Authorized to work in India. Open to remote roles and to relocation.',
  /** Front-page headline. Swap this line without touching the layout. */
  hook: "Hi, I'm Shiv. I break problems down to first principles, then build the AI system that solves them.",
  positioning:
    'A fintech and consumer-growth product manager who turns retention and monetization problems into shipped products.',
  intro:
    "I'm Shivani, a product manager in Private Wealth at FundsIndia in Chennai, with 4+ years in fintech and high-scale consumer products across FundsIndia, Ketto, HSBC and ElasticRun. I start with the people closest to the problem, turn what they tell me into a roadmap they can check, and ship. I'm looking for a remote product manager role where I own a product from the first user conversation to the numbers after launch.",
  heroMetrics: [
    { value: '37%', label: 'GMV growth', pending: true, resumeOnly: true },
    { value: '−18%', label: 'Churn', pending: true, resumeOnly: true },
    { value: '210M+', label: 'Visits', pending: true, resumeOnly: true },
  ],
  homeRecognition:
    "CEO's Pick at Ketto (2024) and FundsIndia (2025). Women in Product chapter at FundsIndia. Reforge.",
  recognition: [
    {
      primary:
        "CEO's Pick at Ketto (2024) and at FundsIndia (2025), for product ownership and results.",
      pending: true,
      resumeOnly: true,
    },
    {
      primary: 'Founded the Women in Product chapter at FundsIndia.',
      pending: true,
      resumeOnly: true,
    },
    {
      primary:
        'Reforge, Product Innovation (New Product Development and Experimentation). Professional Scrum Product Owner (PSPO). UX Design (Coursera).',
      pending: true,
      resumeOnly: true,
    },
    {
      primary: 'I use Claude Code for AI-assisted prototyping.',
      pending: true,
      resumeOnly: true,
    },
  ] satisfies Copy[],
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
      dates: 'Dec 2024 – Present',
      detail: 'Current role. Products for relationship managers and their clients.',
    },
    {
      company: 'Ketto',
      role: '[Title pending]',
      dates: '[Dates pending]',
      detail: 'Bulk donation, donation amounts, tipping and recurring donations.',
    },
    {
      company: 'HSBC',
      role: '[Title pending]',
      dates: '[Dates pending]',
      detail: '[Copy pending]',
    },
    {
      company: 'ElasticRun',
      role: 'Product Management Intern',
      dates: '[Dates pending]',
      detail: 'Sales enablement.',
    },
  ],
  education: [
    { credential: 'MBA', school: 'BITS Pilani', year: '[Dates pending]' },
    { credential: 'B.S. Computer Science', school: 'Anurag University', year: '[Dates pending]' },
  ],
  updated: 'September 2026',
  life: [
    {
      id: 'roll-and-wear',
      title: 'Roll & Wear',
      paragraphs: [
        "Roll & Wear is a T-shirt brand I co-founded with a friend, and it's heavily inspired by board games. Each tee is tied to a specific game. My co-founder is the design brain and I'm the marketing brain.",
        "We started in July 2024, so it's been about two years now. The Indian board game scene is really picking up, and we've been part of it: we've had stalls at several major board game meetups. We sell board gaming merchandise, people buy it, and we're still going.",
        'Next, I want to use AI to test whether AI-made marketing commercials work for a brand like ours.',
      ],
    },
    {
      id: 'gaming',
      title: 'Board games',
      paragraphs: [
        'I absolutely adore playing board games, and I have a regular board game group I play with. My favourites are Oros and Ark Nova.',
      ],
    },
    {
      id: 'movement',
      title: 'Movement',
      paragraphs: [
        'I make sure every day has at least one movement activity, and it brings me a lot of joy. For me that means pole, a lot of Pilates, and trekking whenever I can.',
      ],
    },
  ],
};
