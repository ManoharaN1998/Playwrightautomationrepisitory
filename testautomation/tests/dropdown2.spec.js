const {test, expect} = require('@playwright/test')

test("Select Items from Country Drop down", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({label:"India"})
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({value:"france"})
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({index:6})
    await page.waitForTimeout(3000)
})