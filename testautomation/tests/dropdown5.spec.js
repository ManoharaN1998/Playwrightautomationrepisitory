const {test, expect} = require('@playwright/test')

test("Select Items from Country Drop down", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    const listTextContent = await page.locator("#country").allTextContents()
    console.log("List Items Text Content :"+listTextContent);
    console.log("Number of Countries :"+listTextContent.length);
   
    
})