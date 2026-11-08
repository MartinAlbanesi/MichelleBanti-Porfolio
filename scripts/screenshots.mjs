// Usage: node scripts/screenshots.mjs [selector] [url]
// Saves full-page (or one section) captures at phone/tablet/desktop widths to .screenshots/
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const selector = process.argv[2] ?? '';
const url = process.argv[3] ?? 'http://localhost:4321/';
const widths = (process.env.WIDTHS ?? '320,390,768,1280').split(',').map(Number);
const out = '.screenshots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
for (const width of widths) {
  const context = await browser.newContext({
    viewport: { width, height: width < 768 ? 800 : 900 },
    deviceScaleFactor: 1,
    hasTouch: width < 768,
    isMobile: width < 768,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  const name = `${out}/${selector.replace(/\W/g, '') || 'page'}-${width}.png`;
  if (selector) await page.locator(selector).first().screenshot({ path: name });
  else await page.screenshot({ path: name, fullPage: true });
  console.log(`${width}px  overflow=${overflow}px  ${name}`);
  await context.close();
}
await browser.close();
