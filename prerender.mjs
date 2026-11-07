import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, 'dist');
const SERVER_ENTRY = path.resolve(DIST_DIR, 'server', 'entry-server.js');

const routes = [
  '/',
  '/about-us/',
  '/contact-us/',
  '/contact/',
  '/gallery/',
  '/blogs/',
  '/privacy-policy/',
  '/terms-conditions/',
  '/services/',
  '/corporate-events/',
  '/rentals/',
  '/event-management-company/',
  '/event-organizers/',
  '/services/exhibition-stand-design-abu-dhabi/',
  '/services/corporate-gala-events-abu-dhabi/',
  '/services/product-launch-events-abu-dhabi/',
  '/services/corporate-conference-organizer-abu-dhabi/',
  '/services/brand-activation-agency-abu-dhabi/',
  '/services/theme-decoration-private-events-abu-dhabi/',
  '/services/private-celebrations-abu-dhabi/',
  '/how-to-design-the-best-creative-event-concept/',
  '/the-complete-corporate-event-planning-checklist-for-the-uae-2026/',
  '/how-to-choose-the-right-event-management-companies/',
  '/blog/',
  '/blog/exhibition-stand-design-companies-dubai/',
  '/blog/corporate-event-food-station-packages/',
  '/blog/outdoor-event-rentals-abu-dhabi-open-air-venues/'
];

const skipClientBuild = process.argv.includes('--skip-client-build');

async function prerender() {
  if (!skipClientBuild) {
    console.log('Building Vite client bundle...');
    execSync('npx vite build', { stdio: 'inherit' });
  }

  console.log('Building Vite server (SSR) bundle...');
  execSync('npx vite build --ssr src/entry-server.jsx --outDir dist/server', {
    env: { ...process.env, VITE_SSR_BUILD: 'true' },
    stdio: 'inherit'
  });

  console.log('Loading SSR bundle...');
  const { render } = await import(`file://${SERVER_ENTRY}`);
  
  let rawTemplate = await fs.readFile(path.join(DIST_DIR, 'index.html'), 'utf-8');
  // Strip any pre-existing SSR head tags and body content to obtain clean template shell
  const template = rawTemplate
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+name=["']description["'][\s\S]*?>/gi, '')
    .replace(/<link\s+rel=["']canonical["'][\s\S]*?>/gi, '')
    .replace(/<div\s+id="?root"?\s*>[\s\S]*<\/div>\s*<\/body>/i, '<div id="root"></div></body>');

  for (const route of routes) {
    console.log(`Prerendering route (SSR): ${route}`);
    
    const helmetContext = {};
    const { html } = render(route, helmetContext);
    const { helmet } = helmetContext;

    // Build the injected head tags
    let headTags = '';
    if (helmet) {
      headTags += helmet.title.toString() + '\n';
      headTags += helmet.meta.toString() + '\n';
      headTags += helmet.link.toString() + '\n';
      headTags += helmet.script.toString() + '\n';
    }

    let renderedHtml = html;
    if (route === '/privacy-policy/' || route === '/terms-conditions/') {
      // In React 19 SSR, document metadata (<title>, <meta>, <link>) is rendered into body/root HTML.
      // Move metadata elements into <head> so SEO meta description is in the initial server-rendered HTML head.
      const extracted = [];
      const titleMatch = renderedHtml.match(/<title[^>]*>[\s\S]*?<\/title>/i);
      if (titleMatch) {
        extracted.push(titleMatch[0]);
        renderedHtml = renderedHtml.replace(titleMatch[0], '');
      }
      const metaMatches = renderedHtml.match(/<meta[^>]*>/gi) || [];
      for (const m of metaMatches) {
        extracted.push(m);
        renderedHtml = renderedHtml.replace(m, '');
      }
      const canonicalMatch = renderedHtml.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);
      if (canonicalMatch) {
        extracted.push(canonicalMatch[0]);
        renderedHtml = renderedHtml.replace(canonicalMatch[0], '');
      }
      if (extracted.length > 0) {
        headTags = extracted.join('\n') + '\n';
      }
    }

    // Insert head tags before </head> and body HTML inside <div id="root"></div>
    let pageHtml = template;
    if (/<!-- SEO Meta Tags.*-->/i.test(template)) {
      pageHtml = template.replace(/<!-- SEO Meta Tags.*-->/i, headTags);
    } else {
      pageHtml = template.replace('</head>', `${headTags}\n</head>`);
    }
    pageHtml = pageHtml.replace(/<div\s+id="?root"?\s*><\/div>/i, `<div id="root">${renderedHtml}</div>`);

    // Determine target output file path
    let filePath = path.join(DIST_DIR, route);
    if (route === '/') {
      filePath = path.join(DIST_DIR, 'index.html');
    } else {
      if (!filePath.endsWith('.html')) {
        await fs.mkdir(filePath, { recursive: true });
        filePath = path.join(filePath, 'index.html');
      }
    }

    await fs.writeFile(filePath, pageHtml, 'utf-8');
    console.log(`Saved pre-rendered HTML to ${filePath}`);
  }

  // Clean up the server bundle so we don't deploy unnecessary server scripts to Vercel static hosting
  console.log('Cleaning up server directory...');
  await fs.rm(path.join(DIST_DIR, 'server'), { recursive: true, force: true });
  
  console.log('Prerendering completed successfully.');
}

prerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
