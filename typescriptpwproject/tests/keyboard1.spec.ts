import { test, expect } from '@playwright/test'

test("Keyboard Operation 1", async ({ page }) => {
    await page.goto("https://sgtestinginstituteapp.onrender.com")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Tab")
    await page.keyboard.type("pgudi")
    await page.waitForTimeout(2000)
})