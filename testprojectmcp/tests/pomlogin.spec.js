const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');

test.use({ headless: false, browserName: 'chromium' });

test('OrangeHRM POM login and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  // Wait for dashboard/user menu, then logout
  await loginPage.logout();

  // Verify we are back on the login page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});