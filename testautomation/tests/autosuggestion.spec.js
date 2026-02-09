const { test, expect } = require('@playwright/test')

test("Select Items from Country Drop down", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)

    await page.locator("#twotabsearchtextbox").fill("smart phone")
    await page.waitForTimeout(3000)
    await page.waitForSelector("//div[@role='row']")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(1000)
})

test.only("Select Items from Country Drop down without Keyboard", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)

    await page.locator("#twotabsearchtextbox").fill("smart phone")
    await page.waitForTimeout(3000)
    await page.waitForSelector("//div[@role='row']")
    await page.waitForTimeout(1000)
    const container = await page.$(".left-pane-results-container")
    const containerItems=await container.$$("//div[@role='row']")
    console.log("Numer of Items :"+containerItems.length);
    await page.waitForTimeout(1000)
    for(let i=0;i<containerItems.length;i++){
        const item=await containerItems[i].textContent()
        if(item.includes("15000 5g mobile")){
            await containerItems[i].click()
            break
        }
    }
    await page.waitForTimeout(3000)
})