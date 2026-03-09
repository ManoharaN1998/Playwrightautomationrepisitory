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
console.log("+++++++++++++++++++++++++++++++++++");

let c= [7,96,54,8,6,4,3]

let even1 = function(c)
{
    if(c%2==0)
    {
        return c
    }
}
let result=c.filter(even1)
console.log(result)