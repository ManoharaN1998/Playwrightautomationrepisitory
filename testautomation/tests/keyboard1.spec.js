const {test, expect} = require('@playwright/test')

test('Keyboard Operation 1', async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
    await page.locator("#username").fill("admin")
    await page.locator("//input[@name='pwd']").fill("manager")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})