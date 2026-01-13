const { test, expect } = require('@playwright/test')
test("Focusing on Element", async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='pwd']").focus()
    await page.waitForTimeout(3000)
    await page.keyboard.type("Welcome")
    await page.waitForTimeout(3000)
})