import { test, expect } from '@playwright/test'

test.describe.serial('Functional Testcases', () => {

    test('First Test', async ({ page }) => {
        console.log("It is a First Test case!!!")
    })

    test('Second Test', async ({ page }) => {
        console.log("It is a Second Test case!!!")
    })

    test('Third Test', async ({ page }) => {
        console.log("It is a Third Test case!!!")
    })

    test('Fourth Test', async ({ page }) => {
        console.log("It is a Fourth Test case!!!")
    })

     test('Fifth Test', async ({ page }) => {
        console.log("It is a Fifth Test case!!!")
    })

    test('Sixth Test', async ({ page }) => {
        console.log("It is a Sixth Test case!!!")
    })
})