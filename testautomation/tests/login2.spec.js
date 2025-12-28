const { test, expect } = require('@playwright/test');

test("Login and Logout Application Test", async ({ page }) => {

  // Step 1: Open website
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Step 2: Enter Username
  await page.locator("//input[@placeholder='Username']").fill("Admin");

  // Step 3: Enter Password
  await page.locator("//input[@placeholder='Password']").fill("admin123");

  // Step 4: Click Login
  await page.locator("//button[@type='submit']").click();

  // Step 5: Verify Dashboard page
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

  // Step 6: Click user profile icon
  await page.locator("//img[contains(@class,'oxd-userdropdown-img')]").click();

  // Step 7: Click Logout
  await page.locator("//a[text()='Logout']").click();

  // Step 8: Verify login page after logout
  await expect(page.locator("//button[@type='submit']")).toBeVisible();

});
