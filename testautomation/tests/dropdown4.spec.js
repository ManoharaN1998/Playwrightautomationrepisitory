const {test, expect} = require('@playwright/test')

test("Select Items from Country Drop down", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    const textContent = await page.locator("#country").textContent()
    console.log("List Items Text Content :"+textContent);
    
    await page.waitForTimeout(3000)
    await expect(textContent.includes("Australia")).toBeTruthy()
     await page.waitForTimeout(3000)
    
})