const {test, expect} = require('@playwright/test')

test("Handling Frames", async({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    await page.waitForTimeout(3000)
    //First Frame
    const frame1=await page.frameLocator("//frame[@title='All Packages']")
    await frame1.locator("//a[normalize-space()='java.awt']").click()
    await page.waitForTimeout(3000)
    //Second Frame
    const frame2=await page.frameLocator('[name="packageFrame"]')
    await frame2.locator("//span[text()='ActiveEvent']").click()
    await page.waitForTimeout(3000)
    //Third Frame
    const frame3=await page.frameLocator("[name='classFrame']")
    const content=await frame3.locator("//div[@class='description']//div[1]").textContent()
    console.log("Frame Content :"+content);
    
})