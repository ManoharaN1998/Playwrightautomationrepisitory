// 8. Print the number of digits in a given number
let digits=129
if(digits>0 && digits<=9){
    console.log("The number of digits in a given number is : 1")
}else if(digits>=10 && digits<=99)
{
        console.log("The number of digits in a given number is : 2")
}else if(digits>=100 && digits<=999)
{
        console.log("The number of digits in a given number is : 3")
}else if(digits>=1000 && digits<=9999)
{
        console.log("The number of digits in a given number is : 4")
}else if(digits>=10000 && digits<=99999)
{
        console.log("The number of digits in a given number is : 5")
}else
{
    console.log("Given number is invalid")
}