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
  const drawerLinks = () => mp.evaluate(() =>
    [...document.querySelectorAll('a')].filter(a => a.offsetParent !== null && a.textContent.trim().length && a.closest('[class]') && a.closest('body > div')).map(a => a.textContent.trim()).filter(t => /HOME|SERVICES|CASES|INSIGHTS|FAQ|CONTACT|Mobile|Web|UI\/UX|Server|Maintenance|Get a Quote/i.test(t)));
  console.log('drawer before:', JSON.stringify(await drawerLinks()));
  await mp.evaluate(() => {
    const el = [...document.querySelectorAll('div')].find(e => e.textContent.trim() === 'SERVICES' && e.offsetParent !== null);
    if (el) el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  });
  await new Promise(r => setTimeout(r, 700));
  console.log('drawer after:', JSON.stringify(await drawerLinks()));
  await browser.close();
})();
