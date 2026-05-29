import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import logger from './logger.js';
import config from '../config/env.config.js';
import { takeScreenshot } from '../utils/screenshot.js';

setDefaultTimeout(config.timeout);

const logsDir = path.resolve('logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

BeforeAll(async function () {
  logger.info('Starting Cucumber test run');
});

Before(async function (scenario) {
  this.testName = scenario.pickle.name;
  this.logger = logger;
  this.logger.info(`Starting scenario: ${this.testName}`);
  await this.launchBrowser();
});

After({ tags: '@admin' }, async function () {
  if (this.dashboardPage) {
    try {
      await this.dashboardPage.logout();
      this.logger.info('Logged out after admin scenario');
    } catch (error) {
      this.logger.warn(`Admin logout hook failed: ${error.message}`);
    }
  }
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshotPath = await takeScreenshot(this.page, this.testName);
    this.logger.error(`Scenario failed: ${this.testName}. Screenshot saved to ${screenshotPath}`);
  }

  await this.closeBrowser();
  this.logger.info(`Finished scenario: ${this.testName} with status ${scenario.result?.status}`);
});

AfterAll(async function () {
  logger.info('Completed Cucumber test run');
});
