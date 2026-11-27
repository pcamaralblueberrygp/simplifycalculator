import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://simplifycalculator.com';

// Cloudflare Pages serves every page at /path/ and 308-redirects /path to it.
// Add the trailing slash to internal page links in the built HTML so crawlers
// and visitors never hit that redirect. Links to files (with an extension),
// anchors and query strings are left alone.
function trailingSlashLinks() {
  const fix = (html) =>
    html.replace(
      /href="((?:https:\/\/simplifycalculator\.com)?\/[^"#?]*?)([#?][^"]*)?"/g,
      (match, path, rest = '') => {
        if (path.endsWith('/') || /\.[a-z0-9]+$/i.test(path)) return match;
        return `href="${path}/${rest}"`;
      },
    );
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) await walk(p);
      else if (entry.name.endsWith('.html')) {
        const html = await readFile(p, 'utf8');
        const out = fix(html);
        if (out !== html) await writeFile(p, out);
      }
    }
  }
  return {
    name: 'trailing-slash-links',
    hooks: {
      'astro:build:done': async ({ dir }) => walk(fileURLToPath(dir)),
    },
  };
}

export default defineConfig({
  site: SITE_URL,
  build: {
    format: 'directory',
  },
  integrations: [trailingSlashLinks()],
});
