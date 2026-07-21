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
        body: [
          "The good news is that escaping the minimum-payment trap doesn't require a windfall — it requires changing how you pay, not necessarily how much you earn. Three levers make the biggest difference, and you can combine all three at once.",
        ],
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
  {
    slug: 'cost-of-waiting-to-save-for-retirement',
    title: 'The Cost of Waiting: What a 10-Year Delay Really Does to Your Retirement Savings',
    metaDescription:
      'Starting retirement savings 10 years late costs far more than the missed contributions. See the real math on lost compounding and what to do if you are already behind.',
    publishDate: '2026-07-21',
    category: 'Retirement',
    image: { src: '/blog/cost-of-waiting-to-save-for-retirement.svg', alt: 'The cost of waiting to save for retirement — SimplifyCalculator guide comparing starting at 25 versus 35 with compound growth charts' },
    intro:
      "\"I'll start saving seriously once I'm earning more\" is one of the most expensive sentences in personal finance. It sounds reasonable — and a 10-year delay feels small next to a 40-year career — but the math behind compound growth treats time completely differently than it treats money. Waiting doesn't just cost you the contributions you skipped; it costs you decades of growth on top of them.",
    sections: [
      {
        heading: "It's not the missed contributions — it's the missed compounding",
        level: 'h2',
        body: [
          "Compare two savers, both investing $300 a month at a 7% average annual return (a common long-term assumption for a diversified stock portfolio) until age 65. Investor A starts at 25 and contributes for 40 years. Investor B starts at 35 and contributes for 30 years.",
          "Investor A ends up with roughly $787,000. Investor B ends up with roughly $366,000 — less than half. The gap is over $421,000. But Investor B only contributed $36,000 less out of pocket than Investor A (10 fewer years at $300/month). The other $385,000 of the gap is pure lost compounding: growth that never had time to happen, and growth on that growth, which never had time to happen either.",
        ],
      },
      {
        heading: 'Why the first 10 years matter more than the last 10',
        level: 'h2',
        body: [
          "Under the Rule of 72, money growing at 7% roughly doubles every 10.3 years. A dollar invested at 25 gets close to four full doubling periods before 65. A dollar invested at 35 only gets three. Losing that first doubling period doesn't just remove one-quarter of the growth — it removes the base that every later doubling would have compounded on top of. This is why financial advisors consistently say the earliest years of saving matter more than any other stretch of your working life, even though they usually involve the smallest paychecks.",
          "You can see this effect on your own numbers with our Compound Interest Calculator — try running the same monthly contribution starting 10 years apart and watch how much of the final gap comes from growth rather than principal.",
        ],
      },
      {
        heading: "Why 'catching up later' rarely works the way people expect",
        level: 'h2',
        body: [
          "The instinctive fix for a late start is to save more once income rises. It helps, but the amount required is usually larger than people expect.",
        ],
      },
      {
        heading: 'The catch-up contribution has to be dramatically bigger, not just a bit bigger',
        level: 'h3',
        body: [
          "To match Investor A's $787,000 outcome in only 30 years instead of 40, Investor B would need to contribute about $645 a month — more than double the original $300, not a modest bump. That's the practical cost of the lost decade: not a little extra saved later, but more than double the contribution rate for the rest of a career just to arrive at the same place.",
        ],
      },
      {
        heading: "You can't out-invest a time shortfall with better returns",
        level: 'h3',
        body: [
          "A common instinct is to chase higher returns to make up lost time — shifting into riskier investments hoping for 10-12% instead of 7%. This usually backfires: higher expected returns come with higher volatility, and a market downturn in the final years before retirement can do more damage to a concentrated, catch-up-mode portfolio than a decade of modest, steady 7% growth ever would have cost you. Time and rate of return work together, but time is the variable you can never buy back.",
        ],
      },
      {
        heading: "If you're already behind, here's what actually moves the needle",
        level: 'h2',
        body: [
          "A late start isn't a reason to give up on retirement savings — it's a reason to be more deliberate about the levers that are still fully within your control.",
        ],
      },
      {
        heading: 'Raise your contribution rate before your lifestyle absorbs the raise',
        level: 'h3',
        body: [
          "Every time you get a raise or bonus, redirect a fixed percentage of it into retirement savings before it becomes part of your regular spending. This avoids the common trap where income grows but the savings rate stays flat because expenses quietly grow to match it.",
        ],
      },
      {
        heading: 'Capture 100% of any employer match and use catch-up contribution limits',
        level: 'h3',
        body: [
          "An employer 401(k) match is an immediate, guaranteed return that no market investment can reliably beat — leaving it unclaimed is the single most avoidable mistake in retirement saving. If you're 50 or older, the IRS also allows higher annual catch-up contribution limits specifically designed for savers who started late.",
        ],
      },
      {
        heading: 'Be honest about your target retirement age',
        level: 'h3',
        body: [
          "Working three to five years longer than originally planned does two things at once: it adds more years of contributions and growth, and it shortens the number of years your savings need to cover. Even a modest delay in retirement age can close a surprisingly large gap, and it's often a more realistic lever than trying to dramatically outsave a decade of lost time in half the years.",
        ],
      },
      {
        heading: 'Run your own numbers before you decide anything',
        level: 'h2',
        body: [
          "Generic examples are useful for illustrating the shape of the problem, but your actual gap — and the contribution rate that closes it — depends on your current age, balance, and target retirement date. Use our Retirement Savings Calculator to model your specific timeline, and the Rule of 72 Calculator to get a quick, intuitive sense of how many doubling periods your money realistically has left before you plan to retire.",
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Retirement Savings Calculator', href: '/calculators/retirement-savings-calculator' },
      { label: 'Compound Interest Calculator', href: '/calculators/compound-interest-calculator' },
      { label: 'Rule of 72 Calculator', href: '/calculators/rule-of-72-calculator' },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
