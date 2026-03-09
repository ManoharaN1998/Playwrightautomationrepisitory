/*
    1. Traditional Function
    2. Anonymous Function
    3. Arrow Function
*/
// Traditional Function

function findFact1(num)
{
    let fact=1
    for(let i=num;i>=1;i--)
    {
        fact=fact * i;
    }
    console.log("Factorial of num "+num+" is "+fact);
    
}
findFact1(5)
console.log("--------------------------------------");
// Anonymous Function
let resultFact=function (num)
{
    let fact=1
    for(let i=num;i>=1;i--)
    {
        fact=fact*i
    }
    console.log("Factorial of num "+num+" is "+fact);
}
resultFact(6)
console.log("--------------------------------------");
//Arrow Function

let resultNewFact=(num)=>{
    let fact=1
    for(let i=num;i>=1;i--)
    {
        fact=fact*i
    }
    console.log("Factorial of num "+num+" is "+fact);
}

resultNewFact(7)