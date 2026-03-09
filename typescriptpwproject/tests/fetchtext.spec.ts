import {test, expect} from '@playwright/test'

test("Fetching Text from Application", async ({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com")
    await page.waitForTimeout(2000)
    await page.locator('input[type="text"]').fill("pgudi")
    await page.locator("//input[@name='password']").fill("welcome")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(2000)
    let errorContent=await page.locator("//p[normalize-space()='Invalid username or password']").textContent()
    console.log("Erro Message :"+errorContent);
    await expect(errorContent?.includes("Invalid")).toBeTruthy()
})