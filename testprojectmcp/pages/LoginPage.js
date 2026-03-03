class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button:has-text("Login")';
    this.userMenu = '.oxd-userdropdown-name';
    this.logoutOption = 'text=Logout';
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async logout() {
    await this.page.waitForSelector(this.userMenu, { timeout: 10000 });
    await this.page.click(this.userMenu);
    await this.page.click(this.logoutOption);
  }
}

module.exports = { LoginPage };
