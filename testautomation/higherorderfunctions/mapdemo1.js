let a = [4,2,6,1,3,5]

let double = function(a){
    return 2 * a
}

let res1 = a.map(double)
console.log(res1);

let res2= a.map(function(a){
    return 2 * a
})
console.log(res2);

let res3=a.map((x) =>{
    return 2 * x
})
console.log(res3);

console.log("--------------------------------------------");

let b=[3,4,2,3,4,5,6,7,8,9,9]
let trible=function(b)
{
    return b * b * b
}
let result=b.map(trible)
console.log(result)

let result2=b.map (function(b)
{
    return b * b * b
})
console.log(result2)

let result3=b.map ((x)=>
{
    return x * x * x * 2
})
console.log(result3)
