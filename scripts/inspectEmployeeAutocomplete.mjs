import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'load', timeout: 120000 });
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.waitForSelector('a.oxd-main-menu-item[href*="admin/viewAdminModule"]', { timeout: 120000 });
  await page.click('a.oxd-main-menu-item[href*="admin/viewAdminModule"]');
  await page.waitForSelector('button:has-text("Add")', { timeout: 120000 });
  await page.click('button:has-text("Add")');
  await page.waitForSelector('div.oxd-form-row', { timeout: 120000 });

  const fragments = ['Odis', 'Tim', 'John', 'A', 'Adal', 'Ani', 'Lewis'];
  for (const fragment of fragments) {
    const employeeInput = page.locator('div.oxd-input-group:has(label:has-text("Employee Name")) input').first();
    await employeeInput.fill('');
    await employeeInput.fill(fragment);
    await page.waitForTimeout(2000);
    const suggestions = await page.$$eval('div.oxd-autocomplete-dropdown div[role="option"]', els => els.map(e => e.textContent.trim()));
    console.log(fragment, '=>', suggestions);
  }

  await browser.close();
})();
