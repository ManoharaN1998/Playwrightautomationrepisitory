const { test, expect } = require("@playwright/test");
const { request } = require("node:http");
let loginToken;
let custId;
test("Authenticate and get the Token", async ({ request }) => {
    console.log("This Test is responsibel for gettting the Token based on Autheticate Request")
    const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate", {
        data: {
            "username": "pgudi",
            "password": "pgudi"
        }
    })
    loginToken = (await response.text()).toString()
    console.log("Access token :" + loginToken);
 
})
 
test("This Test is responsibel for Creating Customer Resource in the Server using Post Request", async ({ request }) => {
    console.log("This Test is responsibel for Creating Customer Resource in the Server using Post Request");
   
    const response=await request.post("https://sgtestinginstitute.onrender.com/api/v1/customers", {
        data: {
            "customerName": "Dell Services",
            "emailId": "services@dell.com",
            "location": "Bangalore",
            "customerDescription": "Provides Services on Laptops"
        },
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + loginToken
        }
    })
    // Fetch CustomerId from the Resposne
    const responseCustomer = await response.json()
    custId = responseCustomer.customerId;
    console.log("custoemr Id :"+custId);
   
    const responseContent = (await response.text()).toString()
    console.log("Customer Response :"+responseContent);
   
    await expect(response.status()).toBe(201)
})
 
test("display Newly Created Customer Resource ", async({request})=>{
    console.log("This Test is responsibel for Fetching Customer Resource from Server using Post Request");
    const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,{
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + loginToken
        }
    })
    const responseCustomer = (await response.text()).toString()
    console.log("Customer Response :"+responseCustomer);
    await expect(response.status()).toBe(200)
   
})
 
test("Delete Newly Created Customer Resource ", async({request})=>{
    console.log("This Test is responsibel for Deleting Customer Resource from Server using Delete Request");
    const response = await request.delete("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,{
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + loginToken
        }
    })
    const responseCustomer = (await response.text()).toString()
    console.log("Customer Response :"+responseCustomer);
    await expect(response.status()).toBe(200)
   
})
 