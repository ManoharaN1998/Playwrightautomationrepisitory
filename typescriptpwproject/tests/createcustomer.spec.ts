import {test, expect} from '@playwright/test'
let token:any;
let custId:any;
test.describe.serial("API Customer Scenario ", ()=>{
    test("Authentication of API", async({request})=>{
    const response=await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate",
        {
            data:{
                "username": "pgudi",
                "password": "pgudi"
            },
            headers:{
                "Content-Type":"application/json"
            }
        }
    )
    token=(await response.text()).toString()
    console.log("token :"+token);
    
})

test("Create Customer using API Endpoint", async({request})=>{
    const response=await request.post("https://sgtestinginstitute.onrender.com/api/v1/customers",
        {
            data:{
                 "customerName": "Dell Service",
                "emailId": "dellservice@gmail.com",
                "location": "London",
                "customerDescription": "Testing"
            },
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+token
            }
        }
    )

    const customerResposne=await response.json()
    custId = customerResposne.customerId;
    console.log("Customer ID :"+custId);
    
    const customerresponse=(await response.text()).toString()
    console.log("Customer Resposne :"+customerresponse);
    await expect(response.status()).toBe(201)
    
})

test("display Customer using API Endpoint", async({request})=>{
    const response=await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,
        {
            
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+token
            }
        }
    )
    
    const customerresponse=(await response.text()).toString()
    console.log("Customer Resposne :"+customerresponse);
    await expect(response.status()).toBe(200)
    
})

test("Delete Customer using API Endpoint", async({request})=>{
    const response=await request.delete("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,
        {
            
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+token
            }
        }
    )
    
    const customerresponse=(await response.text()).toString()
    console.log("Customer Resposne :"+customerresponse);
    await expect(response.status()).toBe(200)
    
})
})