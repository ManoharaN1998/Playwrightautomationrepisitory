import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import credentials from '../data/credentials.js';
import config from '../config/env.config.js';

Given('the user is on the OrangeHRM login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateToLogin(config.baseUrl);
});

When('the user logs in with valid credentials', async function () {
  await this.loginPage.login(credentials.valid.username, credentials.valid.password);
  this.dashboardPage = new DashboardPage(this.page);
});

Then('the dashboard welcome banner is visible', async function () {
  await this.dashboardPage.waitForDashboard();
  const visible = await this.dashboardPage.isWelcomeVisible();
  if (!visible) {
    throw new Error('Dashboard welcome banner was not visible after login');
  }
});

When('the user logs out', async function () {
  await this.dashboardPage.logout();
});

Then('the login page is displayed again', async function () {
  const loginPage = new LoginPage(this.page);
  const isVisible = await loginPage.isLoginPageDisplayed();
  if (!isVisible) {
    throw new Error('Login page was not displayed after logout');
  }
});
