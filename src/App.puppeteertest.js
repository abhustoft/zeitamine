const puppeteer = require('puppeteer');

test('First test', async () =>{
    let browser = await puppeteer.launch({
        headless: false,
    });

    let page = await browser.newPage();

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.App-title');

    const html = await page.$eval('.App-title', e => e.innerHTML);
    expect(html).toBe('Welcome to React');

    browser.close();

}, 16000);