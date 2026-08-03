const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  for (const w of [280, 320]) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 700, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:3777/', { waitUntil: 'networkidle0', timeout: 60000 });
    const m = await page.evaluate(() => {
      const doc = document.documentElement;
      const footer = document.querySelector('footer');
      const clipped = [];
      footer.querySelectorAll('*').forEach((el) => {
        if (el.scrollWidth > el.clientWidth + 1) {
          const r = el.getBoundingClientRect();
          clipped.push({ tag: el.tagName, cls:(el.className||'').toString().slice(0,24), text:(el.textContent||'').trim().slice(0,42), cw:el.clientWidth, sw:el.scrollWidth });
        }
      });
      return { hOverflow: doc.scrollWidth > doc.clientWidth, clipped };
    });
    console.log('WIDTH ' + w, JSON.stringify(m, null, 1));
    await page.close();
  }
  await browser.close();
})();
