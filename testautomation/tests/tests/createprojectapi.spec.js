const { test, expect } = require("@playwright/test")
 
let loginToken;
let custId;
let projectId;
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
 
    const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/customers", {
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
    console.log("custoemr Id :" + custId);
 
    const responseContent = (await response.text()).toString()
    console.log("Customer Response :" + responseContent);
 
    await expect(response.status()).toBe(201)
})
 
test("display Newly Created Customer Resource ", async ({ request }) => {
    console.log("This Test is responsibel for Fetching Customer Resource from Server using GET Request");
    const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/" + custId, {
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + loginToken
        }
    })
    const responseCustomer = (await response.text()).toString()
    console.log("Customer Response :" + responseCustomer);
    await expect(response.status()).toBe(200)
 
})
 
test("Create Project Resource in the Server", async ({ request }) => {
    console.log("This Test is responsible for Creating Project Resource in Server using Post Request");
    const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/projects", {
        data: {
            "projectTitle": "Lavendar",
            "projectDomain": "Invoice Exclusion",
            "projectDescription": "It excludes the Invalid Invocies",
            "customer": {
                "customerId": custId
            }
        },
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + loginToken
        }
    })
 
    // Fetch CustomerId from the Resposne
    const responseProject = await response.json()
    projectId = responseProject.projectId;
    console.log("Project Id :" + projectId);
 
    const responseContent = (await response.text()).toString()
    console.log("Project Response :" + responseContent);
 
    await expect(response.status()).toBe(201)
})
 
test("display Newly Created Project Resource ", async ({ request }) => {
    console.log("This Test is responsibel for Fetching Project Resource from Server using GET Request");
    const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/projects/" + projectId, {
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + loginToken
        }
    })
    const responseProject = (await response.text()).toString()
    console.log("Project Response :" + responseProject);
    await expect(response.status()).toBe(200)
 
})
 
test("Delete Newly Created Project Resource ", async ({ request }) => {
    console.log("This Test is responsibel for Deleting Project Resource from Server using Delete Request");
    const response = await request.delete("https://sgtestinginstitute.onrender.com/api/v1/projects/" + projectId, {
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + loginToken
        }
    })
    const responseProject = (await response.text()).toString()
    console.log("Project Response :" + responseProject);
    await expect(response.status()).toBe(200)
 
})
 
test("Delete Newly Deleting Customer Resource ", async({request})=>{
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
 