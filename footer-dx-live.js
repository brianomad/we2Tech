const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  for (const w of [320, 375, 390]) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 700, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    try {
      await page.goto('https://we2tech.pro/', { waitUntil: 'networkidle0', timeout: 60000 });
    } catch(e) { console.log('W' + w, 'LOAD ERR', e.message.slice(0,80)); await page.close(); continue; }
    const m = await page.evaluate(() => {
      const doc = document.documentElement;
      const footer = document.querySelector('footer');
      const clipped = [];
      footer.querySelectorAll('*').forEach((el) => {
        if (el.scrollWidth > el.clientWidth + 1) {
          const r = el.getBoundingClientRect();
          clipped.push({ tag: el.tagName, cls:(el.className||'').toString().slice(0,26), text:(el.textContent||'').trim().slice(0,46), cw:el.clientWidth, sw:el.scrollWidth, right:Math.round(r.right), left:Math.round(r.left) });
        }
      });
      const texts = [];
      footer.querySelectorAll('p,span,a,h4,h3').forEach((el) => {
        const s = getComputedStyle(el);
        if (s.whiteSpace === 'nowrap' || s.textOverflow === 'ellipsis') {
          texts.push({ cls:(el.className||'').toString().slice(0,26), text:(el.textContent||'').trim().slice(0,30), ws:s.whiteSpace, to:s.textOverflow });
        }
      });
      return { hOverflow: doc.scrollWidth > doc.clientWidth, clipped, constrained: texts.slice(0,8) };
    });
    console.log('LIVE W' + w, JSON.stringify(m, null, 1));
    await page.close();
  }
  await browser.close();
})();
