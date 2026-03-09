/*
   If a function return value, the same used in body of other functions
*/
function add1(a:number,b:number):number{
    return ( a + b)
}

function mult1(x:number, y:number):number{
    return (x * y)
}

function substraction(){
    let x:number = add1(20,40)
    let y:number= mult1(4,5)
    let res:number= (x - y)
    console.log("Substraction REsult :"+res);
    
}

substraction()