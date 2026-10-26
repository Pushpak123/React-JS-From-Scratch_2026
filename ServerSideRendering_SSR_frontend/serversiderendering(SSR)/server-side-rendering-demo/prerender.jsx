
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const distFolder = path.join(__dirname, 'build');

const routes = ['/'];

(async () => {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true
    });

    const page = await browser.newPage();

    for (const route of routes) {
      const url = `http://localhost:3000${route}`;

      await page.goto(url, {
        waitUntil: 'networkidle0'
      });

      const html = await page.content();

      const filePath =
        route === '/'
          ? path.join(distFolder, 'index.html')
          : path.join(distFolder, route, 'index.html');

      fs.mkdirSync(path.dirname(filePath), {
        recursive: true
      });

      fs.writeFileSync(filePath, html);

      console.log(`Pre-rendered: ${route}`);
    }
  } catch (error) {
    console.error('Prerendering failed:', error);
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
