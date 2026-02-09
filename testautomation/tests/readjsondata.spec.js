const {test, expect} = require('@playwright/test')
import testData1 from './../dataFiles/testdata1.json'
import testData2 from './../dataFiles/testdata2.json'
import NestedObject from './../dataFiles/nestedjsonobject.json'
test("Read Data From JOSN Object", async({page})=>{
    console.log("Employee Id :"+testData1.eid);
    console.log("Employee Name :"+testData1.ename);
    console.log("Employee Job :"+testData1.job);
    console.log("Employee Sal :"+testData1.sal);
})

test.only("Read Data From JSON Array Object", async({page})=>{
    // for(let data of testData2){
    //     console.log("Employee Id :"+data.eid);
    //     console.log("Employee Name :"+data.ename);
    //     console.log("Employee Job :"+data.job);
    //     console.log("Employee Sal :"+data.sal);
    // }
    console.log("Employee Id :"+testData2[1].eid);
    console.log("Employee Name :"+testData2[1].ename);
    console.log("Employee Job :"+testData2[1].job);
    console.log("Employee Sal :"+testData2[1].sal);
})

test("Read Data from Nested JOSN Object", async({page})=>{
    console.log("Employee Id :"+NestedObject.santu.eid);
    console.log("Employee Name :"+NestedObject.santu.ename);
    console.log("Employee Job :"+NestedObject.santu.job);
    console.log("Employee Sal :"+NestedObject.santu.sal);
    console.log("Employee Id :"+NestedObject.vinu.eid);
    console.log("Employee Name :"+NestedObject.vinu.ename);
    console.log("Employee Job  :"+NestedObject.vinu.job);
    console.log("Employee Sal :"+NestedObject.vinu.sal);
})