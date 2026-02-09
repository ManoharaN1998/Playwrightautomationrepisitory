/*
    if a function is returning a value, the return value of a function , we can use
    in teh body of another function
*/

function add1(x,y){
    return (x + y)
}

function sub1(x, y){
    let result=(x - y)
    return result
}

function multiplication(){
    a=add1(20,5)
    b=sub1(12,7)
    let res= (a * b)
    console.log("Multiplication Result :"+res);
    
}

multiplication()

console.log("------------------------------------------")

function sub12(m,a)
{
    return m-a
}

function division12(m,a){
    return m/a

}
function table12(a,b)
{
    AA1=sub1(1000,600)
    BB1=division12(1000,100)
    console.log(AA1,"\n",BB1)
    let result12=AA1*BB1
    console.log(result12)
}
table12()
