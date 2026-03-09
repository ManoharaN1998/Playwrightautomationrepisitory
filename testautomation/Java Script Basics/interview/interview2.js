function isanagram(str1,str2){
    let s1=str1.split('').sort().join('')
    let s2=str2.split('').sort().join('')
    return s1==s2
}
console.log(isanagram('Malayalam','Malayalam'))

console.log('----------------------')


pattern1 =""
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        pattern1=pattern1+i+""
    }
    pattern1=pattern1+"\n"
}
console.log(pattern1) 

console.log('----------------------')

for(let k=1;k<=100;k++)
{
    if(k%7==0){
        console.log(k)
    }
}
console.log('----------------------')

//4. Write a program to print square of numbers from 1 to 10
for(let m=1; m<=10;m++)
{
    console.log(m*m)
}

//5. Write a program to print cube of each  numbers from 20 to 1
console.log('----------------------')
for(let c=20; c>=1;c--){
    console.log(c*c*c)
}

//6. Write a program to find sum of numbers in between 1 t 10
console.log('----------------------')
let sum=0
for(let i=1;i<=10;i++){
    sum=sum+i
}
console.log("Sum is " +sum)

//10. Write a program to find count of numbers in between 100 to 200 which are divisible by 8
console.log("------------------------------------------")
let count=0
for(let i=100; i<=200; i++)
{
    if(i%8==0)
    {
        // console.log(i)
        count++
    }
}
console.log("count is " + count)   

//8. Write a program to display Mathematical Table for a given number
let count1=5
for (let i=1 ; i<=10; i++){
        console.log(count1+"*"+i+"="+count1*i)
}

// print numbers in sequence order
// for(i=10; i>=1; i--)
// {
//     console.log(i)
// }

let i=10
do{
    console.log(i)
    i++
}while(i<=20);