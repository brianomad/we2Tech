const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox','--disable-gpu'] });
  for (const p of ['/zh','/zh-cn','/contact','/zh/contact','/cases','/zh/cases','/blog','/faq','/zh/faq']) {
    const page = await browser.newPage();
    await page.setViewport({ width: 360, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    try {
      await page.goto('http://localhost:3777'+p, { waitUntil: 'networkidle0', timeout: 60000 });
    } catch(e) { console.log(p, 'LOAD ERR'); await page.close(); continue; }
    const m = await page.evaluate(() => {
      const doc = document.documentElement;
      const footer = document.querySelector('footer');
      const clipped = [];
      footer.querySelectorAll('*').forEach((el) => {
        if (el.scrollWidth > el.clientWidth + 1) {
          const r = el.getBoundingClientRect();
          clipped.push({ tag: el.tagName, cls:(el.className||'').toString().slice(0,26), text:(el.textContent||'').trim().slice(0,36), cw:el.clientWidth, sw:el.scrollWidth, right:Math.round(r.right) });
        }
      });
      return { hOverflow: doc.scrollWidth > doc.clientWidth, clipped: clipped.slice(0,6) };
    });
    console.log(p, JSON.stringify(m));
    await page.close();
  }
  await browser.close();
})();
