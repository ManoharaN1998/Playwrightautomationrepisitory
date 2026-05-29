import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'load', timeout: 120000 });
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.waitForSelector('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module', { timeout: 120000 });
  await page.click('a.oxd-main-menu-item[href*="admin/viewAdminModule"]');
  await page.waitForSelector('button:has-text("Add")', { timeout: 120000 });
  await page.click('button:has-text("Add")');
  await page.waitForSelector('div.oxd-form-row', { timeout: 120000 });

  await page.click('div.oxd-input-group:has(label:has-text("User Role")) div.oxd-select-text-input');
  await page.waitForSelector('.oxd-select-dropdown', { timeout: 120000 });
  const userRoleOptions = await page.locator('.oxd-select-dropdown .oxd-select-option').evaluateAll(nodes => nodes.map(n => n.textContent.trim()));
  console.log('userRoleOptions', userRoleOptions);

  const employeeInput = page.locator('div.oxd-input-group:has(label:has-text("Employee Name")) input');
  await employeeInput.fill('Odis Adalwin');
  await page.waitForTimeout(1000);
  const employeeOptions = await page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option').evaluateAll(nodes => nodes.map(n => ({ text: n.textContent.trim(), outerHTML: n.outerHTML })));
  console.log('employeeOptions', employeeOptions);

  const rows = await page.locator('div.oxd-form-row').count();
  console.log('form-row count:', rows);
  for (let i = 0; i < rows; i++) {
    const row = page.locator('div.oxd-form-row').nth(i);
    const labels = await row.locator('label').allTextContents();
    console.log(`row ${i} labels:`, labels.map(l => l.trim()));
    console.log(`row ${i} outerHTML:`, await row.evaluate(el => el.outerHTML));
  }
  const combos = await page.locator('div[role="combobox"]').evaluateAll(nodes => nodes.map(n => n.outerHTML));
  console.log('comboboxes', combos.length);
  combos.forEach((html, idx) => console.log(`combo ${idx}:`, html));
  console.log('URL', page.url());
  await browser.close();
})();
