import { test, expect } from '@playwright/test'

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://sgtestinginstituteapp.onrender.com")
})

test('Login page title validation', async ({ page }) => {
    await expect(page).toHaveTitle("S G Software Testing Institute")
})

// test('Handling New Tab', async ({ page }) => {

//     const [newPage] = await Promise.all([
//         page.waitForEvent('popup'),   // wait for new tab
//         page.click('text=Courses')    // example element that opens new tab
//     ])

//     await newPage.waitForLoadState()

//     // print title
//     console.log(await newPage.title())

//     await expect(newPage).toHaveTitle("S G Software Testing Institute")

//     await newPage.close()
// })