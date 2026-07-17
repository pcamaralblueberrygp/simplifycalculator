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
  | 'creditCardPayoff'
  | 'budget'
  | 'netWorth'
  | 'emergencyFund'
  | 'inflation'
  | 'tip'
  | 'savingsInterest'
  | 'breakEven'
  | 'ruleOf72'
  | 'hourlyToSalary'
  | 'dividendYield'
  | 'stockReturn'
  | 'rentVsBuy'
  | 'paycheck'
  | 'debtToIncome'
  | 'collegeSavings'
  | 'homeAffordability'
  | 'freelanceRate';

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
  tips?: string[];
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
    tips: [
      'Get quotes from at least three lenders (bank, credit union, online lender) before signing — rates for the same borrower can vary by a full percentage point or more.',
      'A shorter term almost always means a higher monthly payment but a much lower total interest cost. Run both a 3-year and 5-year term through this calculator before deciding.',
      'If your credit score is below 680, improving it for even 60-90 days before applying (paying down credit card balances, fixing report errors) can meaningfully lower the rate you\'re offered.',
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
        a: "No, property tax rates vary widely by state and county. Use your local assessor's rate or your specific listing's tax estimate for a more accurate number.",
      },
    ],
    tips: [
      'Get pre-approved (not just pre-qualified) before house hunting — it locks in a realistic budget and makes your offer more competitive with sellers.',
      'Shop your rate with at least 3-4 lenders within a 14-day window; credit bureaus treat multiple mortgage inquiries in a short period as a single soft check on your score.',
      'Extra principal payments early in the loan save far more interest than the same extra payment made later — even one extra payment per year can cut years off a 30-year mortgage.',
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
        a: "No, the projection is in nominal (today's) dollars. Long-term purchasing power will be lower than the raw number shown once inflation is factored in.",
      },
      {
        q: 'Is a fixed annual return realistic?',
        a: 'Real investment returns vary year to year. This tool assumes a constant average rate to make long-term projections easy to understand, not to predict actual market performance.',
      },
    ],
    tips: [
      'Time in the market beats timing the market: starting 10 years earlier with smaller contributions usually beats starting later with larger ones, because compounding needs time to work.',
      'Automate your monthly contribution so it happens before you have a chance to spend the money — consistency matters more than the exact amount for long-term compounding.',
      'Check whether your account has fees (expense ratios, account maintenance fees) — even a 1% annual fee can quietly erase a large share of your compounded growth over 20-30 years.',
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
    tips: [
      'Double-check your loan or bond documentation for the word \'simple\' or \'add-on\' interest before assuming — most consumer credit (credit cards, most mortgages) actually compounds, which changes your real cost significantly.',
      'For short-term loans (under a year), the difference between simple and compound interest is small; for anything multi-year, always confirm which method applies.',
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
    tips: [
      'Always compare investments using annualized ROI, not total ROI, when the holding periods differ — a 20% return in 1 year is far better than a 20% return spread over 5 years.',
      'Include all costs in your initial investment figure (fees, closing costs, taxes paid to acquire the asset) — leaving them out inflates your ROI artificially.',
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
        q: "What if I can't afford the suggested monthly amount?",
        a: 'Try extending your timeline or lowering your goal amount and recalculating — both reduce the required monthly contribution.',
      },
      {
        q: 'Should I assume a high interest rate to lower my required contribution?',
        a: 'Be conservative. Using an optimistic rate makes the required contribution look smaller than it may actually need to be if real returns come in lower.',
      },
    ],
    tips: [
      'Recalculate this every 6-12 months — actual returns, income changes, and new priorities mean the original required contribution rarely stays accurate for long.',
      'If the required monthly contribution feels unaffordable, extending the timeline by even 12-18 months often lowers it more than you\'d expect, because compounding gets more time to help.',
      'Keep goal-specific savings in a separate account from your everyday spending money — mixing the two is the most common reason people miss savings targets.',
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
        a: "If your monthly payment doesn't cover the monthly interest charge, the balance will never go down. The calculator will flag this so you can adjust the payment.",
      },
      {
        q: 'Does paying extra each month help?',
        a: 'Yes, significantly. Even a modest increase in your fixed monthly payment can cut both the payoff time and the total interest substantially — try a few different amounts to compare.',
      },
    ],
    tips: [
      'If you have multiple debts, pay minimums on all but the smallest balance or highest rate first — see our Debt-to-Income and Credit Card calculators for related planning.',
      'Any extra amount you can add to the fixed payment — even $25-50/month — compounds into a meaningfully shorter payoff timeline. Try a few amounts in this calculator to see the effect.',
      'Before committing to a payment plan, check whether a balance transfer or debt consolidation loan could lower your interest rate — the payoff math changes substantially at a lower rate.',
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
    tips: [
      'Increase your contribution rate by 1% every time you get a raise — you\'ll barely notice the difference in take-home pay, but it meaningfully changes your projected balance.',
      'Always capture a full employer 401(k) match if offered — it is an immediate, guaranteed return that no market investment can match.',
      'Re-run this projection with a more conservative return (5-6%) periodically as a stress test, so your plan doesn\'t depend entirely on optimistic market assumptions.',
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
      "Example: a $250,000 loan at 6% APR over 30 years has a fixed payment of about $1,498.88/month. In year 1, roughly $14,916 of that year's payments goes to interest and about $3,070 goes to principal — that ratio gradually flips over the life of the loan.",
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
    tips: [
      'Use this schedule to decide if refinancing makes sense: if you\'re still early in the loan (mostly paying interest), refinancing resets that clock — run the numbers before assuming it saves money.',
      'If you plan to sell or move within 5-7 years, check how much equity the schedule shows you\'ll actually have built by then — it\'s often less than people expect on a 30-year loan.',
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
      "Credit card interest typically compounds monthly. This calculator simulates the payoff month by month: interest accrues on the remaining balance at the card\'s monthly rate (APR / 12), then your payment is applied. The simulation runs until the balance hits zero or 600 months pass.",
    formulaSource: {
      label: 'CFPB: How is credit card interest calculated?',
      url: 'https://www.consumerfinance.gov/ask-cfpb/how-is-a-credit-card-interest-rate-calculated-en-1587/',
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
    tips: [
      'If the calculator shows the balance never going down, that\'s a critical signal — your payment doesn\'t cover the interest charge, and the debt will grow, not shrink.',
      'Consider a 0% APR balance transfer card if your credit qualifies — moving a high-interest balance to 0% for 12-18 months can save hundreds or thousands in interest during payoff.',
      'Pay more than the card issuer\'s minimum whenever possible; minimums are calculated to maximize how long you carry (and pay interest on) the balance.',
    ],
    calcType: 'creditCardPayoff',
  },
  {
    slug: 'budget-calculator',
    title: 'Monthly Budget Calculator',
    shortTitle: 'Monthly Budget',
    category: 'Budgeting',
    metaDescription:
      'Plan your monthly budget by entering your income and expenses. See exactly how much you have left over — or where you are overspending.',
    intro:
      'A monthly budget calculator helps you allocate your take-home income across fixed expenses (rent, loan payments), variable spending (groceries, utilities), and savings goals. Seeing the numbers in one place makes it easier to spot where money is leaking and make intentional trade-offs.',
    formulaExplanation:
      'The calculation is straightforward: Net = Income − Total Expenses. A positive result means you have a surplus; a negative result means you are spending more than you earn. The useful part is breaking expenses into categories so you can see which category is the biggest drain relative to your income.',
    formulaSource: {
      label: 'CFPB: Making a budget',
      url: 'https://www.consumerfinance.gov/consumer-tools/budget-tool/',
    },
    example:
      'Example: $5,000 take-home income minus $1,400 rent, $450 car payment, $600 groceries/dining, $200 utilities, $300 subscriptions/entertainment, and $300 savings contribution leaves a $1,750 monthly surplus.',
    faqs: [
      {
        q: 'Should I use gross or net income?',
        a: 'Use net (take-home) income — the amount deposited into your bank account after taxes and payroll deductions. Budgeting against gross income leads to overspending because you cannot spend money that never reaches your account.',
      },
      {
        q: 'What is the 50/30/20 rule?',
        a: 'A popular rule of thumb: 50% of take-home pay for needs (housing, food, utilities), 30% for wants (dining out, subscriptions, hobbies), and 20% for savings and debt repayment beyond minimums. It is a starting point, not a strict requirement.',
      },
      {
        q: 'How often should I revisit my budget?',
        a: 'Monthly at minimum. Compare what you planned to what you actually spent. Budgets that are never checked tend to drift away from reality within a few months.',
      },
    ],
    tips: [
      'Track your actual spending for one full month before building a budget — most people underestimate variable categories like dining out and subscriptions by 20-30%.',
      'Review recurring subscriptions every 3 months; forgotten subscriptions are one of the most common silent budget leaks.',
      'If your surplus is consistently negative, cut discretionary categories (entertainment, dining) before fixed ones (rent, insurance) — fixed costs are harder to change quickly.',
    ],
    calcType: 'budget',
  },
  {
    slug: 'net-worth-calculator',
    title: 'Net Worth Calculator',
    shortTitle: 'Net Worth',
    category: 'Personal Finance',
    metaDescription:
      'Calculate your net worth by subtracting total liabilities from total assets. Track your financial progress over time.',
    intro:
      'Net worth is the single most useful snapshot of your financial health. It measures what you own (assets) minus what you owe (liabilities). Calculating it regularly — quarterly or annually — shows whether your overall financial position is improving or deteriorating, even if month-to-month cash flow feels chaotic.',
    formulaExplanation:
      'Net Worth = Total Assets − Total Liabilities. Assets include cash and bank balances, investment accounts, retirement accounts, real estate market value, and vehicle market value. Liabilities include mortgage balance, auto loan balance, student loans, credit card balances, and any other debt. Use current market values for assets, not what you paid.',
    formulaSource: {
      label: 'Investopedia: Net Worth',
      url: 'https://www.investopedia.com/terms/n/networth.asp',
    },
    example:
      'Example: $8,000 checking/savings + $45,000 retirement account + $280,000 home value + $18,000 vehicle = $351,000 assets. Minus $210,000 mortgage + $12,000 auto loan + $28,000 student loans = $250,000 liabilities. Net worth: $101,000.',
    faqs: [
      {
        q: 'Should I include my car as an asset?',
        a: 'Yes, at its current market value (e.g., Kelley Blue Book private-party value), not what you paid for it. If you have an auto loan, include the remaining balance as a liability. The net of the two is the equity you actually hold.',
      },
      {
        q: 'My net worth is negative — is that unusual?',
        a: 'Very common, especially in your 20s and 30s when student loans and a new mortgage often outweigh accumulated savings. The important question is whether it is trending toward zero over time.',
      },
    ],
    tips: [
      'Track net worth on the same day each quarter (e.g., the 1st of January, April, July, October) so your comparisons over time are consistent.',
      'Use conservative, current market values for real estate and vehicles — inflating asset values makes your net worth look better than it really is and can lead to poor decisions.',
    ],
    calcType: 'netWorth',
  },
  {
    slug: 'emergency-fund-calculator',
    title: 'Emergency Fund Calculator',
    shortTitle: 'Emergency Fund',
    category: 'Savings',
    metaDescription:
      'Find out how large your emergency fund should be and how long it will take to build it at your current savings rate.',
    intro:
      'An emergency fund is cash set aside specifically for unexpected expenses — a job loss, medical bill, or major car repair — without resorting to high-interest debt. This calculator tells you your target amount (based on your monthly essential expenses) and how many months it will take to reach it.',
    formulaExplanation:
      'Target = Monthly Essential Expenses × Months of Coverage (typically 3–6). Months to Goal = (Target − Current Savings) / Monthly Contribution. Monthly essential expenses include housing, utilities, groceries, insurance, and minimum debt payments — discretionary spending like dining out is excluded because you would cut it in an emergency.',
    formulaSource: {
      label: 'CFPB: Building an emergency fund',
      url: 'https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/',
    },
    example:
      'Example: $2,800 in monthly essential expenses × 4 months = $11,200 target. You already have $1,500 saved. Adding $350/month: ($11,200 − $1,500) / $350 ≈ 27.7 months to reach the goal.',
    faqs: [
      {
        q: 'Is 3 months or 6 months of expenses the right target?',
        a: 'Three months works for dual-income households with stable employment. Six months is better for single-income households, self-employed individuals, or anyone in a specialized field where job searches take longer. Some financial advisors suggest up to 12 months for business owners.',
      },
      {
        q: 'Where should I keep my emergency fund?',
        a: 'In a high-yield savings account or money market account that is separate from your everyday checking account. You want it accessible within 1–2 business days but not so convenient that you dip into it for non-emergencies.',
      },
    ],
    tips: [
      'Build the fund in a high-yield savings account, not a checking account — you\'ll earn meaningful interest while keeping the money accessible within 1-2 days.',
      'Start with a smaller starter goal (e.g., $1,000) if the full 3-6 month target feels overwhelming — even a small buffer prevents most people from reaching for a credit card during a minor emergency.',
    ],
    calcType: 'emergencyFund',
  },
  {
    slug: 'inflation-calculator',
    title: 'Inflation Calculator',
    shortTitle: 'Inflation',
    category: 'Economics',
    metaDescription:
      'See how inflation erodes purchasing power over time. Enter a dollar amount and find out what it is worth in a future or past year.',
    intro:
      'Inflation reduces what a dollar can buy over time. This calculator shows how much a given amount of money in one year is equivalent to in another year, using a constant annual inflation rate. It is useful for comparing historical prices, projecting future costs, or understanding the real return on an investment.',
    formulaExplanation:
      'Future Value = Present Value × (1 + Inflation Rate)^Years. To find the past equivalent: Past Value = Future Value / (1 + Inflation Rate)^Years. The U.S. long-run average CPI inflation rate is roughly 3% per year, though it varies significantly by decade. You can enter any rate to model different scenarios.',
    formulaSource: {
      label: 'BLS: CPI Inflation Calculator methodology',
      url: 'https://www.bls.gov/data/inflation_calculator.htm',
    },
    example:
      'Example: $10,000 today at 3% average annual inflation will have the purchasing power of roughly $13,439 in 10 years — meaning you would need $13,439 in year 10 to buy what $10,000 buys today.',
    faqs: [
      {
        q: 'What inflation rate should I use?',
        a: 'The U.S. historical average is about 3% per year over the past century, though the 2010s averaged closer to 2% and 2021–2023 averaged above 5%. Use a conservative 3% for long-term planning and adjust for current conditions when projecting short-term costs.',
      },
      {
        q: 'How does this relate to investment returns?',
        a: 'Your real return is the nominal return minus inflation. A 7% investment return during a 3% inflation year produces a 4% real return. Inflation calculators help you check whether your savings are actually growing in purchasing power.',
      },
    ],
    tips: [
      'When comparing salaries or prices across different years, always inflation-adjust first — a raise that sounds large can actually be a pay cut in real purchasing power if inflation outpaced it.',
      'Use a higher inflation assumption (4-5%) for categories that have historically outpaced general inflation, like healthcare and college tuition, rather than the general 3% average.',
    ],
    calcType: 'inflation',
  },
  {
    slug: 'tip-calculator',
    title: 'Tip Calculator',
    shortTitle: 'Tip',
    category: 'Everyday Finance',
    metaDescription:
      'Calculate the tip amount, total bill, and per-person split for any restaurant or service. Supports custom tip percentages.',
    intro:
      'A tip calculator helps you quickly figure out the gratuity on a bill, the new total, and how to split it evenly when dining with others. It handles any tip percentage and any number of people.',
    formulaExplanation:
      'Tip Amount = Bill × Tip Percentage. Total = Bill + Tip Amount. Per Person = Total / Number of People. Common tip conventions in the U.S.: 15% for adequate service, 18–20% for good service, 20–25%+ for excellent service.',
    formulaSource: {
      label: 'Investopedia: How to calculate a tip',
      url: 'https://www.investopedia.com/financial-edge/0811/the-history-of-the-tip.aspx',
    },
    example:
      'Example: a $78.50 dinner bill at 20% tip = $15.70 tip, $94.20 total. Split four ways: $23.55 per person.',
    faqs: [
      {
        q: 'Should I tip on the pre-tax or post-tax amount?',
        a: 'Either is acceptable. Tipping on the pre-tax amount is technically more common in etiquette guides, but the difference on a typical bill is small and most people tip on the total shown. What matters more is leaving a fair amount for the quality of service.',
      },
      {
        q: 'Is it rude to split a tip unevenly?',
        a: 'Not at all — if one person ordered significantly more or received more service (a dedicated order, special accommodation), adjusting individual shares is reasonable. The server receives the total regardless of how the table divides it.',
      },
    ],
    tips: [
      'For large groups, check if the restaurant already added an automatic gratuity to the bill before adding your own tip on top — look for \'service charge included\' on the receipt.',
      'When splitting a bill unevenly, calculate each person\'s tip on their own subtotal rather than dividing an average tip evenly, so it stays fair to who ordered less.',
    ],
    calcType: 'tip',
  },
  {
    slug: 'savings-interest-calculator',
    title: 'Savings Account Interest Calculator',
    shortTitle: 'Savings Interest',
    category: 'Savings',
    metaDescription:
      'Calculate how much interest your savings account will earn over time with a given APY, including the effect of monthly deposits.',
    intro:
      'Most savings accounts compound interest daily or monthly and express their rate as an Annual Percentage Yield (APY). This calculator shows how your balance grows when you start with an initial deposit and optionally add money each month — letting you see the compounding effect clearly.',
    formulaExplanation:
      'For a lump-sum deposit: Balance = Principal × (1 + APY/12)^(Months). For regular monthly contributions added at the start of each period, the balance is the sum of the compounded lump sum and the future value of an annuity due. Interest Earned = Final Balance − (Principal + Total Contributions).',
    formulaSource: {
      label: 'FDIC: How savings account interest works',
      url: 'https://www.fdic.gov/resources/consumers/consumer-news/2023-06.html',
    },
    example:
      'Example: $5,000 initial deposit at 4.5% APY plus $200/month for 3 years (36 months) grows to roughly $14,086 — of which $1,886 is interest earned.',
    faqs: [
      {
        q: 'What is the difference between APR and APY?',
        a: 'APR (Annual Percentage Rate) is the stated rate before compounding. APY (Annual Percentage Yield) accounts for compounding within the year and is always equal to or higher than APR. For savings accounts, the advertised rate is almost always APY, which is what this calculator uses.',
      },
      {
        q: 'Are the interest earnings taxable?',
        a: 'Yes. Interest earned in a standard savings account is taxable as ordinary income in the year it is credited, even if you leave it in the account. High-yield savings in a Roth IRA are an exception — growth and qualified withdrawals are tax-free.',
      },
    ],
    tips: [
      'Compare APY, not APR, when shopping for savings accounts or CDs — APY already reflects compounding and is the true rate you\'ll earn.',
      'High-yield online savings accounts frequently offer 4-10x the APY of traditional big-bank savings accounts with the same FDIC protection — shop around before parking cash.',
    ],
    calcType: 'savingsInterest',
  },
  {
    slug: 'car-loan-calculator',
    title: 'Car Loan Calculator',
    shortTitle: 'Car Loan',
    category: 'Loans',
    metaDescription:
      'Calculate your monthly auto loan payment, total interest paid, and the full cost of financing a vehicle purchase.',
    intro:
      'An auto loan calculator helps you understand the true cost of financing a vehicle before you walk into a dealership. Enter the vehicle price, your down payment, the loan term, and the interest rate to see your monthly payment and total interest.',
    formulaExplanation:
      'Auto loans use the standard amortizing loan formula: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is the loan amount (price minus down payment and trade-in), r is the monthly interest rate (APR ÷ 12), and n is the number of monthly payments. The formula is identical to a personal loan; what differs is how lenders determine your rate (based heavily on credit score and loan-to-value ratio).',
    formulaSource: {
      label: 'CFPB: Auto loans',
      url: 'https://www.consumerfinance.gov/consumer-tools/auto-loans/',
    },
    example:
      'Example: a $28,000 vehicle with a $4,000 down payment leaves a $24,000 loan. At 6.9% APR over 60 months (5 years), the monthly payment is about $473.89 and total interest paid is roughly $4,433.',
    faqs: [
      {
        q: 'Does this include taxes, title, and dealer fees?',
        a: 'No. This calculator uses the loan principal you enter. In practice, sales tax, registration, title, and dealer documentation fees can add $1,000–$3,000+ to the amount financed. Add those to your vehicle price before calculating to see the full payment.',
      },
      {
        q: 'Is it better to put more money down?',
        a: 'Generally yes: a larger down payment reduces the loan amount, which lowers both the monthly payment and total interest. It also reduces the risk of being "underwater" (owing more than the car is worth) early in the loan, since new cars depreciate quickly in the first few years.',
      },
    ],
    tips: [
      'Get pre-approved financing from your bank or credit union before visiting the dealership — it gives you a real rate to compare against (or negotiate down) the dealer\'s financing offer.',
      'Avoid stretching the loan term past 60 months just to lower the payment — longer terms usually mean paying significantly more in total interest and a higher risk of owing more than the car is worth.',
      'Add estimated sales tax, registration, and dealer fees to the vehicle price before running the numbers here — they\'re usually rolled into the loan and increase your real monthly payment.',
    ],
    calcType: 'loan',
  },
  {
    slug: 'break-even-calculator',
    title: 'Break-Even Calculator',
    shortTitle: 'Break-Even',
    category: 'Business',
    metaDescription:
      'Find the sales volume at which your business covers its costs. Enter fixed costs, variable cost per unit, and price per unit.',
    intro:
      'The break-even point is the sales volume at which revenue exactly covers total costs — neither profit nor loss. Knowing it helps you price products, set sales targets, and understand how much cushion you have before a business becomes unprofitable.',
    formulaExplanation:
      'Break-Even Units = Fixed Costs / (Price per Unit − Variable Cost per Unit). The denominator is called the Contribution Margin per unit — the amount each sale contributes toward covering fixed costs. Once fixed costs are covered, each additional unit sold at that margin becomes profit.',
    formulaSource: {
      label: 'Investopedia: Break-Even Analysis',
      url: 'https://www.investopedia.com/terms/b/breakevenanalysis.asp',
    },
    example:
      'Example: $12,000 monthly fixed costs (rent, salaries, insurance), $8 variable cost per unit (materials, packaging), $20 selling price. Contribution margin = $12. Break-even = $12,000 / $12 = 1,000 units/month. Revenue at break-even: $20,000.',
    faqs: [
      {
        q: 'What counts as a fixed cost vs. a variable cost?',
        a: 'Fixed costs do not change with output: rent, salaries, insurance, software subscriptions. Variable costs scale directly with each unit produced or sold: raw materials, packaging, per-transaction fees, shipping. Some costs (utilities, overtime) are semi-variable and require judgment.',
      },
      {
        q: 'How does pricing affect the break-even point?',
        a: 'Price increases have a large impact: raising price by $2 in the example above grows the contribution margin from $12 to $14, cutting the break-even from 1,000 units to about 857 — an 14% reduction for a 10% price increase. This is why pricing is often more powerful than cost-cutting.',
      },
    ],
    tips: [
      'Re-run this calculation whenever your costs or pricing change — even a small increase in a supplier\'s price can shift your break-even point more than expected.',
      'Use the contribution margin (price minus variable cost) as a quick gut-check on any new product idea — a thin margin means you\'ll need very high volume to be profitable.',
    ],
    calcType: 'breakEven',
  },
  {
    slug: 'rule-of-72-calculator',
    title: 'Rule of 72 Calculator',
    shortTitle: 'Rule of 72',
    category: 'Investing',
    metaDescription:
      'Use the Rule of 72 to estimate how long it takes to double your money at a given interest rate — or find the rate needed to double in a target time.',
    intro:
      'The Rule of 72 is a mental math shortcut for compound growth: divide 72 by the annual return rate to get the approximate number of years needed to double an investment. It also works in reverse — divide 72 by the years to find the required rate. It is useful for quick comparisons without a calculator.',
    formulaExplanation:
      'Doubling Time (years) ≈ 72 / Annual Rate (%). Required Rate (%) ≈ 72 / Years to Double. The exact doubling time from compound interest is ln(2) / ln(1 + r), which equals about 69.3 / r for small r. The number 72 is used because it is close to 69.3 and has many integer divisors (2, 3, 4, 6, 8, 9, 12), making mental math easy.',
    formulaSource: {
      label: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    example:
      'Example: at a 6% annual return, 72 / 6 = 12 years to double. At 9%, 72 / 9 = 8 years. To double in 10 years, you need 72 / 10 = 7.2% annual return.',
    faqs: [
      {
        q: 'How accurate is the Rule of 72?',
        a: 'Very accurate for rates between 6% and 10%. At 8% the rule gives 9 years; the exact answer is 9.01 years — essentially perfect. At lower rates (2–3%) or higher rates (20%+) the error grows. For rates above 15%, a slightly more accurate divisor is 73 or 74.',
      },
      {
        q: 'Can I use it for inflation or debt?',
        a: 'Yes — the rule applies to any compound growth. At 4% inflation, prices double in about 72/4 = 18 years. At 24% APR credit card debt, the balance doubles in about 3 years if you make no payments.',
      },
    ],
    tips: [
      'Use this as a quick sanity check on investment pitches — if someone promises your money will double in 2 years, that implies a 36% annual return, which should raise serious red flags.',
      'The rule works both directions: use it to estimate how fast a high-interest debt (like credit card debt) will double if left unpaid, not just for investment growth.',
    ],
    calcType: 'ruleOf72',
  },
  {
    slug: 'hourly-to-salary-calculator',
    title: 'Hourly to Salary Calculator',
    shortTitle: 'Hourly to Salary',
    category: 'Income',
    metaDescription:
      'Convert an hourly wage to an annual salary — or an annual salary to an hourly rate. Supports custom hours per week.',
    intro:
      'Comparing job offers, evaluating a raise, or figuring out whether freelance rates are worth it often requires converting between hourly and annual pay. This calculator does the conversion in both directions and accounts for different weekly hour schedules.',
    formulaExplanation:
      'Annual Salary = Hourly Rate × Hours per Week × Weeks per Year. Standard: 40 hours/week × 52 weeks = 2,080 hours/year. Hourly Rate = Annual Salary / (Hours per Week × 52). Note: this gives gross (pre-tax) figures. Benefits like health insurance, retirement matching, and paid time off have real dollar value and are worth adding when comparing offers.',
    formulaSource: {
      label: 'BLS: Occupational Employment and Wage Statistics',
      url: 'https://www.bls.gov/oes/',
    },
    example:
      'Example: $22/hour × 40 hours/week × 52 weeks = $45,760 annual salary. Alternatively, a $75,000 salary working 40 hours/week = $75,000 / 2,080 = $36.06/hour.',
    faqs: [
      {
        q: 'Does this account for paid time off?',
        a: 'The standard 2,080-hour calculation assumes you are paid for all 52 weeks including vacation. If you work 50 weeks of actual hours but are paid for 52 (i.e., 2 weeks of paid vacation), the conversion is still correct — you earn the salary either way. If you are hourly without paid PTO, you may effectively work and be paid for fewer than 52 weeks.',
      },
      {
        q: 'How do I factor in taxes?',
        a: 'This calculator shows gross pay. To estimate net (take-home) pay, subtract federal and state income taxes, Social Security (6.2%), and Medicare (1.45%). A rough rule of thumb for a middle-income U.S. earner: take-home is about 70–75% of gross after all withholding.',
      },
    ],
    tips: [
      'Use this as a quick sanity check on investment pitches — if someone promises your money will double in 2 years, that implies a 36% annual return, which should raise serious red flags.',
      'The rule works both directions: use it to estimate how fast a high-interest debt (like credit card debt) will double if left unpaid, not just for investment growth.',
    ],
    calcType: 'hourlyToSalary',
  },
  {
    slug: 'dividend-yield-calculator',
    title: 'Dividend Yield Calculator',
    shortTitle: 'Dividend Yield',
    category: 'Investing',
    metaDescription: 'Calculate the dividend yield of any stock and estimate your annual and monthly dividend income based on shares owned.',
    intro: 'Dividend yield measures how much a company pays in dividends each year relative to its stock price. It is one of the most commonly used metrics for income investors comparing dividend-paying stocks. This calculator also shows your projected annual and monthly dividend income based on how many shares you own.',
    formulaExplanation: 'Dividend Yield (%) = (Annual Dividend per Share / Stock Price) × 100. Annual Income = Annual Dividend per Share × Number of Shares. Monthly Income = Annual Income / 12. The yield changes daily as the stock price fluctuates — a falling price increases the yield percentage, and a rising price decreases it, even if the dividend itself stays the same.',
    formulaSource: { label: 'Investopedia: Dividend Yield', url: 'https://www.investopedia.com/terms/d/dividendyield.asp' },
    example: 'Example: a stock trading at $50 that pays $2.50 in annual dividends per share has a dividend yield of 5.0%. Owning 100 shares produces $250 in annual dividend income, or about $20.83 per month.',
    faqs: [
      { q: 'Is a higher dividend yield always better?', a: 'Not necessarily. A very high yield (above 8-10%) can signal that the market expects the dividend to be cut, or that the stock price has fallen sharply due to underlying problems. Always check the payout ratio and earnings stability alongside the yield.' },
      { q: 'What is a good dividend yield?', a: 'Historically, dividend yields between 2% and 5% are considered solid for blue-chip stocks. Yields above 5% warrant extra scrutiny. Utilities and REITs often yield higher than the broader market due to their business models.' },
      { q: 'Do dividends reduce the stock price?', a: 'Yes. On the ex-dividend date, the stock price typically drops by approximately the dividend amount, because new buyers after that date do not receive the upcoming payment.' },
    ],
    tips: [
      'Check the company\'s payout ratio (dividends paid ÷ net income) alongside the yield — a payout ratio consistently above 80-90% is a warning sign the dividend may not be sustainable.',
      'Reinvesting dividends (DRIP) rather than taking them as cash meaningfully accelerates long-term compounding — model both scenarios if you\'re investing for decades, not income today.',
    ],
    calcType: 'dividendYield',
  },
  {
    slug: 'stock-return-calculator',
    title: 'Stock Return Calculator',
    shortTitle: 'Stock Return',
    category: 'Investing',
    metaDescription: 'Calculate total stock return including capital gains and dividends received. See your exact profit or loss on any stock position.',
    intro: 'A stock return calculator helps you measure the full return on a stock investment, combining price appreciation (or depreciation) with dividend income received. Total return is the most accurate way to compare investment performance across different types of stocks and time periods.',
    formulaExplanation: 'Capital Gain / Loss = (Sale Price - Purchase Price) × Number of Shares. Dividend Income = Dividends per Share × Number of Shares. Total Return ($) = Capital Gain + Dividend Income. Total Return (%) = (Sale Price - Purchase Price + Dividends per Share) / Purchase Price × 100. The percentage return is calculated per share so it reflects the true yield on the capital deployed.',
    formulaSource: { label: 'Investopedia: Total Return', url: 'https://www.investopedia.com/terms/t/totalreturn.asp' },
    example: 'Example: buying 50 shares at $100, receiving $3/share in dividends, and selling at $135 produces a $1,750 capital gain plus $150 in dividends = $1,900 total return, or 38% on the original $5,000 invested.',
    faqs: [
      { q: 'Does this account for taxes?', a: 'No. This calculator shows gross return before taxes. Capital gains taxes vary depending on your holding period (short-term vs. long-term) and income bracket. Dividends may be qualified or ordinary income. Consult a tax professional for your specific situation.' },
      { q: 'Should I include commissions?', a: 'Yes, if you paid trading commissions, subtract them from the sale proceeds or add them to the purchase cost for a more accurate net return. Most modern brokers charge zero commissions, but older trades may have fees worth including.' },
    ],
    tips: [
      'Always calculate total return (price change plus dividends), not just price change — for many dividend-paying stocks, dividends make up a large share of the real return over time.',
      'Keep a simple spreadsheet of purchase price, date, and commissions for each position — it makes accurate return calculations (and tax reporting) far easier at tax time.',
    ],
    calcType: 'stockReturn',
  },
  {
    slug: 'rent-vs-buy-calculator',
    title: 'Rent vs. Buy Calculator',
    shortTitle: 'Rent vs. Buy',
    category: 'Real Estate',
    metaDescription: 'Compare the true cost of renting vs. buying a home over any time horizon. Accounts for mortgage payments, equity, appreciation, taxes, and rent increases.',
    intro: 'The rent vs. buy decision is one of the biggest financial choices most people make. This calculator compares the net cost of buying a home (mortgage payments, taxes, insurance, maintenance, minus equity gained) against the cumulative cost of renting over the same period, accounting for home appreciation and annual rent increases.',
    formulaExplanation: 'Cost to Buy (net) = Total payments made (down payment + monthly PITI + maintenance) minus equity accumulated at the end of the period. Equity = Home value at sale - remaining mortgage balance. Cost to Rent = Sum of monthly rent payments over the period, with rent increasing by the annual rate each year. The lower net cost determines which option is cheaper over the chosen horizon.',
    formulaSource: { label: 'CFPB: Buying vs. renting a home', url: 'https://www.consumerfinance.gov/owning-a-home/process/prepare/' },
    example: 'Example: buying a $350,000 home with $70,000 down at 6.5% / 30 years vs. renting at $1,800/month (3% annual increase) over 7 years. If the home appreciates 3%/year, buying may be cheaper net of equity — but renting wins in the first 3-4 years when transaction costs dominate.',
    faqs: [
      { q: 'Why does buying sometimes lose in the short term?', a: 'Closing costs (typically 2-5% of the purchase price) are paid upfront and take years to recoup through equity building. If you sell within 2-3 years, renting is almost always cheaper when those costs are factored in.' },
      { q: 'What costs are not included?', a: 'This calculator omits closing costs, HOA dues, PMI (if applicable), tax deductions for mortgage interest, and the opportunity cost of the down payment invested elsewhere. Adding these would make the comparison more precise but also more complex.' },
    ],
    tips: [
      'Run the numbers at your actual expected time horizon, not an arbitrary one — the breakeven point between renting and buying is highly sensitive to how many years you expect to stay.',
      'Don\'t forget to account for the opportunity cost of your down payment — money used for a down payment could otherwise be invested, and that forgone growth is a real cost of buying.',
    ],
    calcType: 'rentVsBuy',
  },
  {
    slug: 'paycheck-calculator',
    title: 'Paycheck Calculator',
    shortTitle: 'Paycheck',
    category: 'Income',
    metaDescription: 'Estimate your net take-home pay after federal income tax, Social Security, Medicare, state tax, and 401(k) contributions for any salary.',
    intro: 'A paycheck calculator shows how much of your gross salary actually lands in your bank account after federal and state income taxes, Social Security, Medicare, and pre-tax retirement contributions are withheld. Understanding your take-home pay helps with budgeting and evaluating job offers.',
    formulaExplanation: 'Federal income tax is calculated using the 2024 marginal tax brackets for your filing status, applied to taxable income (gross minus pre-tax 401k contributions). Social Security is 6.2% of gross wages up to the annual wage base. Medicare is 1.45% of all wages. State income tax is applied at the flat rate you enter. Net pay = Gross - Federal tax - Social Security - Medicare - State tax - 401(k) contribution.',
    formulaSource: { label: 'IRS: Tax withholding estimator', url: 'https://www.irs.gov/individuals/tax-withholding-estimator' },
    example: 'Example: a $65,000 salary, single filer, 5% state tax, biweekly pay, 5% 401(k). Gross per paycheck: $2,500. After ~$340 federal tax, $155 Social Security, $36 Medicare, $119 state tax, and $125 401(k), estimated net take-home is roughly $1,725 per paycheck.',
    faqs: [
      { q: 'Why does this differ from my actual paycheck?', a: 'This calculator uses simplified 2024 federal brackets and a flat state rate. Your actual withholding depends on your W-4 elections (allowances, extra withholding), additional Medicare tax for high earners, local/city taxes, health insurance premiums, HSA contributions, and other deductions your employer may withhold.' },
      { q: 'What is the difference between pre-tax and post-tax 401(k) contributions?', a: 'Traditional 401(k) contributions are pre-tax — they reduce your taxable income now and grow tax-deferred. Roth 401(k) contributions are post-tax — no immediate tax benefit, but qualified withdrawals in retirement are tax-free. This calculator models traditional pre-tax contributions.' },
    ],
    tips: [
      'Review your W-4 withholding once a year, especially after a raise, marriage, or a new dependent — incorrect withholding is one of the most common reasons for a surprise tax bill or an interest-free loan to the government via a large refund.',
      'If you\'re consistently getting a large tax refund, consider adjusting your withholding to increase your take-home pay throughout the year instead — a refund is money you already earned, held interest-free until tax season.',
    ],
    calcType: 'paycheck',
  },
  {
    slug: 'debt-to-income-ratio-calculator',
    title: 'Debt-to-Income Ratio Calculator',
    shortTitle: 'DTI Ratio',
    category: 'Personal Finance',
    metaDescription: 'Calculate your debt-to-income (DTI) ratio to see if you qualify for a mortgage or loan. Understand what lenders look for and how to improve your DTI.',
    intro: 'Your debt-to-income (DTI) ratio is the percentage of your gross monthly income that goes toward debt payments. It is the single most important number lenders look at when deciding whether to approve a mortgage, auto loan, or personal loan — and at what interest rate.',
    formulaExplanation: 'DTI (%) = Total Monthly Debt Payments / Gross Monthly Income × 100. Lenders use two versions: the front-end ratio (housing costs only ÷ income) and the back-end ratio (all debt payments ÷ income). The back-end ratio is what most lenders emphasize. Conventional mortgages typically require a back-end DTI below 36-43%; FHA loans can allow up to 50%.',
    formulaSource: { label: 'CFPB: Debt-to-income ratio', url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/' },
    example: 'Example: $1,500 mortgage + $400 car + $300 student loan + $100 credit card minimums = $2,300 monthly debt on a $6,000 gross income = 38.3% DTI. This falls in the "acceptable" range but a lender may want it closer to 36%.',
    faqs: [
      { q: 'Does DTI affect my credit score?', a: 'Not directly — credit bureaus do not track your income, so DTI is not part of your credit score calculation. However, lenders pull both your credit report and calculate your DTI independently during the underwriting process.' },
      { q: 'How can I improve my DTI quickly?', a: 'The two levers are: (1) reduce debt — pay down balances and close installment loans, with the biggest DTI impact coming from eliminating a payment entirely rather than reducing it; and (2) increase income — a raise, second job, or freelance income lowers the ratio immediately.' },
    ],
    tips: [
      'Before applying for a mortgage, pay off or pay down the smallest installment loans first — eliminating an entire monthly payment lowers DTI more than partially paying down a larger balance.',
      'Avoid opening new credit accounts or making large purchases on credit in the months before applying for a major loan — new debt payments directly raise your DTI at the worst possible time.',
    ],
    calcType: 'debtToIncome',
  },
  {
    slug: 'college-savings-calculator',
    title: 'College Savings Calculator (529 Plan)',
    shortTitle: 'College Savings',
    category: 'Savings',
    metaDescription: 'Calculate how much you need to save monthly for college using a 529 plan. Accounts for tuition inflation, investment returns, and your current balance.',
    intro: 'College costs have historically risen about 4-6% per year — faster than general inflation. A 529 college savings plan lets your money grow tax-free when used for qualified education expenses. This calculator shows your target savings goal and the monthly contribution needed to reach it, given your time horizon and expected investment return.',
    formulaExplanation: 'Projected Total Cost = Annual Cost × (1 + Inflation Rate)^Years for each year of college, summed across the enrollment period. Future Value of Current Balance = Current Balance × (1 + Monthly Return)^Months. Monthly Contribution Needed = (Total Cost - FV of Current Balance) × Monthly Return / ((1 + Monthly Return)^Months - 1). The result is the level monthly contribution required assuming a constant return.',
    formulaSource: { label: 'SEC: Introduction to 529 Plans', url: 'https://www.sec.gov/reportspubs/investor-publications/investorpubsintro529htm.html' },
    example: 'Example: $30,000/year current tuition, 10 years until college, 4-year program, 5% annual tuition inflation, 6% expected return, $5,000 current balance. Projected total cost: ~$195,000. Required monthly contribution: ~$700.',
    faqs: [
      { q: 'What if I overshoot and save too much?', a: 'A 529 account can be transferred to another beneficiary (a sibling, cousin, or even yourself) with no tax penalty. Starting in 2024, unused 529 funds can also be rolled over to a Roth IRA for the beneficiary, subject to annual contribution limits and a 15-year account seasoning requirement.' },
      { q: 'Do 529 assets affect financial aid eligibility?', a: 'Yes, but modestly. A parent-owned 529 is assessed at a maximum rate of 5.64% in the FAFSA formula, compared to 20% for assets held directly in the student\'s name. Grandparent-owned 529 plans have no impact on FAFSA under rules that took effect for the 2024-2025 aid year.' },
    ],
    tips: [
      'Start contributions as early as possible — even a modest monthly amount from birth benefits enormously from 18 years of compounding versus starting when the child is already in middle school.',
      'Check whether your state offers a tax deduction or credit for 529 contributions — many states offer this, and it\'s an easy way to reduce the real cost of saving.',
    ],
    calcType: 'collegeSavings',
  },
  {
    slug: 'home-affordability-calculator',
    title: 'Home Affordability Calculator',
    shortTitle: 'Home Affordability',
    category: 'Real Estate',
    metaDescription: 'Find out how much house you can afford based on your income, debts, down payment, and mortgage rate using standard lender guidelines.',
    intro: 'Knowing your maximum affordable home price before you start shopping prevents disappointment and wasted time. This calculator uses the same front-end (28%) and back-end (36%) debt-to-income guidelines that conventional mortgage lenders apply to determine how much home your income and existing debts can support.',
    formulaExplanation: 'Lenders use two limits: (1) Front-end: monthly housing costs (P&I + taxes + insurance) cannot exceed 28% of gross monthly income. (2) Back-end: all monthly debt payments (housing + existing debts) cannot exceed 36% of gross monthly income. The binding constraint (whichever is lower) sets the maximum monthly housing payment. From that payment, we back-solve for the maximum home price given the mortgage rate, term, and property tax rate.',
    formulaSource: { label: 'CFPB: How much house can I afford?', url: 'https://www.consumerfinance.gov/ask-cfpb/how-much-of-my-income-should-i-spend-on-housing-en-1855/' },
    example: 'Example: $90,000 gross income, $500/month existing debts, $60,000 down payment, 6.5% APR / 30 years, 1.2% property tax rate. Estimated maximum home price: ~$380,000, with a total monthly payment of about $2,520.',
    faqs: [
      { q: 'Should I buy as much house as I can afford?', a: 'Most financial planners advise against it. Buying at the top of your qualification limit leaves no buffer for job changes, repairs, or unexpected expenses. A rule of thumb is to target a home price no more than 2.5-3x your annual gross income.' },
      { q: 'Does this include PMI?', a: 'No. If your down payment is less than 20% of the home price, lenders require private mortgage insurance (PMI), typically 0.5-1.5% of the loan amount per year. This adds $100-$300/month on a $300,000 loan and reduces how much home you can afford.' },
    ],
    tips: [
      'Treat the maximum affordable price this calculator shows as a ceiling, not a target — most financial planners recommend buying below your maximum qualification to leave room for savings, repairs, and life changes.',
      'Get a true sense of your monthly costs by adding estimated utilities, HOA dues, and maintenance (typically 1% of home value per year) on top of the mortgage payment shown here.',
    ],
    calcType: 'homeAffordability',
  },
  {
    slug: 'freelance-rate-calculator',
    title: 'Freelance Rate Calculator',
    shortTitle: 'Freelance Rate',
    category: 'Income',
    metaDescription: 'Calculate your minimum and recommended freelance hourly rate based on your desired income, expenses, taxes, and billable hours.',
    intro: 'Setting the right freelance rate is one of the hardest parts of self-employment. Charge too little and you cannot cover taxes and business costs; charge too much and you lose clients. This calculator works backward from your target take-home income to find the hourly rate that actually gets you there after taxes and expenses.',
    formulaExplanation: 'Gross Revenue Needed = (Desired Take-Home + Business Expenses) / (1 - Tax Rate). The tax rate for freelancers in the U.S. includes self-employment tax (15.3% on the first ~$160,000 of net self-employment income) plus federal and state income tax. Minimum Hourly Rate = Gross Revenue Needed / Total Billable Hours. Recommended Rate adds a buffer (typically 10-20%) for slow months, non-billable work, and scope creep.',
    formulaSource: { label: 'IRS: Self-employment tax', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes' },
    example: 'Example: $80,000 desired take-home, 30 billable hours/week × 48 weeks = 1,440 hours/year, $5,000 expenses, 30% combined tax rate, 15% buffer. Minimum rate: ~$59/hr. Recommended rate: ~$68/hr.',
    faqs: [
      { q: 'Why is my freelance rate so much higher than an equivalent employee salary?', a: 'As a freelancer you pay both the employee and employer halves of Social Security and Medicare (15.3% total vs. 7.65% for an employee), you have no paid vacation or sick days, you cover your own health insurance, and you spend non-billable hours on business administration. These add up to 30-50% above equivalent employee compensation.' },
      { q: 'Should I charge by the hour or by the project?', a: 'Project-based pricing is usually more profitable once you are experienced, because faster delivery increases your effective hourly rate. Fixed-fee projects also give clients a predictable cost, which reduces friction in closing deals. Track your actual hours per project to refine future estimates.' },
    ],
    tips: [
      'Revisit your rate at least once a year — rising business costs, more experience, and inflation all justify periodic increases, even with existing clients.',
      'Track your actual non-billable hours (admin, marketing, invoicing) for a month — most freelancers underestimate this time, which means their real effective hourly rate is lower than their quoted rate.',
    ],
    calcType: 'freelanceRate',
  },
];

export function getCalculatorBySlug(slug: string): Calculator | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}
