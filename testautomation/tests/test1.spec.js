const {test, expect} = require('@playwright/test')

test('Assertion First', async () =>{
    expect(35).toBe(35)
})

test.skip('Assertion Second', async () =>{
    expect(15.175).toBe(15.175)
})

test('Assertion Third', async () =>{
    expect(400).toBeGreaterThanOrEqual(200)
})

test('Assertion Fourth', async ()=>{
    expect(100).toBeLessThan(200)
})

test("Assertion Fifth", async () =>{
    expect(' S G Software Testing').toContain('Softwareee')
})

test("Assertion Sixth", async () =>{
    expect("S G Software Testing".includes("Software")).toBeTruthy()
})