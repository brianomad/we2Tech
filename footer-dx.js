const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  for (const w of [320, 360, 390]) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
    const m = await page.evaluate(() => {
      const doc = document.documentElement;
      const footer = document.querySelector('footer');
      const clipped = [];
      footer.querySelectorAll('*').forEach((el) => {
        if (el.scrollWidth > el.clientWidth + 1) {
          const r = el.getBoundingClientRect();
          clipped.push({
            tag: el.tagName,
            cls: (el.className||'').toString().slice(0,28),
            text: (el.textContent||'').trim().slice(0,40),
            cw: el.clientWidth, sw: el.scrollWidth,
            left: Math.round(r.left), right: Math.round(r.right),
            overflow: getComputedStyle(el).overflow,
            whiteSpace: getComputedStyle(el).whiteSpace,
            wordBreak: getComputedStyle(el).wordBreak,
          });
        }
      });
      const texts = [];
      footer.querySelectorAll('p,span,div,a,h4,h3').forEach((el) => {
        const s = getComputedStyle(el);
        if (s.whiteSpace === 'nowrap' || s.overflow === 'hidden' || s.overflow === 'clip') {
          const r = el.getBoundingClientRect();
          if (r.width > 0) texts.push({ cls:(el.className||'').toString().slice(0,28), tag: el.tagName, text:(el.textContent||'').trim().slice(0,40), ws:s.whiteSpace, ov:s.overflow, w:Math.round(r.width) });
        }
      });
      return { docW: doc.clientWidth, docScrollW: doc.scrollWidth, clipped: clipped.slice(0,8), constrained: texts.slice(0,10) };
    });
    console.log('WIDTH ' + w + ': ' + JSON.stringify(m));
    await page.close();
  }
  await browser.close();
})();
