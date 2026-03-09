const {test, expect} = require('@playwright/test')

test("Select Items from Country Drop down", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    const dropdownList = await page.$("#country")
    const Listitems = await dropdownList.$$("option")
    console.log("Number of Countries :"+Listitems.length);
   for(let i=0;i<Listitems.length;i++){
        const ItemName=await Listitems[i].textContent()
        console.log("Item Name :"+ItemName);
        if(ItemName.includes("India")){
            await expect(ItemName.includes("India")).toBeTruthy()
            break
        }
   }
    
})