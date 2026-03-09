/*
    The number which is divisiable by 1 and itself
    input: 9
    2, 3, 4, 5 ,6 7,8
    9 % 2 =>
    9%3 => 0
*/
 
flag=0
num=31
for(let i=2;i<num;i++)
{
    if(num % i ==0)
    {
        flag=flag+1
        break
    }
}
 
if(flag==0){
    console.log(num+" is Prime Number");
   
}else{
    console.log(num+" is not Prime Number");
}
 