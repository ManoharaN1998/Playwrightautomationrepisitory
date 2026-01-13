const {test, expect} = require('@playwright/test')

test("Handling Import for single File", async({page})=>{
    await page.goto("https://html-file-upload.netlify.app/multiple/")
    await page.waitForTimeout(3000)
    //Upload Single File using Absolute Path
    await page.locator("#file-uploader").setInputFiles(["./uploadFiles/employees.csv","./uploadFiles/bird1.jpg","./uploadFiles/bird2.jpg"])
    await page.waitForTimeout(3000)
    
})