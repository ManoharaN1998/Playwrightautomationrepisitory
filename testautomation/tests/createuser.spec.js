const { test, expect } = require('@playwright/test')
let page;
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
})

test.describe.serial('Create User Scenario', () => {
    test('Login into Application', async () => {

        await page.locator('input[name="username"]').fill("admin")
        await page.locator('[name="pwd"]').fill("manager")
        await page.locator("//div[text()='Login ']").click()
        await page.waitForTimeout(3000)
    })

    test('Minimize Flyout window', async () => {
        await page.locator("#gettingStartedShortcutsPanelId").click()
        await page.waitForTimeout(3000)
    })

    test('Create User', async() =>{
        await page.locator("//*[@id='topnav']/tbody/tr[1]/td[5]/a/div[2]").click()
        await page.waitForTimeout(2000)
        await page.locator("//div[text()='Add User']").click()
        await page.waitForTimeout(2000)
        await page.locator("#userDataLightBox_firstNameField").fill("demo")
        await page.locator("#userDataLightBox_lastNameField").fill("User1")
        await page.locator("#userDataLightBox_emailField").fill("demo@gmail.com")
        await page.locator("#userDataLightBox_usernameField").fill("demoUser1")
        await page.locator("#userDataLightBox_passwordField").fill("Welcome@123")
        await page.locator("#userDataLightBox_passwordCopyField").fill("Welcome@123")
        await page.waitForTimeout(2000)
        await page.locator("//span[text()='Create User']").click()
        await page.waitForTimeout(2000)

    })

    test('Delete Existing User', async()=>{
        await page.locator("(//span[text()='User1, demo'])[1]").click()
        await page.waitForTimeout(2000)
        page.on('dialog', async(alertWindow)=>{
            const message=await alertWindow.message()
            console.log("Alert Message :"+message);
            await alertWindow.accept()
            
        })

        await page.locator("#userDataLightBox_deleteBtn").click()
        await page.waitForTimeout(2000)
    })

    test('Logout From Application', async()=>{
        await page.locator("#logoutLink").click()
        await page.waitForTimeout(2000)
    })
})
