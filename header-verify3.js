const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  const mp = await browser.newPage();
  await mp.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mp.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
  const visibleLinks = () => mp.evaluate(() =>
    [...document.querySelectorAll('a')].filter(a => a.offsetParent !== null && a.textContent.trim().length).map(a => a.textContent.trim()));
  await mp.evaluate(() => { document.querySelector('header svg').closest('div').click(); });
  await new Promise(r => setTimeout(r, 800));
  console.log('VISIBLE before Services tap:', JSON.stringify(await visibleLinks()));
  await mp.evaluate(() => {
    const els = [...document.querySelectorAll('a, div')];
    const svc = els.find(el => el.textContent.trim() === 'Services' && el.offsetParent !== null);
    svc.click();
  });
  await new Promise(r => setTimeout(r, 600));
  console.log('VISIBLE after Services tap:', JSON.stringify(await visibleLinks()));
  await browser.close();
})();
