/*
  String In-built Functions
*/
// Existance of String
let s1="Bangalore is garden city of Karantaka"
let v1=s1.startsWith("Bangalore")
console.log("Starts-with :"+v1);

let v2=s1.endsWith("Karantaka")
console.log("Ends-with :"+v2);

let v3=s1.includes("garden")
console.log("Contains :"+v3);

//Extract String
let s2="Programming"
let v4=s2.substring(3)
console.log(v4);
let v5=s2.substring(3,7)
console.log(v5);
