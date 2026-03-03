export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.userMenu = '.oxd-userdropdown-name';
    this.logoutOption = 'text=Logout';
  }

  async isLoaded() {
    await this.page.waitForSelector(this.userMenu, { timeout: 10000 });
  }

  async logout() {
    await this.page.click(this.userMenu);
    await this.page.click(this.logoutOption);
  }
}
