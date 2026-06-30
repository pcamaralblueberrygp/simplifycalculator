// ---------------------------------------------------------------------------
// This file is the single source of truth for every calculator page on the
// site. To publish a NEW page:
//   1. Add an entry to the CALCULATORS array below (slug, copy, calcType).
//   2. If it's a brand-new TYPE of calculator (new math), create a matching
//      component in src/components/calculators/ and register it in the
//      componentMap inside src/pages/calculators/[slug].astro.
//   3. Commit + push. Cloudflare Pages rebuilds and the new page goes live
//      automatically — no manual file creation needed for routing.
// ---------------------------------------------------------------------------

export type CalcType =
  | 'loan'
  | 'mortgage'
  | 'compoundInterest'
  | 'simpleInterest'
  | 'roi'
  | 'savingsGoal'
  | 'debtPayoff'
  | 'retirement'
  | 'amortization'
  | 'creditCardPayoff';

export interface Faq {
  q: string;
  a: string;
}

export interface FormulaSource {
  label: string;
  url: string;
}

export interface Calculator {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  metaDescription: string;
  intro: string;
  formulaExplanation: string;
  formulaSource?: FormulaSource;
  example: string;
  faqs: Faq[];
  calcType: CalcType;
}

export const CALCULATORS: Calculator[] = [
  {
    slug: 'loan-payment-calculator',
    title: 'Loan Payment Calculator',
    shortTitle: 'Loan Payment',
    category: 'Loans',
    metaDescription:
      'Calculate your monthly loan payment, total interest, and total cost for any personal, auto, or installment loan.',
    intro:
      'Estimate the fixed monthly payment for an installment loan based on the amount borrowed, the interest rate, and the repayment term. Use it for personal loans, auto loans, or any fixed-rate installment debt.',
    formulaExplanation:
      'This calculator uses the standard amortizing loan formula: M = P * [r(1+r)^n] / [(1+r)^n - 1], where P is the loan principal, r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly payments.\n\nBecause the payment is fixed, the portion going to interest is highest in the first month and shrinks every month after, while the portion going to principal grows over time.',
    formulaSource: {
      label: 'CFPB: How to calculate monthly payment on a loan',
      url: 'https://www.consumerfinance.gov/ask-cfpb/how-is-my-monthly-payment-calculated-en-1965/',
    },
    example:
      'Example: a $20,000 loan at 7.5% APR for 4 years (48 months) produces a fixed monthly payment of about $483.58, with roughly $3,212 paid in total interest over the life of the loan.',
    faqs: [
      {
        q: 'Does this include fees or insurance?',
        a: 'No. This calculator estimates principal and interest only. Origination fees, late fees, and optional insurance products are not included and can change your real cost.',
      },
      {
        q: 'What if my loan has a variable rate?',
        a: 'This tool assumes a fixed rate for the full term. For variable-rate loans, the payment will change whenever the rate resets, so treat the result as a snapshot, not a guarantee.',
      },
      {
        q: 'Why is most of my early payment interest?',
        a: 'Interest is charged on the remaining balance, which is highest at the start of the loan. As the balance shrinks, the interest portion of each payment shrinks too.',
      },
    ],
    calcType: 'loan',
  },
  {
    slug: 'mortgage-calculator',
    title: 'Mortgage Calculator',
    shortTitle: 'Mortgage Payment',
    category: 'Loans',
    metaDescription:
      'Estimate your monthly mortgage payment including principal, interest, taxes, and insurance (PITI).',
    intro:
      'Estimate your monthly mortgage payment from the home price, down payment, interest rate, and loan term, including optional property tax and homeowners insurance.',
    formulaExplanation:
      'The principal and interest portion uses the same amortization formula as a standard loan, applied to the loan amount (home price minus down payment). Estimated monthly property tax and insurance are then added on top to approximate your total monthly housing payment (PITI: Principal, Interest, Taxes, Insurance).\n\nThis tool does not include private mortgage insurance (PMI) or HOA dues; add those manually if they apply to you.',
    formulaSource: {
      label: 'CFPB: How to calculate your mortgage payment',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-mortgage-payment-en-1600/',
    },
    example:
      'Example: a $400,000 home with a $80,000 (20%) down payment, a 30-year loan at 6.5% APR, $4,200/year property tax, and $1,400/year insurance comes out to roughly $2,022 in principal and interest, plus about $467 for taxes and insurance, for a total of about $2,489/month.',
    faqs: [
      {
        q: 'What down payment should I use?',
        a: 'Putting down less than 20% usually triggers private mortgage insurance (PMI), which this calculator does not include. Add an estimated PMI amount manually if your down payment is below 20%.',
      },
      {
        q: 'Does a shorter loan term save money?',
        a: 'Yes. A 15-year loan has a higher monthly payment than a 30-year loan at the same rate, but you pay significantly less total interest because the balance is paid down faster.',
      },
      {
        q: 'Are property taxes the same everywhere?',
        a: 'No, property tax rates vary widely by state and county. Use your local assessor’s rate or your specific listing’s tax estimate for a more accurate number.',
      },
    ],
    calcType: 'mortgage',
  },
  {
    slug: 'compound-interest-calculator',
    title: 'Compound Interest Calculator',
    shortTitle: 'Compound Interest',
    category: 'Investing',
    metaDescription:
      'See how your savings or investments grow over time with monthly compounding and optional monthly contributions.',
    intro:
      'Project how an initial deposit grows over time when interest compounds monthly, with an optional recurring monthly contribution added to the balance.',
    formulaExplanation:
      'The starting balance grows using A = P(1 + r/12)^(12t), where P is the principal, r is the annual interest rate, and t is the number of years. Monthly contributions grow separately using the future value of an annuity formula and are added to that result.\n\nAll growth in this calculator compounds monthly, which is a common convention for savings and investment accounts.',
    formulaSource: {
      label: 'Investopedia: Compound Interest',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    example:
      'Example: $5,000 invested at a 7% annual return, compounded monthly, with a $200 monthly contribution for 20 years grows to roughly $124,400. Of that, $53,000 came from the initial deposit plus contributions, and about $71,400 is investment growth.',
    faqs: [
      {
        q: 'Why monthly compounding instead of daily or annual?',
        a: 'Monthly compounding is a reasonable approximation for most savings accounts and investment projections. Daily compounding produces a very similar result for typical timeframes; annual compounding produces a slightly lower one.',
      },
      {
        q: 'Does this account for inflation?',
        a: 'No, the projection is in nominal (today’s) dollars. Long-term purchasing power will be lower than the raw number shown once inflation is factored in.',
      },
      {
        q: 'Is a fixed annual return realistic?',
        a: 'Real investment returns vary year to year. This tool assumes a constant average rate to make long-term projections easy to understand, not to predict actual market performance.',
      },
    ],
    calcType: 'compoundInterest',
  },
  {
    slug: 'simple-interest-calculator',
    title: 'Simple Interest Calculator',
    shortTitle: 'Simple Interest',
    category: 'Investing',
    metaDescription:
      'Calculate simple interest earned or owed on a principal amount over a fixed time period.',
    intro:
      'Calculate interest that accrues on a fixed principal at a constant rate, without compounding — common for short-term loans, certain bonds, and basic interest problems.',
    formulaExplanation:
      'Simple interest is calculated as I = P * r * t, where P is the principal, r is the annual interest rate (as a decimal), and t is the time in years. Unlike compound interest, the interest earned each period is always based on the original principal, never on previously earned interest.',
    formulaSource: {
      label: 'Investopedia: Simple Interest',
      url: 'https://www.investopedia.com/terms/s/simple_interest.asp',
    },
    example:
      'Example: a $10,000 principal at a 5% simple annual interest rate for 3 years earns $1,500 in interest, for a total of $11,500, regardless of how the 3 years are split up.',
    faqs: [
      {
        q: 'How is this different from compound interest?',
        a: 'Simple interest is always calculated on the original principal. Compound interest is calculated on the principal plus any interest already earned, so it grows faster over time.',
      },
      {
        q: 'Where is simple interest actually used?',
        a: 'Some auto loans, short-term promissory notes, and certain bonds use simple interest. Most savings accounts, credit cards, and mortgages use compound interest instead.',
      },
    ],
    calcType: 'simpleInterest',
  },
  {
    slug: 'roi-calculator',
    title: 'ROI Calculator (Return on Investment)',
    shortTitle: 'ROI',
    category: 'Investing',
    metaDescription:
      'Calculate the return on investment (ROI) and annualized ROI between an initial investment and its final value.',
    intro:
      'Calculate the percentage return on an investment, plus the annualized return if you held the investment for more than one year.',
    formulaExplanation:
      'Total ROI is calculated as ROI (%) = (Final Value − Initial Investment) / Initial Investment × 100. When a holding period in years is provided, the annualized ROI is also calculated as ((Final Value / Initial Investment)^(1/years) − 1) × 100, which lets you fairly compare investments held for different lengths of time.',
    formulaSource: {
      label: 'Investopedia: Return on Investment (ROI)',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
    example:
      'Example: an investment of $8,000 that grows to $11,200 over 3 years has a total ROI of 40% and an annualized ROI of about 11.9% per year.',
    faqs: [
      {
        q: 'Why does annualized ROI matter?',
        a: 'A 40% return over 1 year is very different from a 40% return over 10 years. Annualized ROI normalizes the result per year so you can compare investments with different holding periods fairly.',
      },
      {
        q: 'Does this account for taxes or fees?',
        a: 'No. This is a gross return calculation. Taxes, transaction fees, and inflation will reduce your real, take-home return.',
      },
    ],
    calcType: 'roi',
  },
  {
    slug: 'savings-goal-calculator',
    title: 'Savings Goal Calculator',
    shortTitle: 'Savings Goal',
    category: 'Savings',
    metaDescription:
      'Find out how much you need to save each month to reach a specific savings goal by a target date.',
    intro:
      'Find the monthly contribution required to reach a specific savings target by a future date, based on your current savings and an expected annual return.',
    formulaExplanation:
      'This calculator solves the future value of an annuity formula for the payment amount: PMT = (FV − PV(1+r)^n) × r / [(1+r)^n − 1], where FV is your goal, PV is your current savings, r is the monthly interest rate, and n is the number of months until your target date. When the interest rate is 0%, it simplifies to PMT = (FV − PV) / n.',
    formulaSource: {
      label: 'Investopedia: Future Value of an Annuity',
      url: 'https://www.investopedia.com/terms/f/future-value-annuity.asp',
    },
    example:
      'Example: to reach a $30,000 goal in 5 years (60 months), starting with $4,000 saved and earning 4% annually, you would need to contribute about $379 per month.',
    faqs: [
      {
        q: 'What if I can’t afford the suggested monthly amount?',
        a: 'Try extending your timeline or lowering your goal amount and recalculating — both reduce the required monthly contribution.',
      },
      {
        q: 'Should I assume a high interest rate to lower my required contribution?',
        a: 'Be conservative. Using an optimistic rate makes the required contribution look smaller than it may actually need to be if real returns come in lower.',
      },
    ],
    calcType: 'savingsGoal',
  },
  {
    slug: 'debt-payoff-calculator',
    title: 'Debt Payoff Calculator',
    shortTitle: 'Debt Payoff',
    category: 'Debt',
    metaDescription:
      'Find out how many months it will take to pay off a debt and how much total interest you will pay.',
    intro:
      'Find out how long it will take to pay off a single debt at a fixed monthly payment, and how much total interest you will pay along the way.',
    formulaExplanation:
      'This calculator simulates the payoff month by month: each month, interest is added to the remaining balance at the monthly rate, then your fixed payment is subtracted. The simulation continues until the balance reaches zero (or 600 months, whichever comes first) and totals the interest paid along the way.',
    formulaSource: {
      label: 'CFPB: Paying off debt',
      url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/',
    },
    example:
      'Example: a $6,000 balance at 19.99% APR with a fixed $250 monthly payment takes about 31 months to pay off and costs roughly $1,725 in total interest.',
    faqs: [
      {
        q: 'What happens if my payment is too low?',
        a: 'If your monthly payment doesn’t cover the monthly interest charge, the balance will never go down. The calculator will flag this so you can adjust the payment.',
      },
      {
        q: 'Does paying extra each month help?',
        a: 'Yes, significantly. Even a modest increase in your fixed monthly payment can cut both the payoff time and the total interest substantially — try a few different amounts to compare.',
      },
    ],
    calcType: 'debtPayoff',
  },
  {
    slug: 'retirement-savings-calculator',
    title: 'Retirement Savings Calculator',
    shortTitle: 'Retirement Savings',
    category: 'Retirement',
    metaDescription:
      'Project your retirement savings balance based on your current age, savings, monthly contributions, and expected return.',
    intro:
      'Project the balance you could have at retirement based on your current age, current savings, monthly contributions, and an assumed average annual return.',
    formulaExplanation:
      'This calculator projects two growth streams to your target retirement age: your current balance compounding monthly, and your ongoing monthly contributions compounding as an annuity. The two are added together for your projected balance at retirement.',
    formulaSource: {
      label: 'Investor.gov: Compound Interest Calculator (U.S. SEC)',
      url: 'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator',
    },
    example:
      'Example: starting at age 30 with $15,000 saved, contributing $400/month, and retiring at 65 with a 7% average annual return projects to roughly $893,000 at retirement, of which about $183,000 came from contributions and the rest from investment growth.',
    faqs: [
      {
        q: 'Is 7% a realistic long-term return assumption?',
        a: 'It is a commonly used long-run average for diversified stock-heavy portfolios, but actual results vary year to year and are not guaranteed. Consider running the numbers at a lower rate as well to see a more conservative outcome.',
      },
      {
        q: 'Does this account for employer matching?',
        a: 'Not automatically. If your employer matches contributions, add that match to your monthly contribution amount to include it in the projection.',
      },
      {
        q: 'Does this include Social Security or pensions?',
        a: 'No, this only projects the personal savings and contributions you enter. Other retirement income sources should be considered separately.',
      },
    ],
    calcType: 'retirement',
  },
  {
    slug: 'amortization-schedule-calculator',
    title: 'Amortization Schedule Calculator',
    shortTitle: 'Amortization Schedule',
    category: 'Loans',
    metaDescription:
      'Generate a year-by-year amortization schedule showing principal, interest, and remaining balance for any fixed-rate loan.',
    intro:
      'Generate a year-by-year breakdown of principal paid, interest paid, and remaining balance for any fixed-rate, fully amortizing loan.',
    formulaExplanation:
      'The fixed monthly payment is calculated with the standard amortization formula, then each month is simulated in sequence: interest is charged on the remaining balance, the rest of the payment reduces principal, and the new balance carries into the next month. Months are aggregated into yearly rows for readability.',
    formulaSource: {
      label: 'CFPB: What is an amortization schedule?',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-an-amortization-schedule-en-1992/',
    },
    example:
      'Example: a $250,000 loan at 6% APR over 30 years has a fixed payment of about $1,498.88/month. In year 1, roughly $14,916 of that year’s payments goes to interest and about $3,070 goes to principal — that ratio gradually flips over the life of the loan.',
    faqs: [
      {
        q: 'Why does the principal/interest split change every year?',
        a: 'Interest is charged on the remaining balance. As the balance shrinks, the interest portion of each payment shrinks, so more of each payment goes toward principal over time.',
      },
      {
        q: 'Can I see a month-by-month schedule instead of yearly?',
        a: 'This page summarizes by year to keep the table readable for long loans. The underlying simulation is monthly, so a month-by-month view can be added if you need that level of detail.',
      },
    ],
    calcType: 'amortization',
  },
  {
    slug: 'credit-card-payoff-calculator',
    title: 'Credit Card Payoff Calculator',
    shortTitle: 'Credit Card Payoff',
    category: 'Debt',
    metaDescription:
      'Calculate how long it will take to pay off a credit card balance and how much interest you will pay at a given monthly payment.',
    intro:
      'Calculate how many months it will take to pay off a credit card balance, and the total interest cost, based on your APR and a fixed monthly payment.',
    formulaExplanation:
      ‘Credit card interest typically compounds monthly. This calculator simulates the payoff month by month: interest accrues on the remaining balance at the card’s monthly rate (APR / 12), then your payment is applied. The simulation runs until the balance hits zero or 600 months pass.’,
    formulaSource: {
      label: ‘CFPB: How is credit card interest calculated?’,
      url: ‘https://www.consumerfinance.gov/ask-cfpb/how-is-a-credit-card-interest-rate-calculated-en-1587/’,
    },
    example:
      'Example: a $4,500 balance at 24.99% APR with a fixed $200/month payment takes about 31 months to pay off and costs roughly $1,635 in total interest — more than a third of the original balance.',
    faqs: [
      {
        q: 'Why is credit card interest so costly compared to other debt?',
        a: 'Credit cards typically carry much higher APRs than loans or mortgages, and interest compounds monthly on the full remaining balance, so unpaid balances grow quickly.',
      },
      {
        q: 'Is paying only the minimum a good idea?',
        a: 'Minimum payments are usually a small percentage of the balance and are designed to extend repayment for years while maximizing interest paid. Paying more than the minimum, when possible, meaningfully shortens payoff time.',
      },
    ],
    calcType: 'creditCardPayoff',
  },
];

export function getCalculatorBySlug(slug: string): Calculator | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}
