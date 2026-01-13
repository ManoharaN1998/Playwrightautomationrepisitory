const { test, expect } = require('@playwright/test')
test("Keyboard Operation 4", async ({ page }) => {
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
    await page.keyboard.type('Hello World!');
    await page.keyboard.press('ArrowLeft');

    await page.keyboard.down('Shift');
    for (let i = 0; i < ' World'.length; i++)
        await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Shift');
    await page.waitForTimeout(3000)

    await page.keyboard.press('Backspace');
    // Result text will end up saying 'Hello!'
    await page.waitForTimeout(3000)
})