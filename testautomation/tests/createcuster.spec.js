const { test, expect } = require('@playwright/test');

let accessToken;

test.beforeAll(async ({ request }) => {

    const response = await request.post(
        "https://sgtestinginstitute.onrender.com/api/v1/authenticate",
        {
            data: {
                username: "pgudi",
                password: "pgudi"
            }
        }
    );

    accessToken = await response.text();

    console.log("Generated Token:", accessToken);

});

test("Create Customer Endpoint", async ({ request }) => {

    const response = await request.post(
        "https://sgtestinginstitute.onrender.com/api/v1/customers",
        {
            data: {
                customerName: "TestCustomer001",
                emailId: "testcustomer001@gmail.com",
                location: "Belguam",
                customerDescription: "Provides support on Education Sector"
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        }
    );

    console.log("Status Code:", response.status());

    const body = await response.text();
    console.log("Response Body:", body);

    expect(response.status()).toBe(201);

});