const { When, Then } = require("@cucumber/cucumber");
const { request,expect} = require("@playwright/test")
When("I authentic post request to get the access token", async function(){
    console.log("This Test is responsible for gettting the Token based on Autheticate Request")
    const apiContext = await request.newContext();
    this.response = await apiContext.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate", {
        data: {
            "username": "Manohara NN",
            "password": "Manu1998@"
        }
    })
})

When("I capture access token in a variable", async function(){
    this.loginToken = (await this.response.text()).toString()
    console.log("Access token :" + this.loginToken);
})

When("I Execute GET Request for All Customers", async function(){
    console.log("This Step is Responsible for Fetching All Available Customers from Server")
    const apiContext = await request.newContext();
    this.response = await apiContext.get("https://sgtestinginstitute.onrender.com/api/v1/customers", {
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + this.loginToken
        }
    })
})

When("I get the All Customers", async function(){
    const responseCustomer = (await this.response.text()).toString()
    console.log("Customer Response :" + responseCustomer);

})

Then("I validate the 200 status code", async function(){
    await expect(this.response.status()).toBe(200)
})

When("I Create Customer using POST Request", async function(){
    console.log("This Test is responsibel for Creating Customer Resource in the Server using Post Request");
     const apiContext = await request.newContext();
     this.response = await apiContext.post("https://sgtestinginstitute.onrender.com/api/v1/customers", {
        data: {
            "customerName": "Dell Services",
            "emailId": "services@dell.com",
            "location": "Bangalore",
            "customerDescription": "Provides Services on Laptops"
        },
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + this.loginToken
        }
    })
})

Then ("I validate the 201 status code for Customer", async function(){
    console.log("This Test is responsibel for validating Customer Resource ");
     const responseCustomer = await this.response.json()
    this.custId = responseCustomer.customerId;
    console.log("custoemr Id :" + this.custId);

    const responseContent = (await this.response.text()).toString()
    console.log("Customer Response :" + responseContent);

    await expect(this.response.status()).toBe(201)
})

When("I fetch newly created Customer using GET request", async function(){
    console.log("This Test is responsibel for Fetching Customer Resource from Server using GET Request");
    const apiContext = await request.newContext();
    this.response = await apiContext.get("https://sgtestinginstitute.onrender.com/api/v1/customers/" + this.custId, {
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + this.loginToken
        }
    })
})

Then("I validate the 200 status code for fetch Customer", async function(){
    console.log("This Test is responsibel for Validating Customer Resource from Server");
    const responseCustomer = (await this.response.text()).toString()
    console.log("Customer Response :" + responseCustomer);
    await expect(this.response.status()).toBe(200)
})

When("I delete newly created customer using Delete request", async function(){
    console.log("This Test is responsibel for Deleting Customer Resource from Server using Delete Request");
    const apiContext = await request.newContext();
    this.response = await apiContext.delete("https://sgtestinginstitute.onrender.com/api/v1/customers/"+ this.custId,{
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + this.loginToken
        }
    })
})

Then("I validate the 200 status code for delete customer", async function(){
    console.log("This Test is responsibel for validating Deleting Customer Resource ");
    const responseCustomer = (await this.response.text()).toString()
    console.log("Customer Response :"+responseCustomer);
    await expect(this.response.status()).toBe(200)
})