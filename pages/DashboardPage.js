import BasePage from './basePage.js';

export default class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.dashboardBanner = 'h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';
    this.userDropdownTab = '.oxd-userdropdown-tab';
    this.logoutButton = 'text=Logout';
  }

  async waitForDashboard() {
    await this.waitForSelector(this.dashboardBanner);
  }

  async isWelcomeVisible() {
    const text = await this.getText(this.dashboardBanner);
    return text?.toLowerCase().includes('dashboard');
  }

  async openUserMenu() {
    await this.click(this.userDropdownTab);
  }

  async logout() {
    await this.openUserMenu();
    await this.click(this.logoutButton);
  }
}
