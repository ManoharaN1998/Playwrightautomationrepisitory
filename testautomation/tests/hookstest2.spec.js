const {test, expect} = require('@playwright/test')

test.beforeAll(async() =>{
    console.log("Login in to the Application !!!");
    
})

test.afterAll(async() =>{
    console.log("Logout from the Application");
    
})

test('First Test', async ({page})=>{
    console.log("It is a First Test case!!!")
})

test('Second Test', async ({page})=>{
    console.log("It is a Second Test case!!!")
})

test('Third Test', async ({page})=>{
    console.log("It is a Third Test case!!!")
})

test('Fourth Test', async ({page})=>{
    console.log("It is a Fourth Test case!!!")
})