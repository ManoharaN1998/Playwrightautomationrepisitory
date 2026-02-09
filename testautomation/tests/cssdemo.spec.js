const {test, expect} = require('@playwright/test')
/*
  Absolute CSS: IF any css starts with Root Tag 'HTML' thst indicates 
  Absolute css

  Drawbacks:
  1. Absolute CSS is very lengthy
  2. IF any change in the DOM structure it makes CSS is failed
*/
test("Absolute CSS", async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=html body div form input").first().fill("DemoUser1")
    await page.waitForTimeout(3000)
})

/*
    Relative XPath:
    IF any CSS does not start with Root Tag HTML , that indicates Relative CSS
*/
//case 1: Identify Element Based on TagName
/* <tagName>  */
test('Relative CSS: Identify Element Based on TagName', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=input").first().fill("DemoUser2")
    await page.waitForTimeout(3000)
})

//case 2: Identify Element Based on TagName with id attribute value
/* <tagName>#<id attributeValue>  */
test('Relative CSS: Identify Element Based on TagName with id attribute value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=input#pwd1pass1word1").fill("DemoUserPassword1")
    await page.waitForTimeout(3000)
})

//case 3: Identify Element Based on id attribute value
/* #<id attributeValue>  */
test('Relative CSS: Identify Element Based on id attribute value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=#pwd1pass1word1").fill("DemoUserPassword2")
    await page.waitForTimeout(3000)
})

//case 4: Identify Element Based on TagName with class attribute value
/* <tagName>.<class attributeValue>  */
test('Relative CSS: Identify Element Based on TagName with class attribute value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=input.pass1word1").fill("DemoUserPassword3")
    await page.waitForTimeout(3000)
})

//case 5: Identify Element Based on TagName with class attribute value
/* .<class attributeValue>  */
test('Relative CSS: Identify Element Based class attribute value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=.pass1word1").fill("DemoUserPassword4")
    await page.waitForTimeout(3000)
})

//case 6: Identify Element Based on TagName with attribute name and value
/* 
   <tagName>[attributename='attributeValue']
*/
test('Relative CSS: Identify Element Based on TagName with attribute name and value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=input[id='chk2linux']").click()
    await page.waitForTimeout(3000)
})

//case 7: Identify Element Based on TagName with Multiple attribute name and value
/* 
   <tagName>[attributename='attributeValue'][attributename='attributeValue']
*/
test('Relative CSS: Identify Element Based on TagName with Multiple attribute name and value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=input[id='chk2linux'][name='linus']").click()
    await page.waitForTimeout(3000)
})

//case 8: Identify Element Based on TagName with partial matching of attribute value
/* 
    ^=  -> starts-with
    $=  -> Ends With
    *=  -> contains
   <tagName>[attributename ^= 'starts with content']
   <tagName>[attributename $= 'ends with content']
   <tagName>[attributename *= 'contians content']
*/
test('Relative CSS: Identify Element Based on TagName withpartial Attribute value', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=input[id ^= 'rad2']").click()
    await page.waitForTimeout(3000)
})

//case 9: identify the Element based on tagName with attributeName
/* 
   tagName[attributeName]
]
*/
test('Relative XPath: Identify Element Based on TagName with attributeName', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    const links=await page.$$("css=a[href]")
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

//case 10: identify the Element based on nth-child concept
/* 
   nth-child
]
*/
test('Relative XPath: identify the Element based on nth-child concept', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=form#frm3 > :nth-child(3)").fill("UserName3")
     await page.locator("css=form#frm3 > :nth-child(1)").fill("UserName1")
    await page.waitForTimeout(3000)
})

//case 11: identify the Element based on sibling
/* 
   firstsibling + secondsibling + thirdsibling
]
*/
test.only('Relative XPath: identify the Element based on sibling concept', async({page})=>{
    await page.goto("file:///C:/Example/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator('css=form#frm3 > input').nth(3).fill("UserName4")
    await page.waitForTimeout(3000)
})