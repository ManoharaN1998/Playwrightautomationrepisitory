/*
  how to declare an array
  how to assign elements
  how to read Elements
*/

let arr:number[]= [10,20,30,40,50,60]
console.log(arr);
//Read Elements using for Loop

for(let i:number=0;i<arr.length;i++){
    console.log(arr[i]);
    
}
console.log("----------------------------");
//Reverse Order
for(let j:number=arr.length-1;j>=0;j--){
    console.log(arr[j]);
    
}
console.log("----------------------------");

// apply for of Loop
for(let x:number of arr){
    console.log(x);
    
}

console.log("----------------------------");
for(let y:number in arr){
    console.log(arr[y]);
    
}