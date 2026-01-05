const {test, expect} = require('@playwright/test')

test("This is a First Test", async function display(){
    await console.log("It is a First Playwright test case");
     
})

test("This is a Second Test", async function(){
    await console.log("It is a Second Playwright Test case");
    
})

test("This is a Third Test", async ()=>{
    await console.log("It is a Third Playwright Test case");
    
})