let a = [4,2,6,1,3,5]

let even = function (a){
    if(a % 2 ==0){
        return a
    }
}

let res1= a.filter(even)
console.log(res1);
console.log("+++++++++++++++++++++++++++++++++++");
let odd=function(a){
    if(a % 2 ==1){
        return a
    }
}
let res2= a.filter(odd)
console.log(res2);

let res3=a.filter((x) =>{
    if(x % 2 ==1){
        return x
    }
})

console.log(res3);

