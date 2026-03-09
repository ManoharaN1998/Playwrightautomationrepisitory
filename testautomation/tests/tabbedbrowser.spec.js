const {test, expect} = require('@playwright/test')

test("Handle Tabbed Browsers or Child Browsers", async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(1000)

    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("//a[text()='actiTIME Inc.']").click()
        ]
    )
    const title=newPage.title()
    console.log("title of New Page :"+title);
    const url = newPage.url()
    console.log("URL of New Page :"+url);
    await newPage.waitForTimeout(1000)
    await newPage.locator("//a[text()='Try actiTIME for Free']").click()
    await newPage.locator("#FirstName").fill("Santosh")
    await newPage.locator("#LastName").fill("bhaskar")
    await newPage.waitForTimeout(3000)
    await newPage.close()
    await page.locator("#username").fill("admin")
    await page.waitForTimeout(1000)
})