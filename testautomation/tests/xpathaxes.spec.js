const {test, expect} = require('@playwright/test')
/*
  1. following-sibling
  Based on Person name schin Tendular Enter the  salary 25000
*/
test("following-sibling", async({page})=>{
    await page.goto("file:///C:/Example/WebTableHTML.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//td[text()='Sachin Tendulkar']/following-sibling::Td/following-sibling::Td/following-sibling::Td/following-sibling::Td/input").fill("25000")
    await page.waitForTimeout(3000)
})

/*
  2. preceding-sibling
  Based on Designation Indian Freedom Fighter, Make the status as Active
*/
test("preceding-sibling", async({page})=>{
    await page.goto("file:///C:/Example/WebTableHTML.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//td[text()='Indian Freedom Fighter']/preceding-sibling::td[1]/preceding-sibling::td[1]/input").click()
    await page.waitForTimeout(3000)
})

/*
  3. following
  Based on Person Name Rahul Dravid for the Next Record Enter Salary
*/
test("Following", async({page})=>{
    await page.goto("file:///C:/Example/WebTableHTML.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//td[text()='Rahul Dravid']/following::tr[1]/td[6]/input").fill("22000")
    await page.waitForTimeout(3000)
})

/*
  4. preceding
  Based on Person Name Sachin Tendulkar, his previous second Record make status as active
*/
test("preceding", async({page})=>{
    await page.goto("file:///C:/Example/WebTableHTML.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//td[text()='Sachin Tendulkar']/preceding::tr[1]/preceding::tr[1]/td[1]/input").click()
    await page.waitForTimeout(3000)
})

/*
  5. ancestor
  Based on child Element, identify the parent Element
*/
test("ancestor", async({page})=>{
    await page.goto("file:///C:/Example/WebTableHTML.html")
    await page.waitForTimeout(3000)
    const tableobj=await page.locator("xpath=//input[@id='edit4']/ancestor::td/ancestor::tr/ancestor::table");
    const val=await tableobj.getAttribute("id")
    console.log("Attrobute Value :"+val);
    
    await page.waitForTimeout(3000)
})

/*
  5. descendant
  Based on child Element, identify the parent Element
*/
test.only("descendant", async({page})=>{
    await page.goto("file:///C:/Example/WebTableHTML.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//table[@id='tbl1']/descendant::tr[4]/td[6]/input").fill("14000")
    await page.waitForTimeout(3000)
})