import { test, expect } from '@playwright/test'

test('browserContext example', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://sgtestinginstituteapp.onrender.com")

    await expect(page).toHaveTitle("S G Software Testing Institute")
    await page.waitForTimeout(3000)

    await context.close()

})