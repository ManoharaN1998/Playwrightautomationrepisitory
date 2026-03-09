import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

// Run this file in headed Chromium by default
test.use({ headless: false, browserName: 'chromium' });

const BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const USERNAME = 'Admin';
const PASSWORD = 'admin123';

test('demo1: login and logout', async ({ page }) => {
  const login = new LoginPage(page);
  const dash = new DashboardPage(page);

  await page.goto(BASE_URL);
  await login.login(USERNAME, PASSWORD);

  await dash.isLoaded();
  await dash.logout();

  await expect(page).toHaveURL(BASE_URL);
});
