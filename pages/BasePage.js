export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'load', timeout: 120000 });
    await this.page.waitForLoadState('domcontentloaded', { timeout: 120000 });
  }

  async click(locator) {
    await this.page.click(locator, { timeout: 120000 });
  }

  async fill(locator, value) {
    await this.page.fill(locator, value, { timeout: 120000 });
  }

  async getText(locator) {
    return this.page.textContent(locator, { timeout: 120000 });
  }

  async waitForSelector(locator) {
    await this.page.waitForSelector(locator, { state: 'visible', timeout: 120000 });
  }
}
