const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  const mp = await browser.newPage();
  await mp.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mp.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
  const grab = async () => {
    const pos = await mp.evaluate(() => { const svg = [...document.querySelectorAll('header svg')].find(s => s.getBoundingClientRect().width > 0); const r = svg.getBoundingClientRect(); return { x: r.x + r.width/2, y: r.y + r.height/2 }; });
    await mp.mouse.click(pos.x, pos.y);
    await new Promise(r => setTimeout(r, 1000));
  };
  const drawerLinks = () => mp.evaluate(() => {
    const inDrawer = (el) => { let n = el.parentElement; while (n) { if (n.getAttribute && n.getAttribute('data-testid') === 'drawer') return true; n = n.parentElement; } return false; };
    // identify rc-drawer container by class
    const links = [...document.querySelectorAll('a')].filter(a => a.textContent.trim().length && a.offsetParent !== null);
    return links.map(a => a.textContent.trim());
  });
  await grab();
  console.log('BEFORE:', JSON.stringify(await drawerLinks()));
  const tpos = await mp.evaluate(() => {
    const el = [...document.querySelectorAll('div')].find(e => e.textContent.trim() === 'SERVICES' && e.offsetParent !== null);
    if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.x + r.width/2, y: r.y + r.height/2 };
  });
  await mp.mouse.click(tpos.x, tpos.y);
  await new Promise(r => setTimeout(r, 700));
  console.log('AFTER :', JSON.stringify(await drawerLinks()));
  await browser.close();
})();
