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
  const info = await mp.evaluate(() => {
    const triggers = [...document.querySelectorAll('a, div')].filter(el => el.textContent.trim() === 'Services');
    return triggers.map(el => {
      const r = el.getBoundingClientRect();
      return { tag: el.tagName, cls:(el.className||'').toString().slice(0,20), visible: el.offsetParent !== null, w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y) };
    });
  });
  console.log('Services elements:', JSON.stringify(info));
  await mp.evaluate(() => {
    const el = [...document.querySelectorAll('div')].find(e => e.textContent.trim() === 'Services' && e.offsetParent !== null);
    el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  });
  await new Promise(r => setTimeout(r, 700));
  const after = await mp.evaluate(() => {
    const els = [...document.querySelectorAll('a')].filter(a => a.offsetParent !== null && a.textContent.trim().length).map(a => a.textContent.trim());
    const svcEls = [...document.querySelectorAll('div')].filter(e => e.textContent.trim() === 'Services');
    return { links: els.slice(0, 20), servicesDivCount: svcEls.length };
  });
  console.log('after dispatch:', JSON.stringify(after));
  await browser.close();
})();
