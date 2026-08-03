const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  const mp = await browser.newPage();
  await mp.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mp.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
  // open drawer
  await mp.evaluate(() => {
    const icon = document.querySelector('header svg');
    icon.closest('div').click();
  });
  await new Promise(r => setTimeout(r, 800));
  const before = await mp.evaluate(() => [...document.querySelectorAll('a')].filter(a => a.textContent.trim().length).map(a => a.textContent.trim()));
  console.log('MOBILE DRAWER LINKS (before Services tap):', JSON.stringify(before));
  const tapped = await mp.evaluate(() => {
    const els = [...document.querySelectorAll('a, div')];
    const svc = els.find(el => el.textContent.trim() === 'Services' && el.offsetParent !== null);
    if (svc) { svc.click(); return true; }
    return false;
  });
  await new Promise(r => setTimeout(r, 600));
  const after = await mp.evaluate(() => [...document.querySelectorAll('a')].filter(a => a.textContent.trim().length).map(a => a.textContent.trim()));
  console.log('MOBILE DRAWER LINKS (after Services tap):', JSON.stringify(after));
  await browser.close();
})();
