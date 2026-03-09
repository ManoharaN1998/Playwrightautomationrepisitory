/*
   calling same function itself , it is called as recursion
*/

function getFactorial(num:number):number{
    if(num==1){
        return 1
    }
    return num * getFactorial(num-1)
}

console.log(getFactorial(5));
