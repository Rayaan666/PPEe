import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const DIST_DIR = path.resolve(__dirname, 'dist');

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

async function startServer() {
  const app = express();
  
  // Create a clean base HTML file for fallback to prevent leaking prerendered index.html data
  await fs.copyFile(path.join(DIST_DIR, 'index.html'), path.join(DIST_DIR, 'base.html'));

  // Serve static files from dist
  app.use(express.static(DIST_DIR));
  
  // Fallback to clean base.html for SPA routing
  app.use((req, res, next) => {
    res.sendFile(path.join(DIST_DIR, 'base.html'));
  });

  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting local server for prerendering...');
  const server = await startServer();
  
  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Optional: Block analytics or external resources to speed up rendering
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const resourceType = req.resourceType();
    if (['image', 'media'].includes(resourceType)) {
      req.abort(); // Abort heavy assets to speed up
    } else {
      req.continue();
    }
  });

  for (const route of routes) {
    console.log(`Prerendering route: ${route}`);
    const url = `http://localhost:${PORT}${route}`;
    
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
      // wait extra 1s for helmet
      await new Promise(r => setTimeout(r, 1000));
    } catch (e) {
      console.log(`Timeout or error on ${route}, saving current DOM anyway...`);
    }
    
    // Evaluate to remove any temporary injection artifacts if necessary, or let helmet hydrate
    const html = await page.content();
    
    // Determine file path
    let filePath = path.join(DIST_DIR, route);
    if (route === '/') {
      filePath = path.join(DIST_DIR, 'index.html');
    } else {
      if (!filePath.endsWith('.html')) {
        await fs.mkdir(filePath, { recursive: true });
        filePath = path.join(filePath, 'index.html');
      }
    }
    
    await fs.writeFile(filePath, html, 'utf-8');
    console.log(`Saved ${filePath}`);
  }

  await browser.close();
  
  return new Promise((resolve) => {
    server.close(() => {
      console.log('Prerendering complete. Server shut down.');
      resolve();
    });
  });
}

prerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
