const {test, expect} = require('@playwright/test')

test("Keyboard Operation 2",async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
    await page.keyboard.type("admin")
    await page.keyboard.press("Tab")
    await page.keyboard.type("manager")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})