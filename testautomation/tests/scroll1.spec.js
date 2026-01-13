const { test, expect } = require('@playwright/test')

test("Scrolling To Element", async({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(3000)
    await page.locator("//a[contains(text(),'Learn CSS')]").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    await page.locator("//a[contains(text(),'Learn CSS')]").click()
    await page.waitForTimeout(3000)
})

