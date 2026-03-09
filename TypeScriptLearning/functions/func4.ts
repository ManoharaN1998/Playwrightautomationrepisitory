/*
   If a function return value, the same used as parameter of to other function
*/
function add1(a:number,b:number):number{
    return ( a + b)
}

function mult1(x:number, y:number):number{
    return (x * y)
}

function substraction(a:number,b:number){
    let res=(a - b)
    console.log("substraction Result :"+res);
    
}

substraction(add1(40,50), mult1(10,5))