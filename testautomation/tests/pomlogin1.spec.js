const {test, expect} = require('@playwright/test')
const {LoginPage} = require('./../page1/LoginPage')

test("Login and Logout Scenario ", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    // Create object/Instance
    const pomObject = new LoginPage(page)
    //Call Login Action
    pomObject.loginAction()
    await page.waitForTimeout(4000)
    pomObject.logoutAction()
    await page.waitForTimeout(3000)
})