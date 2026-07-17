// ---------------------------------------------------------------------------
// Blog posts (English). Publishing cadence: Tuesdays and Thursdays, 2/week.
// To add a new post: add an entry below with a unique slug, then commit + push.
// ---------------------------------------------------------------------------

export interface BlogSection {
  heading: string;
  level: 'h2' | 'h3';
  body: string[]; // paragraphs
}

export interface BlogPost {
  slug: string;
  title: string; // rendered as H1
  metaDescription: string;
  publishDate: string; // ISO date, e.g. '2026-07-21'
  category: string;
  image: { src: string; alt: string };
  intro: string;
  sections: BlogSection[];
  relatedCalculators: { label: string; href: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-much-house-can-you-afford',
    title: 'How Much House Can You Actually Afford? A Realistic Framework Beyond the 28/36 Rule',
    metaDescription:
      'The 28/36 rule tells lenders what they will approve — not what you should actually spend. Here is a more realistic framework for deciding how much house to buy.',
    publishDate: '2026-07-21',
    category: 'Real Estate',
    image: { src: '/blog/how-much-house-can-you-afford.svg', alt: 'How much house can you actually afford — SimplifyCalculator guide on the 28/36 rule and home affordability' },
    intro:
      "Ask ten mortgage lenders how much house you can afford and most will point you to the same shorthand: the 28/36 rule. It's a useful starting point, but it answers a different question than the one you're actually asking. Lenders use it to estimate the maximum they're willing to risk on you — not to estimate what you'll actually be comfortable paying every month for the next 15-30 years.",
    sections: [
      {
        heading: 'What the 28/36 rule actually measures',
        level: 'h2',
        body: [
          "The rule has two parts. The front-end ratio caps your housing costs (principal, interest, taxes, and insurance — often abbreviated PITI) at 28% of your gross monthly income. The back-end ratio caps all of your monthly debt payments, housing included, at 36% of gross income.",
          "Notice the word gross. Lenders calculate these ratios against your income before taxes, health insurance premiums, retirement contributions, and everything else that never actually reaches your bank account. That's the first gap between what a lender will approve and what your real budget can absorb.",
        ],
      },
      {
        heading: "Why the maximum approved amount isn't the right target",
        level: 'h2',
        body: [
          "A lender's approval is a ceiling based on default risk, not a recommendation based on your quality of life. Two households with identical gross incomes can have very different real financial pictures — one might have significant student loan debt paid off, generous employer health coverage, and no children, while the other is supporting a larger family with higher childcare and insurance costs. The 28/36 rule treats both households identically, because it's built to protect the lender, not to optimize your life.",
          "This is why so many new homeowners feel 'house poor' — cash-strapped every month despite technically qualifying for their mortgage — even though they borrowed exactly what a bank said they could handle.",
        ],
      },
      {
        heading: 'A more realistic framework: work backward from your actual budget',
        level: 'h2',
        body: [
          "Instead of starting with what a lender will approve, start with your real monthly budget. Use a tool like our Monthly Budget Calculator to see exactly what you spend today across housing, transportation, food, and savings — before you've added a mortgage payment to the mix.",
        ],
      },
      {
        heading: 'Step 1: Decide your true housing budget',
        level: 'h3',
        body: [
          "Take your net (after-tax, after-deductions) monthly income, not gross. Many financial planners suggest capping total housing costs at 25% of net income rather than 28% of gross — the two percentages sound close, but net income is typically 20-30% lower than gross, so 25% of net is a meaningfully more conservative number.",
        ],
      },
      {
        heading: 'Step 2: Build in a real maintenance and repair buffer',
        level: 'h3',
        body: [
          "Homeownership carries costs that renting doesn't: a broken water heater, a roof repair, appliance replacement. A commonly cited rule of thumb is 1% of the home's value per year in maintenance — on a $350,000 home, that's roughly $290/month that a mortgage calculator won't show you but your bank account will absolutely feel.",
        ],
      },
      {
        heading: 'Step 3: Stress-test against a single-income scenario',
        level: 'h3',
        body: [
          "If your household has two incomes, ask: could we still make this payment comfortably on one income for six months? Job loss, parental leave, or a health issue are not rare edge cases — they're common enough that your housing decision should survive at least one of them without forcing a sale.",
        ],
      },
      {
        heading: 'Putting it together',
        level: 'h2',
        body: [
          "Run your numbers through our Home Affordability Calculator to see the lender's maximum, then compare that against your own budget-based target from the steps above. In most cases, the budget-based number comes in meaningfully lower than the bank's maximum — and that gap is exactly the cushion that keeps a home purchase from turning into a financial strain. Before signing anything, also run the full monthly payment (including your realistic property tax and insurance estimate) through our Mortgage Calculator so there are no surprises at closing.",
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Home Affordability Calculator', href: '/calculators/home-affordability-calculator' },
      { label: 'Mortgage Calculator', href: '/calculators/mortgage-calculator' },
      { label: 'Monthly Budget Calculator', href: '/calculators/budget-calculator' },
    ],
  },
  {
    slug: 'true-cost-of-minimum-payments',
    title: 'The True Cost of Minimum Payments: Why Credit Card Debt Traps So Many People',
    metaDescription:
      'Credit card minimum payments are designed to keep you paying interest for years. See the real math behind minimum payments and how to escape the trap faster.',
    publishDate: '2026-07-23',
    category: 'Debt',
    image: { src: '/blog/true-cost-of-minimum-payments.svg', alt: 'The true cost of credit card minimum payments — SimplifyCalculator guide to escaping revolving debt faster' },
    intro:
      "Credit card statements are required by law to show your minimum payment prominently — and it's usually a small, unthreatening-looking number. That's not an accident. Minimum payments are calculated specifically to extend your balance over as many months as possible while you pay the maximum amount of interest along the way.",
    sections: [
      {
        heading: 'How minimum payments are actually calculated',
        level: 'h2',
        body: [
          "Most issuers calculate the minimum as a small percentage of your balance — typically 1-3% — plus that month's accrued interest, with a low dollar floor (often $25-35). Because the minimum is a percentage of a shrinking balance, the dollar amount you're asked to pay actually decreases every month as your balance goes down, which sounds convenient but is precisely what stretches payoff time from months into years.",
        ],
      },
      {
        heading: 'A real example',
        level: 'h2',
        body: [
          "Take a $5,000 balance at a fairly typical 22% APR, paying only the minimum (assume 2% of balance or $35, whichever is greater). It takes roughly 20+ years to pay off, and the total interest paid over that time can exceed the original balance — meaning you effectively pay for the same purchase twice. Our Credit Card Payoff Calculator lets you plug in your own balance, rate, and a fixed payment amount to see this play out with your real numbers instead of a generic example.",
        ],
      },
      {
        heading: "Why 'just the minimum' feels safe but rarely is",
        level: 'h2',
        body: [
          "Paying the minimum keeps your account in good standing and avoids late fees, which is real and valuable. But it creates an illusion of progress — the balance moves so slowly that many people don't register how much total interest is quietly accumulating in the background, especially if they continue using the card for new purchases at the same time.",
        ],
      },
      {
        heading: 'What actually accelerates payoff',
        level: 'h2',
        body: [],
      },
      {
        heading: 'Even a modest fixed increase changes the math dramatically',
        level: 'h3',
        body: [
          "Switching from a shrinking minimum payment to a fixed dollar amount — even one that's only $50-100 higher than this month's minimum — usually cuts payoff time by more than half and can reduce total interest paid by thousands of dollars on a mid-size balance. The key is fixing the payment amount rather than letting it shrink alongside the balance.",
        ],
      },
      {
        heading: 'Attack the highest-rate balance first if you carry more than one card',
        level: 'h3',
        body: [
          "If you have multiple cards, paying minimums on all but the highest-APR card, and directing every extra dollar there, is mathematically the fastest way out (a strategy known as the debt avalanche). Our Debt Payoff Calculator can model any single balance-rate-payment combination so you can compare cards side by side before deciding where to focus.",
        ],
      },
      {
        heading: 'Consider a lower-rate consolidation option',
        level: 'h3',
        body: [
          "A 0% APR balance transfer card or a fixed-rate personal loan used specifically to pay off higher-rate card debt can meaningfully cut the total interest cost — but only if you stop adding new charges to the original card. Consolidation without a change in spending habits just relocates the same problem.",
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Credit Card Payoff Calculator', href: '/calculators/credit-card-payoff-calculator' },
      { label: 'Debt Payoff Calculator', href: '/calculators/debt-payoff-calculator' },
      { label: 'Debt-to-Income Ratio Calculator', href: '/calculators/debt-to-income-ratio-calculator' },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
