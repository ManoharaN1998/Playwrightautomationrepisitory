//Create Number Object
let x=new Number(10)
console.log(x);
console.log(x.toString());
// Assign value directly
let a=100
let b=12.75
let c=10e3
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
//isInteger() it verifies teh data is numeric, if yes, it provides true
console.log(Number.isInteger(a));
console.log(Number.isInteger(b));
console.log(Number.isInteger(c));
//parseInt , This function converts String representation of number into number
let v1="450"
console.log("DataType :"+typeof(v1));
let v2=Number.parseInt(v1)
console.log("DataType :"+typeof(v2));
//parseFloat, This function converts String representation of float into float
let a1="40.125"
console.log("DataType :"+typeof(a1));
let a2=Number.parseFloat(a1)
console.log("DataType :"+typeof(a2));