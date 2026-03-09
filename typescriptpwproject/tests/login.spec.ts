import {test, expect} from '@playwright/test'

test("Login functionality", async ({page})=>{
    // resolved / reejcted
    await page.goto("https://sgtestinginstituteapp.onrender.com")
    await page.waitForTimeout(2000)
    await page.locator('input[type="text"]').fill("pgudi")
    await page.locator("//input[@name='password']").fill("pgudi")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    await page.waitForTimeout(2000)
})