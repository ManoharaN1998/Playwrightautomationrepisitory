const {test, expect} = require('@playwright/test')
let page;
test.beforeAll(async({browser})=>{
    const context=await browser.newContext()
    page=await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

test.describe.serial(async()=>{
    test('Login into Application', async()=>{
        await page.locator('[name="username"]').fill("Admin")
        await page.locator('[name="password"]').fill("admin123")
        await page.locator('button:has-text("Login")').click()
        await expect(page).toHaveTitle("OrangeHRM")
    })
    
    test("Logout From Application", async() =>{
        await page.locator('img.oxd-userdropdown-img:visible').click()
        await page.locator(':text("Logout")').click()
        //Validation
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await expect(page).toHaveTitle("OrangeHRM")
    })
})