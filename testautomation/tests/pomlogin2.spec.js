const {test, expect} = require('@playwright/test')
const {LoginPage} = require('./../page2/LgoinPage')
const {HomePage} = require('./../page2/HomePage')
test("Login and Logout Scenario", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    //Create Login Page Object
    const oLogin=new LoginPage(page)
    await oLogin.setUserName("Admin")
    await oLogin.setPassword("admin123")
    await oLogin.clickLogin()
    //create Home Page Obejct
    const oHome = new HomePage(page)   
    await page.waitForTimeout(3000)
    await oHome.clickProfileImage()
    oHome.clickLogout()
    await page.waitForTimeout(3000)
})