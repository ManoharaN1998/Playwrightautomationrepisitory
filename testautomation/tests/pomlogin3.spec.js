const {test, expect} = require('@playwright/test')
const {LoginPage} = require('./../page3/LoginPage')
const {HomePage} = require('./../page3/HomePage')
test("Login and Logout Scenarios ", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    //Create Login Page Object
    let oLogin = new LoginPage(page)
    await oLogin.setUserName("Admin")
    await oLogin.setPassword("admin123")
    await oLogin.clickLoginButton();
    await page.waitForTimeout(3000)
    //Create Home Page Object
    let oHome = new HomePage(page)
    await oHome.clickProfileImage()
    await oHome.clickLogoutLink()
    await page.waitForTimeout(3000)
})