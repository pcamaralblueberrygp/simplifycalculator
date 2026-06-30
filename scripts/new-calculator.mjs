#!/usr/bin/env node
// Interactive helper for adding a new calculator page to the data file.
// Run with: npm run new:calculator
//
// This only handles calculators that reuse an EXISTING calcType (existing
// math/component). If you need a brand-new type of math, create the new
// component in src/components/calculators/, register it in the componentMap
// inside src/pages/calculators/[slug].astro, and add it to CALC_TYPES below.

import { createInterface } from 'node:readline';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, '..', 'src', 'data', 'calculators.ts');

const CALC_TYPES = [
  'loan',
  'mortgage',
  'compoundInterest',
  'simpleInterest',
  'roi',
  'savingsGoal',
  'debtPayoff',
  'retirement',
  'amortization',
  'creditCardPayoff',
];

const rl = createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function main() {
  console.log('--- New calculator page ---');
  const title = await ask('Page title (e.g. "Auto Loan Refinance Calculator"): ');
  const shortTitle = await ask('Short title for nav/cards (e.g. "Auto Refinance"): ');
  const category = await ask('Category (e.g. "Loans", "Investing", "Debt", "Retirement"): ');
  const metaDescription = await ask('Meta description (~150 chars, for Google + SEO): ');
  const intro = await ask('Intro paragraph (1-2 sentences shown under the H1): ');
  const formulaExplanation = await ask('Formula explanation (how the math works): ');
  const example = await ask('Worked example (with real numbers): ');

  console.log(`\nAvailable calcType values (reuse existing math): ${CALC_TYPES.join(', ')}`);
  let calcType = await ask('calcType to reuse: ');
  while (!CALC_TYPES.includes(calcType)) {
    calcType = await ask(`Not recognized. Choose one of: ${CALC_TYPES.join(', ')}\n> `);
  }

  const faqs = [];
  console.log('\nAdd FAQs (2-3 recommended). Leave question blank to stop.');
  for (let i = 0; i < 5; i++) {
    const q = await ask(`FAQ ${i + 1} question: `);
    if (!q.trim()) break;
    const a = await ask(`FAQ ${i + 1} answer: `);
    faqs.push({ q, a });
  }

  const slug = slugify(shortTitle || title);

  const entry = `  {
    slug: '${slug}',
    title: ${JSON.stringify(title)},
    shortTitle: ${JSON.stringify(shortTitle)},
    category: ${JSON.stringify(category)},
    metaDescription: ${JSON.stringify(metaDescription)},
    intro: ${JSON.stringify(intro)},
    formulaExplanation: ${JSON.stringify(formulaExplanation)},
    example: ${JSON.stringify(example)},
    faqs: ${JSON.stringify(faqs, null, 2).replace(/\n/g, '\n    ')},
    calcType: '${calcType}',
  },
`;

  const source = readFileSync(DATA_FILE, 'utf-8');
  const marker = '\n];\n';
  const idx = source.indexOf(marker);
  if (idx === -1) {
    console.error('Could not find the CALCULATORS array closing bracket. Add the entry manually.');
    process.exit(1);
  }
  const updated = source.slice(0, idx) + entry + source.slice(idx);
  writeFileSync(DATA_FILE, updated, 'utf-8');

  console.log(`\nAdded "${title}" at slug /calculators/${slug}`);
  console.log('Run "npm run build" to confirm it compiles, then commit and push.');
  rl.close();
}

main();
