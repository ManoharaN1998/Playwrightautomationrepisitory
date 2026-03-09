const {test, expect} = require('@playwright/test')
/*
  Absolute XPath: IF any xpath starts with Root Tag 'HTML' thst indicates 
  Absolute XPath

  Drawbacks:
  1. Absolute XPath is very lengthy
  2. IF any change in the DOM structure it makes Xpath is failed
*/
test("Absolute XPath", async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=html/body/div/form/input").first().fill("DemoUser1")
    await page.waitForTimeout(3000)
})
/*
    Relative XPath:
    IF any Xpath does not start with Root Tag HTML , that indicates Relative XPAth
*/
//case 1: Identify Element Based on TagName
test('Relative XPath: Identify Element Based on TagName', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//input").first().fill("DemoUser1")
    await page.waitForTimeout(3000)
})

//case 2: Identify Element Based on TagName with Index
test('Relative XPath: Identify Element Based on TagName with index', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=(//input)[2]").first().fill("DemoUser1")
    await page.waitForTimeout(3000)
})
//case 4: identify the Element based on tagName with attributeName and value combination
/* syntax:   //tagName[@attributeName='attributeValue']  */
test('Relative XPath: Identify Element Based on TagName with attributeName and Value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//input[@id='pwd1pass1word1']").fill("DemoUSer2")
    await page.waitForTimeout(3000)
})

//case 5: identify the Element based on tagName with attribute value alone
/* syntax:   //tagName[@*='attributeValue']  */
test('Relative XPath: Identify Element Based on TagName with attribute Value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//input[@*='pwd1pass1word1']").fill("DemoUser3")
    await page.waitForTimeout(3000)
})

//case 6: identify the Element based on attribute value alone
/* syntax:   //*[@*='attributeValue']  */
test('Relative XPath: Identify Element Based on attribute Value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//*[@*='pwd1pass1word1']").fill("DemoUser4")
    await page.waitForTimeout(3000)
})

//case 7: identify the Element based on tagName with Multiple attributeName and value combination
/* syntax:   //tagName[@attributeName='attributeValue'][@attributeName='attributeValue']  */
test('Relative XPath: Identify Element Based on TagName with Multiple attributeName and Value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//input[@id='chk1windows'][@name='windows']").click()
    await page.waitForTimeout(3000)
})

//case 8: identify the Element based on tagName with Multiple attributeName and value combination uisng And operator
/* syntax:   //tagName[@attributeName='attributeValue' and @attributeName='attributeValue']  */
test('Relative XPath: Identify Element Based on TagName with Multiple attributeName and Value using And Operator', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//input[@id='chk1windows' and @name='windows']").click()
    await page.waitForTimeout(3000)
})

//case 9: identify the Element based on tagName with Multiple attributeName and value combination uisng OR operator
/* syntax:   //tagName[@attributeName='attributeValue' or @attributeName='attributeValue']  */
test('Relative XPath: Identify Element Based on TagName with Multiple attributeName and Value using OR Operator', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//input[@id='chk1windows' or @name='windows']").click()
    await page.waitForTimeout(3000)
})

//case 10: identify the Element based on tagName with Partial Matching of attribute value combination
/* 
    starts-with('attributeName','partial attributeValue')
    ends-with('attributeName','partial attributeValue')
    contians('attributeName','partial attributeValue')
    //tagName[starts-with('attributeName','partial attributeValue')]
    //tagName[ends-with('attributeName','partial attributeValue')]
    //tagName[contians('attributeName','partial attributeValue')]
*/
test('Relative XPath: Identify Element Based on TagName with Partial attribute Value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//input[contains(@id,'rad1')]").click()
    await page.waitForTimeout(3000)
})

//case 11: identify the Element based on tagName with text content
/* 
    //tagName[text()='textContent']
*/
test('Relative XPath: Identify Element Based on TagName with Text Content', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//a[text()='S G Software Testing']").click()
    await page.waitForTimeout(3000)
})

//case 12: identify the Element based on tagName with normalize-space
/* 
    //tagName[normalize-space()='textContent']
*/
test('Relative XPath: Identify Element Based on TagName with normalize-space', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//a[normalize-space()='S G Software Testing']").click()
    await page.waitForTimeout(3000)
})

//case 12: identify the Element based on tagName with normalize-space New
/* 
    //tagName[normalize-space()='textContent']
*/
test('Relative XPath: Identify Element Based on TagName with normalize-space New', async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//div[normalize-space()='Login']").click()
    await page.waitForTimeout(3000)
})

//case 13: identify the Element based on tagName with partial text content
/* 
    starts-with(text(),'partial text Content')
    ends-with(text(),'partial text Content')
    contains(text(),'partial text Content')

    //tagName[starts-with(text(),'partial text Content')
    //tagName[ends-with(text(),'partial text Content')
    //tagName[contains(text(),'partial text Content')
]
*/
test('Relative XPath: Identify Element Based on TagName with Partial Text Content', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//a[starts-with(text(),'POI')]").click()
    await page.waitForTimeout(3000)
})


//case 14: identify the Element based on tagName with attributeName
/* 
   //tagName[@attributeName]
]
*/
test.only('Relative XPath: Identify Element Based on TagName with attributeName', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    const links=await page.$$("xpath=//a[@href]")
    console.log("Number of Links in Application :"+links.length);
    //Fetch Link Text
    for(let i=0;i<links.length;i++)
    {
        let linkname=await links[i].textContent()
        console.log("Link Name :"+linkname);
    }
    //Click on link it ends with Testing
    for(let i=0;i<links.length;i++)
    {
        let linkname=await links[i].textContent()
        if(linkname.endsWith('Testing')){
            await links[i].click()
            break;
        }
    }

    await page.waitForTimeout(3000)
})

