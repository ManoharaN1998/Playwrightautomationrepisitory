const {test, expect} = require('@playwright/test')

test("Handle/Select Multi Drop down Items", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    await page.locator("#colors").selectOption(["Blue","Green","Yellow"])
    await page.waitForTimeout(3000)
})