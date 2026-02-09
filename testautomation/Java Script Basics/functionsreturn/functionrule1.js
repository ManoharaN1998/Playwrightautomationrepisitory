/*
    if a function is returning a value, the return value of a function , we can use
    as parameter to another function
*/

function add1(x,y){
    return (x + y)
}

function sub1(x, y){
    let result=(x - y)
    return result
}

function multiplication(a, b){
    let res= (a * b)
    console.log("Multiplication Result :"+res);
    
}

let v1=add1(10,5)
let v2=sub1(25,15)
multiplication(v1,v2)
console.log("--------------------");

multiplication(add1(5,4), sub1(40,30))

console.log("-----------------------------------------------");

function subtract(x,y)
{
    return (x-y)
}
function division(x,y){
    let result=(x/y)
    return result

}
function multiplication1(s,d)
{
    result=(s*d)
    console.log("Multiplication Result :"+result);

}

let a1=subtract(23,9)
let b1=division(12,4)
console.log(+a1,"\n",+b1)
multiplication1(a1,b1)
console.log(result)
multiplication1(subtract(20,10), division(1000,5))
