const {test, expect} = require('@playwright/test')

test('Handle Alert Dialog', async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(4000)

    page.on('dialog', async(alertWindow)=>{
        await expect(alertWindow.type()).toContain("alert")
        const message = await alertWindow.message()
        console.log("Alert Message :"+message);
        expect(message).toContain("I am a JS Alert")
        await alertWindow.accept()
        
    })
    await page.locator(':text-is("Click for JS Alert")').click()

})

test('Handle Confirm Dialog', async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(4000)

    page.on('dialog', async(alertWindow)=>{
        await expect(alertWindow.type()).toContain("confirm")
        const message = await alertWindow.message()
        console.log("Alert Message :"+message);
        expect(message).toContain("I am a JS Confirm")
        await alertWindow.dismiss()
       
        
    })
    await page.locator(':text-is("Click for JS Confirm")').click()
    await page.waitForTimeout(3000)
})

test.only('Handle Prompt Dialog', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(4000)

    page.on('dialog', async(alertWindow)=>{
        expect(alertWindow.type()).toContain("prompt")
        const message=await alertWindow.message()
        console.log("Alert Message :"+message);
        await alertWindow.accept('WELCOME PLAYWRIGHT')
    })
    await page.locator(':text-is("Click for JS Prompt")').click()
    await page.waitForTimeout(4000)
})