const {test, expect} = require('@playwright/test')

test("Handling Import for single File", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(3000)
    //Upload Single File using Absolute Path
    await page.locator("#file-upload").setInputFiles("C:/PlaywrightQARepository3/CurrentWorkSpace/PlaywrightDecember2025Repository/sampleproject/uploadFiles/employees.csv")
    await page.locator("#file-submit").click()
    await page.waitForTimeout(3000)
    await expect(page.locator(':text-is("File Uploaded!")')).toHaveText("File Uploaded!")
    const filename=await page.locator("#uploaded-files").textContent()
    expect(filename.includes(".csv")).toBeTruthy()
})