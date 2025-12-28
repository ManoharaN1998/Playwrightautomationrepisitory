const {test, expect} = require('@playwright/test')
 
test("Login Logout application Test", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(4000)
 
    //Perform Login Action
    await page.locator("input[placeholder='Username']").fill("Admin")
    await page.locator('input[type="password"]').fill("admin123")
    await page.locator("button:has-text('Login')").click()
    await page.waitForTimeout(4000)
    // Perform Logout Action
    await page.locator('img.oxd-userdropdown-img').click()
    await page.locator(':text("Logout")').click()
    await page.waitForTimeout(4000)
})