const { test, expect } = require('@playwright/test')

test('Login Test case', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(4000)
    const username = await page.locator("(//p[@class='oxd-text oxd-text--p'])[1]").textContent()
    console.log("First Content :" + username);
    const pwd = await page.locator("(//p[@class='oxd-text oxd-text--p'])[2]").textContent()
    console.log("Second Content :" + pwd);

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin")
    await page.locator("button:has-text('Login')").click()
    await page.waitForTimeout(4000)
    //Capture Error Meesage and Validate it.
    const errorMessage = await page.locator('p.oxd-text.oxd-text--p.oxd-alert-content-text').textContent()
    console.log("Error Message :" + errorMessage);
    expect(errorMessage === "Invalid credentials")
    expect(errorMessage).toContain("Invalid credentials")
    expect(errorMessage.includes("credentials")).toBeTruthy()
    await page.waitForTimeout(4000)
})
