import BasePage from './basePage.js';

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
  }

  async navigateToLogin(url) {
    await this.navigate(url);
    await this.page.waitForURL('**/auth/login', { timeout: 120000 });
    await this.waitForSelector(this.usernameInput);
  }

  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async isLoginPageDisplayed() {
    await this.waitForSelector(this.usernameInput);
    return this.page.isVisible(this.usernameInput);
  }
}
