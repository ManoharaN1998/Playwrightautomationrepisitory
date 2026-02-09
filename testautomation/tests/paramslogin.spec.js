const {test, expect} = require('@playwright/test')
import testdata from './../dataFiles/testlogindata.json'
import data from './../dataFiles/multlogindata.json'

test("Test Data Parametrization for Login", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.locator('[name="username"]').fill(testdata.username)
    await page.locator('[name="password"]').fill(testdata.password)
    await page.locator('button:has-text("Login")').click()
    await page.waitForTimeout(3000)
    await page.locator('img.oxd-userdropdown-img:visible').click()
    await page.getByText('Logout', { exact: true }).click()
    await page.waitForTimeout(3000)
})

test.only("Multiple Test Data Parametrization for Login", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
    for(let testdata of data){
        await page.locator('[name="username"]').fill(testdata.username)
        await page.locator('[name="password"]').fill(testdata.password)
        await page.locator('button:has-text("Login")').click()
        await page.waitForTimeout(3000)
        await page.locator('img.oxd-userdropdown-img:visible').click()
        await page.getByText('Logout', { exact: true }).click()
        
    }
})