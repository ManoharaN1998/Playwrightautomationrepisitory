
function getFactorial(num){
    if(num==1){
        return 1
    }
    return num * getFactorial(num-1)
}

let v1=getFactorial(5)
console.log("Teh Factorial Result :"+v1);
/*

5 * getFactorial(4)

5 * 4 * getFactorial(3)

5 * 4 * 3 * getFactorial(2)

5 * 4 * 3 * 2 * getFactorial(1)

5 * 4 * 3 * 2 * 1




*/
