const puppeteer = require('puppeteer');
//const cron = require('node-cron');

const horarioDeEnvio = '0 16 * * *';

const caminhoDaFigurinha = 'C:/Users/gtrec/Desktop/botWorkshop/002_Arrumatronic2000/src/figurinha.png';

async function lancaFigurinha() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com');
    
    await page.waitForSelector('#side .copyable-text.selectable-text');
    await page.click('#side .copyable-text.selectable-text');
    await page.keyboard.type('Anotações');
    await page.keyboard.press('Enter');
    /*
    await page.waitForSelector('.matched-text.chat-body');
    await page.click('.pluggable-input-body');
    await page.waitForSelector('.emoji-button');
    await page.waitForSelector(`img[src="${caminhoDaFigurinha}"]`);
    await page.click(`img[src="${caminhoDaFigurinha}"]`);
    await page.keyboard.press("Enter");
    * */
}

lancaFigurinha();

