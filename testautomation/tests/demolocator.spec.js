const {test, expect} = require("@playwright/test")

test("Locator Discussion", async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)

  //  await page.locator("id=username").fill("admin")
  //  await page.fill("id=username", "admin")
  // await page.locator("xpath=//input[@id='username']").fill("admin")
  //   await page.fill("xpath=//input[@id='username']", "admin")
  // await page.locator("css=input[id='username']").fill("admin")
    await page.fill("css=input[id='username']","admin")
    await page.waitForTimeout(3000)
})