const {test, expect} = require('@playwright/test')

test("Select Items from Dropdown", async({page})=>{
    await page.goto("file:///C:/PlaywrightQARepository3/CurrentWorkSpace/PlaywrightDecember2025Repository/sampleproject/HTML/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("#tools").selectOption({label:"Selenium WebDriver"})
    await page.waitForTimeout(3000)
    await page.locator("#tools").selectOption({value:"ide"})
    await page.waitForTimeout(3000)
    await page.locator("#tools").selectOption({index:2})
    await page.waitForTimeout(3000)
})