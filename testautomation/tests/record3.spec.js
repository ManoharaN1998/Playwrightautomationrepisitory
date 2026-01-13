import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://maven.apache.org/');
  await page.locator('#leftColumn').getByRole('link', { name: 'Downloads' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'apache-maven-3.9.12-bin.zip', exact: true }).click();
  const download = await downloadPromise;
});