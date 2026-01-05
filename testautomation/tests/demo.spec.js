const {test, expect} = require('@playwright/test')

test("This is a First Test", function display(){
     console.log("It is a First Playwright test case");
     
})

test("This is a Second Test", function(){
    console.log("It is a Second Playwright Test case");
    
})

test("This is a Third Test", ()=>{
    console.log("It is a Third Playwright Test case");
    
})