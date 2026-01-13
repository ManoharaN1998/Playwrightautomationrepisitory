const {test, expect} = require('@playwright/test')

test("Keyboard Operation 3", async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
    await page.keyboard.type("Bhaghat Singh")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+X")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000)
})