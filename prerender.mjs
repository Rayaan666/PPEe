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
  '/how-to-design-the-best-creative-event-concept/',
  '/the-complete-corporate-event-planning-checklist-for-the-uae-2026/',
  '/how-to-choose-the-right-event-management-companies/'
];

async function prerender() {
  console.log('Building Vite client bundle...');
  execSync('npx vite build', { stdio: 'inherit' });

  console.log('Building Vite server (SSR) bundle...');
  execSync('npx vite build --ssr src/entry-server.jsx --outDir dist/server', { stdio: 'inherit' });

  console.log('Loading SSR bundle...');
  const { render } = await import(`file://${SERVER_ENTRY}`);
  
  const template = await fs.readFile(path.join(DIST_DIR, 'index.html'), 'utf-8');

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

    // Insert head tags before </head> and body HTML inside <div id="root"></div>
    let pageHtml = template.replace('<!-- SEO Meta Tags are managed dynamically by React Helmet Async and Prerendering -->', headTags);
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

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
