import { test, expect } from '@playwright/test';

const BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const USERNAME = 'Admin';
const PASSWORD = 'admin123';

test('OrangeHRM: login and logout', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.fill('input[name="username"]', USERNAME);
  await page.fill('input[name="password"]', PASSWORD);
  await page.click('button:has-text("Login")');

  // Wait for dashboard (URL or visible user menu)
  await expect(page).toHaveURL(/dashboard/, { timeout: 10000 });

  const userMenu = page.locator('.oxd-userdropdown-name');
  await expect(userMenu).toBeVisible({ timeout: 10000 });
  await userMenu.click();

  // Click the Logout entry from the dropdown
  await page.click('text=Logout');

  // Verify we are back on the login page
  await expect(page).toHaveURL(BASE_URL);
});
