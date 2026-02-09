// concatenation of two Arrays
let a=[10,20,30,40]
let b=["Apple","Mango","Orange"]

let c=a.concat(b)
console.log(c);
console.log("---------------------------------");
//Reverse the Eleemnts in the array
let d=[10,6,2,4,15,9,7]
let e=d.reverse()
console.log(e);
console.log("---------------------------------");
//Sort the Eleemnts in the array
let d1=[10,6,2,4,15,9,7]
let y=d.sort((e,f)=>e-f)
console.log(y);

console.log("---------------------------------");
//slice teh Elements
let d2=[10,6,2,4,15,9,7]
let d3=d2.slice(3,5)
console.log(d3);
console.log("---------------------------------");
//splice teh Elements
let d4=[10,6,2,4,15,9,7]
let d5=d4.splice(3,3)
console.log(d5);
console.log("---------------------------------");
//includes the Elements
let d11=[10,6,2,4,15,9,7]
let d12=d11.includes(15)
console.log(d12);