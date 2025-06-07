const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
require('dotenv').config();

class CustomWorld extends World {
  async openBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);