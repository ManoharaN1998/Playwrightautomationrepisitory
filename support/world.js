import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from '@playwright/test';
import logger from './logger.js';
import config from '../config/env.config.js';

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.logger = logger;
    this.config = config;
    this.testName = '';
  }

  async launchBrowser() {
    const browserName = process.env.BROWSER || this.config.browser;
    const browserTypes = { chromium, firefox, webkit };
    const selectedBrowser = browserTypes[browserName.toLowerCase()] || chromium;
    this.browser = await selectedBrowser.launch({
      headless: this.config.headless,
      args: ['--disable-dev-shm-usage']
    });
    this.context = await this.browser.newContext({ viewport: { width: 1280, height: 800 } });
    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(this.config.timeout);
    this.page.setDefaultNavigationTimeout(this.config.timeout);
    return this.page;
  }

  async closeBrowser() {
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
