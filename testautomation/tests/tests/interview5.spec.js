// // const{test, expect}= require('@playwright/test')
// // test('LOogin test',async ({browser}) => {
// //     const context = await browser.newContext();
// //     const page = await context.newPage();
// //     await page.goto("https://sgtestinginstituteapp.onrender.com")
// //     await page.waitForTimeout(3000)  
// //     await page.locator('[name="username"]').fill('Manohara NN')
// //     await page.locator('[name="password"]').fill('Manu1998@')
// //     await page.locator('button:has-text("Sign In")').click()
// //     await page.waitForTimeout(3000)  
// //     await expect(page).toHaveTitle("S G Software Testing Institute")
// //     await page.waitForTimeout(3000)  
// // })
//  import {test, expect} from '@playwright/test'
//  test('Key Baord Event',async({page})=>{
//     await page.goto('https://www.google.com/')
//     await page.click('textarea[name="q"]');
//     await page.keyboard.type("Playwright")
//     await page.keyboard.press('Enter')
//     await page.keyboard.press('Control+C')
//     await page.keyboard.press('Control+V')
//     await page.keyboard.press('Enter')
//     // await page.mouse.move(200,300)
//     // await page.mouse.click(200,300)
//     // await page.mouse.dblclick(200,300)
//     await page.waitForTimeout(3000) 
 
//  })

//  await page.selectOption('Dropdown', 'India')
//  await page.selectOption('Dropdown',['India','USA'])

import { test, expect } from '@playwright/test';

test('Count number of links on a webpage', async ({ page }) => {

    // Open website
    await page.goto('https://www.google.com');

    // Count all anchor tag links
    const links = await page.locator('a').count();

    // Print number of links
    console.log("Total number of links:", links);

});