const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  const mp = await browser.newPage();
  await mp.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mp.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
  const openDrawer = async () => {
    const pos = await mp.evaluate(() => {
      const svg = [...document.querySelectorAll('header svg')].find(s => s.getBoundingClientRect().width > 0);
      const r = svg.getBoundingClientRect();
      return { x: r.x + r.width/2, y: r.y + r.height/2 };
    });
    await mp.mouse.click(pos.x, pos.y);
    await new Promise(r => setTimeout(r, 1000));
  };
  const visibleLinks = () => mp.evaluate(() =>
    [...document.querySelectorAll('a')].filter(a => a.offsetParent !== null && a.textContent.trim().length).map(a => a.textContent.trim()));
  await openDrawer();
  console.log('DRAWER OPEN - visible:', JSON.stringify(await visibleLinks()));
  await mp.evaluate(() => {
    const els = [...document.querySelectorAll('a, div')];
    const svc = els.find(el => el.textContent.trim() === 'Services' && el.offsetParent !== null);
    if (svc) svc.click();
  });
  await new Promise(r => setTimeout(r, 700));
  console.log('AFTER Services tap - visible:', JSON.stringify(await visibleLinks()));
  await browser.close();
})();
