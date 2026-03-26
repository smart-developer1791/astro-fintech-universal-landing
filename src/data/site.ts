export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  note: string;
};

export type Pillar = {
  title: string;
  description: string;
  bullets: string[];
};

export type Module = {
  title: string;
  description: string;
  bullets: string[];
};

export type Solution = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  painPoints: string[];
  capabilities: string[];
  outcomes: Stat[];
  relatedIndustries: string[];
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  priorities: string[];
  workflows: string[];
  outcomes: Stat[];
  relatedSolutions: string[];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  summary: string;
  sections: ArticleSection[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const site = {
  name: 'Finvera',
  legalName: 'Finvera Finance Infrastructure',
  url: 'https://finvera.example',
  email: 'hello@finvera.example',
  socialImage: '/og-finvera.svg',
  description:
    'Finvera is a universal fintech operating layer for payment orchestration, treasury visibility, reconciliation, and compliance-first growth.',
  hero: {
    eyebrow: 'Universal finance infrastructure',
    title: 'Move money, reconcile data, and stay audit-ready from one operating layer.',
    description:
      'Finvera gives finance, operations, and product teams a shared system for payment orchestration, treasury oversight, settlement controls, and compliance workflows.'
  },
  nav: [
    { label: 'Overview', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Security', href: '/security' },
    { label: 'Insights', href: '/blog' }
  ] as NavItem[],
  primaryCta: {
    label: 'Book a walkthrough',
    href: '/contact'
  },
  secondaryCta: {
    label: 'Explore solutions',
    href: '/solutions'
  }
} as const;

export const trustMarks = [
  'Northbank',
  'PulseLedger',
  'Mercora',
  'FlowCart',
  'Aster Pay',
  'VaultGrid'
];

export const stats: Stat[] = [
  {
    value: '99.98%',
    label: 'payout routing success',
    note: 'Failover rules keep disbursement flows resilient across providers.'
  },
  {
    value: '65%',
    label: 'faster month-end close',
    note: 'Reconciliation is matched continuously instead of at the end of the cycle.'
  },
  {
    value: '35+',
    label: 'markets mapped',
    note: 'Operational controls stay consistent even when rails and entities differ.'
  }
];

export const pillars: Pillar[] = [
  {
    title: 'Orchestrate every money movement',
    description:
      'Route card, bank, and wallet flows through one policy layer instead of stitching logic across vendors.',
    bullets: ['Provider failover', 'Smart routing rules', 'Settlement visibility']
  },
  {
    title: 'Give finance a control surface',
    description:
      'Finance teams get approvals, audit trails, cash positions, and variance alerts in the same workspace.',
    bullets: ['Approval chains', 'Cash snapshots', 'Exception queues']
  },
  {
    title: 'Launch products without governance debt',
    description:
      'Product and compliance teams can ship faster because onboarding, KYC, and reporting share the same data model.',
    bullets: ['Shared entities', 'Role-based access', 'Regional playbooks']
  }
];

export const modules: Module[] = [
  {
    title: 'Payment orchestration',
    description: 'Balance cost, conversion, and reliability with policy-driven routing.',
    bullets: ['Multi-rail routing', 'Retry paths', 'Failure recovery']
  },
  {
    title: 'Treasury workspace',
    description: 'Track balances, exposures, and upcoming settlements across entities.',
    bullets: ['Cash positions', 'Entity views', 'Liquidity signals']
  },
  {
    title: 'Reconciliation engine',
    description: 'Match providers, ledger events, and bank data before close week becomes chaos.',
    bullets: ['Event matching', 'Variance flags', 'Export-ready reports']
  },
  {
    title: 'Compliance workspace',
    description: 'Keep reviews, evidence, and policy checks close to the flows they govern.',
    bullets: ['Case queues', 'Document trails', 'Access reviews']
  },
  {
    title: 'Partner operations',
    description: 'Manage merchant, platform, and internal partner workflows from one ops layer.',
    bullets: ['Onboarding states', 'Risk tiers', 'Escalation paths']
  },
  {
    title: 'Embedded finance toolkit',
    description: 'Give product teams reusable building blocks for finance experiences without reinventing controls.',
    bullets: ['Account states', 'Fee logic', 'Ledger-ready events']
  }
];

export const securityFrameworks = [
  'Role-based access with scoped permissions per team and entity.',
  'Immutable event trails for money movement, approvals, and configuration changes.',
  'Regional data routing patterns for teams operating across multiple jurisdictions.',
  'Separation between platform configuration, day-to-day ops, and reviewer actions.'
];

export const securityPractices = [
  {
    title: 'Access and approval design',
    description: 'Sensitive actions require explicit review paths, dual approval, and clear accountability.'
  },
  {
    title: 'Auditability by default',
    description: 'Changes to routing, limits, entities, and operational states are tied to user identity and time.'
  },
  {
    title: 'Data minimization',
    description: 'Teams only see the fields and workflows needed for their job, reducing unnecessary exposure.'
  },
  {
    title: 'Operational resilience',
    description: 'Failover rules, exception queues, and continuity workflows are built into the operating model.'
  }
];

export const deliverySteps = [
  {
    title: 'Map the operating model',
    description: 'Align product, finance, and compliance flows before any vendor logic is wired in.'
  },
  {
    title: 'Launch the control layer',
    description: 'Stand up routing rules, treasury views, and exception handling with a narrow first scope.'
  },
  {
    title: 'Add reporting and workflows',
    description: 'Layer in reconciliations, approval chains, and team-specific operating surfaces.'
  },
  {
    title: 'Expand by market or product line',
    description: 'Reuse the same patterns as you open new entities, rails, and embedded finance journeys.'
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'Is Finvera a payment processor or an orchestration layer?',
    answer:
      'Finvera is positioned as the operating layer above processors, banks, and internal systems. It helps teams coordinate providers, treasury views, controls, and reporting from one place.'
  },
  {
    question: 'Can this work for both finance and product teams?',
    answer:
      'Yes. The platform narrative is built around a shared operating model where finance owns controls, product owns experiences, and ops owns throughput without fragmented tooling.'
  },
  {
    question: 'How does the landing stay SEO-first while still feeling premium?',
    answer:
      'The site is static-first in Astro, keeps JavaScript minimal, uses crawlable content sections, supports canonical metadata, JSON-LD, sitemap generation, and route-level long-tail pages.'
  },
  {
    question: 'Why include solution and industry pages on day one?',
    answer:
      'They give the site room to rank beyond the homepage, support sharper messaging, and create a structure that can scale into content marketing later without redesigning the site map.'
  }
];

export const securityFaqs: FaqItem[] = [
  {
    question: 'How are approvals separated from configuration changes?',
    answer:
      'Operational tasks and platform configuration are modeled as separate permission scopes so the same user is not forced to own both control and execution.'
  },
  {
    question: 'What does an audit trail cover?',
    answer:
      'The operating model covers money movement decisions, threshold changes, access adjustments, and case handling events with timestamped activity history.'
  },
  {
    question: 'Can different entities have different controls?',
    answer:
      'Yes. Regional entities, business lines, and partner tiers can inherit a shared baseline and still apply local rules where required.'
  }
];

export const solutions: Solution[] = [
  {
    slug: 'payment-orchestration',
    title: 'Payment orchestration',
    summary: 'Route payment flows across providers with reliability, margin, and policy controls in one place.',
    description:
      'Use one orchestration layer to manage retries, failover, settlement logic, and provider performance without hard-coding business rules across multiple systems.',
    painPoints: [
      'Provider-specific logic is spread across product code and ops playbooks.',
      'Finance lacks a clear view of failure reasons, costs, and settlement timing.',
      'Teams cannot tune routing without engineering involvement.'
    ],
    capabilities: [
      'Policy-based routing across processors and bank rails',
      'Fallback logic for outages and issuer-level degradation',
      'Fee and settlement monitoring by partner, market, and flow type',
      'Operational queues for disputes, retries, and escalations'
    ],
    outcomes: [
      {
        value: '18%',
        label: 'lower avoidable declines',
        note: 'Teams can tune routes by performance band instead of waiting on release cycles.'
      },
      {
        value: '2.3x',
        label: 'faster routing changes',
        note: 'Ops and finance can adjust policy within a governed control layer.'
      },
      {
        value: '1 view',
        label: 'for cost and resilience',
        note: 'Commercial and technical tradeoffs are visible in the same decision surface.'
      }
    ],
    relatedIndustries: ['saas-platforms', 'marketplaces', 'digital-banks']
  },
  {
    slug: 'treasury-automation',
    title: 'Treasury automation',
    summary: 'Track balances, exposures, and settlements across entities before liquidity surprises happen.',
    description:
      'Bring bank positions, pending payouts, reserves, and funding workflows into one operational workspace so treasury and finance can manage cash with fewer blind spots.',
    painPoints: [
      'Cash position data is spread across banking portals, spreadsheets, and ad hoc exports.',
      'Settlement timing is hard to forecast when multiple providers and entities are involved.',
      'Manual review cycles slow down funding and reserve decisions.'
    ],
    capabilities: [
      'Daily and intraday cash snapshots across entities',
      'Settlement horizon tracking and reserve planning',
      'Approval flows for top-ups, sweeps, and exception funding',
      'Treasury views tied back to operational and ledger events'
    ],
    outcomes: [
      {
        value: '42%',
        label: 'less manual treasury prep',
        note: 'Teams spend less time combining data before liquidity meetings.'
      },
      {
        value: '24h',
        label: 'faster reserve decisions',
        note: 'Signals are available continuously instead of after offline review.'
      },
      {
        value: 'Multi-entity',
        label: 'cash visibility',
        note: 'Leaders can compare exposures and obligations across the full operating footprint.'
      }
    ],
    relatedIndustries: ['marketplaces', 'retail-operators', 'digital-banks']
  },
  {
    slug: 'reconciliation-control',
    title: 'Reconciliation control',
    summary: 'Match providers, ledger movements, and bank activity continuously instead of at month end.',
    description:
      'Turn reconciliation into a controlled operating loop with event matching, variance queues, and export-ready reporting for finance and audit stakeholders.',
    painPoints: [
      'Finance teams reconcile late because provider and bank data arrive in different shapes.',
      'Exception handling is too manual, which makes audits slow and unpredictable.',
      'Ownership is unclear when mismatches involve product, ops, and finance.'
    ],
    capabilities: [
      'Continuous match status across provider, ledger, and bank events',
      'Case queues for exceptions and materiality thresholds',
      'Close-ready reporting views by entity and product line',
      'Evidence exports for auditors and internal reviewers'
    ],
    outcomes: [
      {
        value: '65%',
        label: 'faster close cycles',
        note: 'Mismatch resolution starts earlier and stays organized through the month.'
      },
      {
        value: '3x',
        label: 'better exception accountability',
        note: 'Queues clearly separate owners, severity, and escalation history.'
      },
      {
        value: 'Audit-ready',
        label: 'evidence trail',
        note: 'Supporting records stay linked to the financial event that triggered review.'
      }
    ],
    relatedIndustries: ['saas-platforms', 'retail-operators', 'marketplaces']
  }
];

export const industries: Industry[] = [
  {
    slug: 'saas-platforms',
    title: 'SaaS platforms',
    summary: 'Give platform finance teams more control over billing, payouts, and settlement reporting.',
    description:
      'SaaS businesses often outgrow lightweight billing and payout tooling once they add partner settlements, usage-based pricing, or multiple legal entities. Finvera helps them keep scale without losing control.',
    priorities: [
      'Consistent payout rules across customer tiers and geographies',
      'Shared visibility for finance, product, and support teams',
      'Faster reconciliation for billing and partner settlement flows'
    ],
    workflows: [
      'Platform billing and refund controls',
      'Partner payouts and reserve handling',
      'Entity-level reporting for finance leadership'
    ],
    outcomes: [
      {
        value: '31%',
        label: 'less ops overhead',
        note: 'Teams spend less time coordinating finance changes through engineering.'
      },
      {
        value: '2 entities',
        label: 'to 10+ entities',
        note: 'The operating model scales as regional legal structures become more complex.'
      },
      {
        value: 'Shared',
        label: 'source of truth',
        note: 'Product and finance stop debating which export is current.'
      }
    ],
    relatedSolutions: ['payment-orchestration', 'reconciliation-control']
  },
  {
    slug: 'marketplaces',
    title: 'Marketplaces',
    summary: 'Coordinate buyer, seller, and platform money movement without losing margin or oversight.',
    description:
      'Marketplace operators juggle split settlements, reserves, disputes, and cross-border complexity. Finvera centralizes those decisions so scale does not create operational drift.',
    priorities: [
      'Route payouts and collections with strong failure recovery',
      'Keep reserve policy and cash timing visible to finance',
      'Monitor partner performance and exceptions without spreadsheet sprawl'
    ],
    workflows: [
      'Seller onboarding and payout states',
      'Reserve and risk policy handling',
      'Settlement forecasting and escalation queues'
    ],
    outcomes: [
      {
        value: '99.98%',
        label: 'payout continuity',
        note: 'Fallback logic and queue visibility reduce avoidable payout disruption.'
      },
      {
        value: '1 dashboard',
        label: 'for finance and ops',
        note: 'The same operating layer serves the people moving money and reviewing it.'
      },
      {
        value: 'Lower',
        label: 'reserve surprises',
        note: 'Teams can see future obligations before they become exceptions.'
      }
    ],
    relatedSolutions: ['payment-orchestration', 'treasury-automation']
  },
  {
    slug: 'digital-banks',
    title: 'Digital banks',
    summary: 'Support complex product launches with better control over routing, treasury, and case handling.',
    description:
      'Digital banking teams need speed without compromising governance. Finvera gives product and control teams a shared operating model they can expand by market, partner, or product line.',
    priorities: [
      'Clear separation between product delivery and control ownership',
      'Operational resilience when provider performance changes',
      'Consistent audit trails for reviewers and partner stakeholders'
    ],
    workflows: [
      'Funding and account movement controls',
      'Approval chains for thresholds and operational overrides',
      'Case-based review for escalations and exceptions'
    ],
    outcomes: [
      {
        value: 'Governed',
        label: 'launch velocity',
        note: 'Teams can expand faster without reworking the control surface every time.'
      },
      {
        value: 'Role-based',
        label: 'team separation',
        note: 'Decision rights stay explicit across operations, finance, and risk.'
      },
      {
        value: 'Unified',
        label: 'operating telemetry',
        note: 'Operational health and financial impact stay visible together.'
      }
    ],
    relatedSolutions: ['payment-orchestration', 'treasury-automation']
  },
  {
    slug: 'retail-operators',
    title: 'Retail operators',
    summary: 'Bring store, ecommerce, and supplier finance flows into one reliable operating rhythm.',
    description:
      'Retail finance teams need tighter visibility across channels, returns, settlements, and supplier obligations. Finvera helps them coordinate those moving pieces with less operational drag.',
    priorities: [
      'Unify store and online settlement visibility',
      'Reduce manual reconciliation work for refunds and charge adjustments',
      'Create dependable reporting for leadership and auditors'
    ],
    workflows: [
      'Settlement and refund exception handling',
      'Cash forecasting for channel operations',
      'Close-ready reporting by entity or region'
    ],
    outcomes: [
      {
        value: 'Multi-channel',
        label: 'settlement visibility',
        note: 'Teams can compare store, ecommerce, and partner flows in one model.'
      },
      {
        value: 'Fewer',
        label: 'close bottlenecks',
        note: 'Finance can resolve mismatches continuously instead of during crunch time.'
      },
      {
        value: 'Stronger',
        label: 'cash planning',
        note: 'Treasury views stay tied to real operational events.'
      }
    ],
    relatedSolutions: ['treasury-automation', 'reconciliation-control']
  }
];

export const articles: Article[] = [
  {
    slug: 'cut-reconciliation-lag-without-more-headcount',
    category: 'Operations',
    title: 'How finance teams cut reconciliation lag without adding headcount',
    excerpt:
      'The biggest reconciliation gains usually come from ownership design and event structure, not another spreadsheet layer.',
    publishedAt: '2026-03-19',
    readingTime: '5 min read',
    summary:
      'A practical look at why reconciliation backlogs grow and which operating changes create real leverage for finance teams.',
    sections: [
      {
        heading: 'Why the backlog keeps returning',
        paragraphs: [
          'Most reconciliation pain is not caused by one missing report. It comes from fragmented ownership, inconsistent event naming, and late visibility into exceptions.',
          'When product, operations, and finance all hold part of the answer, month-end becomes the first time the full picture is assembled. That is too late.'
        ]
      },
      {
        heading: 'What changes the pace',
        paragraphs: [
          'Teams move faster when every financial event has a shared identity across provider data, ledger data, and bank activity. That turns matching from a manual hunt into a controlled process.',
          'The second unlock is routing exceptions into clear queues with owners, thresholds, and escalation rules. Finance does not need more noise. It needs fewer unknowns.'
        ]
      },
      {
        heading: 'A better operating pattern',
        paragraphs: [
          'A strong operating layer exposes match status continuously, makes materiality visible, and keeps evidence close to the event under review.',
          'That shift reduces close pressure because work happens throughout the cycle, not only when reporting deadlines force it.'
        ]
      }
    ]
  },
  {
    slug: 'treasury-visibility-for-multi-entity-fintech',
    category: 'Treasury',
    title: 'Treasury visibility for multi-entity fintech teams',
    excerpt:
      'Cash planning breaks down when entity obligations, reserves, and provider timing live in separate systems.',
    publishedAt: '2026-03-15',
    readingTime: '4 min read',
    summary:
      'A framework for building treasury views that stay useful as more markets, providers, and legal entities come online.',
    sections: [
      {
        heading: 'Start with obligations, not dashboards',
        paragraphs: [
          'Treasury visibility is only helpful when it reflects real obligations. A balance snapshot without upcoming settlements, holds, or reserve commitments can create false confidence.',
          'That is why strong treasury design starts with the flow of obligations across entities and counterparties, then maps the reporting view to those events.'
        ]
      },
      {
        heading: 'Keep entity context intact',
        paragraphs: [
          'As fintech businesses expand, it becomes tempting to summarize everything into one aggregate view. Leaders still need the aggregate, but operators need entity-specific context to act well.',
          'The operating model should let teams move between aggregate liquidity signals and the exact entity, provider, or payout queue driving that signal.'
        ]
      },
      {
        heading: 'Build review loops into the model',
        paragraphs: [
          'Funding, sweeps, and reserve moves should not sit outside the workflow. Approval paths, evidence, and decision history need to live with the same data that surfaces the issue.',
          'That is how treasury becomes more dependable instead of simply more visible.'
        ]
      }
    ]
  },
  {
    slug: 'what-seo-first-means-for-b2b-fintech-sites',
    category: 'Growth',
    title: 'What SEO-first really means for a B2B fintech site',
    excerpt:
      'SEO-first is not stuffing keywords into a homepage. It is building a crawlable information architecture that reflects real buying journeys.',
    publishedAt: '2026-03-10',
    readingTime: '6 min read',
    summary:
      'A breakdown of the content and page architecture choices that help fintech brands rank for more than their own name.',
    sections: [
      {
        heading: 'The homepage cannot do all the work',
        paragraphs: [
          'A universal fintech narrative usually spans multiple buyers, industries, and use cases. One page can frame the brand, but it cannot fully answer every high-intent search.',
          'That is why solution pages, industry pages, trust pages, and insight content matter early. They create specific landing surfaces for specific questions.'
        ]
      },
      {
        heading: 'Technical choices shape search performance',
        paragraphs: [
          'Static-first rendering, semantic content structure, and route-level metadata make it easier for search engines to interpret the site while keeping load times fast.',
          'Astro is strong here because it keeps client-side JavaScript optional instead of mandatory.'
        ]
      },
      {
        heading: 'Architecture beats short-term hacks',
        paragraphs: [
          'The best SEO gains in B2B fintech often come from clarity. Clear routes, sharp page intent, and supporting trust content usually outperform a bloated homepage trying to rank for everything.',
          'If the site is structured well from the start, content expansion later becomes an addition instead of a rebuild.'
        ]
      }
    ]
  }
];

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString();
}
