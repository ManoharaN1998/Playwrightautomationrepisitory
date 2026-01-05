const {test, expect} = require('@playwright/test');
const { clear } = require('node:console');
const { SourceTextModule } = require('node:vm')

test('First Test @sanity', async()=>{
    console.log("Sanity First Test case Execution!!");
    
})

test('Second Test @sanity', async()=>{
    console.log("Sanity Second Test case Execution!!");
    
})

test('Third Test @regression', async()=>{
    console.log("Regression Third Test case Execution!!");
    
})

test('Fourth Test @regression', async()=>{
    console.log("Regression Fourth Test case Execution!!");
    
})

test('Fifth Test @sanity@regression', async()=>{
    console.log("Fifth Test case Execution!!");
    
})


test('Sixth Test @sanity@regression', async()=>{
    console.log("Sixth Test case Execution!!");
    
})