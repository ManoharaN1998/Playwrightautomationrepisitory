const {test, expect} = require("@playwright/test")

test("Locator Discussion", async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)

    await page.getByRole("textbox",{id:'username'}).first().fill("admin")
    await page.getByRole("textbox",{name:'Password'}).fill("manager")
    await page.getByRole("link",{name:'Login '}).click()

    await page.waitForTimeout(3000)
})