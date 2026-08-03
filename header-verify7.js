const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  const mp = await browser.newPage();
  await mp.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mp.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
  const pos = await mp.evaluate(() => {
    const svg = [...document.querySelectorAll('header svg')].find(s => s.getBoundingClientRect().width > 0);
    const r = svg.getBoundingClientRect();
    return { x: r.x + r.width/2, y: r.y + r.height/2 };
  });
  await mp.mouse.click(pos.x, pos.y);
  await new Promise(r => setTimeout(r, 1000));
  // find trigger coords
  const tpos = await mp.evaluate(() => {
    const el = [...document.querySelectorAll('div')].find(e => e.textContent.trim() === 'SERVICES' && e.offsetParent !== null);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.x + r.width/2, y: r.y + r.height/2 };
  });
  console.log('trigger pos:', JSON.stringify(tpos));
  if (tpos) { await mp.mouse.click(tpos.x, tpos.y); }
  await new Promise(r => setTimeout(r, 700));
  const after = await mp.evaluate(() => {
    const all = [...document.querySelectorAll('a')].filter(a => a.textContent.trim().length && a.offsetParent !== null).map(a => a.textContent.trim());
    const menu = [...document.querySelectorAll('div')].find(e => e.textContent.trim() === 'SERVICES' && e.offsetParent !== null);
    // count service-name links that are NOT in the footer (footer links have teal background ancestor)
    const inDrawer = [...document.querySelectorAll('a')].filter(a => a.textContent.trim() === 'Mobile App Development' && a.offsetParent !== null).length;
    return { serviceLinkCount: inDrawer, hasCaret: !!menu };
  });
  console.log('after real click:', JSON.stringify(after));
  await browser.close();
})();
