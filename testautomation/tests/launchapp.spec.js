const {test, expect} = require('@playwright/test')

test("Launch W3School Application", async ({page}) => {
    await page.goto("https://www.w3schools.com/")

    await page.waitForTimeout(4000)
    //Capture Title
    const title = await page.title()
    console.log("Title of Web application:"+title)

    //Capture URL
    const url = await page.url()
    console.log("URL of Application :"+url)

    await expect(page).toHaveTitle("W3Schools Online Web Tutorials")
    await expect(page).toHaveURL("https://www.w3schools.com/")
})