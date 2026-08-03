const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  // Desktop: check no ::after underline on nav links, services dropdown exists
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
  const desktop = await page.evaluate(() => {
    const nav = document.querySelector('header nav');
    const links = [...nav.querySelectorAll('a')];
    const underlines = links.filter(a => getComputedStyle(a, '::after').content !== 'none' && getComputedStyle(a, '::after').content !== 'normal');
    const hasServices = [...nav.querySelectorAll('a,div')].some(el => el.textContent.trim().startsWith('Services'));
    return { navLinkCount: links.length, underlines: underlines.map(a => a.textContent.trim()) };
  });
  console.log('DESKTOP:', JSON.stringify(desktop));

  // Mobile: open drawer, click Services, check submenu items appear under it
  const mp = await browser.newPage();
  await mp.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mp.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
  const mobileBefore = await mp.evaluate(() => {
    const menu = document.querySelector('[aria-label="menu"]');
    return !!menu;
  });
  // open drawer via the hamburger handler
  await mp.tap('div[role="button"]');
  await new Promise(r => setTimeout(r, 800));
  const before = await mp.evaluate(() => {
    const menu = document.querySelector('body');
    const els = [...menu.querySelectorAll('a')].filter(a => a.textContent.trim().length).map(a => a.textContent.trim());
    return els;
  });
  console.log('MOBILE DRAWER LINKS (before services tap):', JSON.stringify(before));
  // tap the Services trigger (text 'Services')
  const tapped = await mp.evaluate(() => {
    const els = [...document.querySelectorAll('a, div')];
    const svc = els.find(el => el.textContent.trim() === 'Services' && el.offsetParent !== null);
    if (svc) { svc.click(); return true; }
    return false;
  });
  await new Promise(r => setTimeout(r, 600));
  const after = await mp.evaluate(() => {
    const els = [...document.querySelectorAll('a')].filter(a => a.textContent.trim().length).map(a => a.textContent.trim());
    return els;
  });
  console.log('MOBILE DRAWER LINKS (after Services tap):', JSON.stringify(after));
  await browser.close();
})();
