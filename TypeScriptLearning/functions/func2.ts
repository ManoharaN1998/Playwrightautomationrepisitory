/*

2. functiosn which return value

*/

function getFactorial(num:number):number{
    let fact:number=1
    for(let i:number=num;i>=1;i--){
        fact =fact* i
    }
    return fact
}

let v1:number = getFactorial(5)
console.log(v1);
