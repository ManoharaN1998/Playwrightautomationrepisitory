function isPrime(num){
    let flag=0
    for(let i=2;i<num;i++)
    {
        if(num % i ==0){
            flag=flag+1
        }
    }
    if(flag==0){
        return true
    }else{
        return false
    }
}
console.log("---------------------------------");
console.log("I wouli like display Prime Numbers in between 1 to 50")
// I wouli like display Prime Numbers in between 1 to 50
for(let i=1;i<=50;i++){
    if(isPrime(i)==true){
        console.log(i);
        
    }
}

console.log("---------------------------------");
console.log("I wouli like show sum of prime numebrs in between 50 to 100")
// I wouli like show sum of prime numebrs in between 50 to 100
let sum=0
for(let i=50;i<=100;i++){
    if(isPrime(i)==true){
        sum=sum+i
        
    }
}
console.log("sum of Prime Numbers in between 50 to 100 :"+sum);
console.log("---------------------------------");
console.log("I would like show Count of prime numebrs in between 100 to 200")
// I would like show Count of prime numebrs in between 100 to 200
let count=0
for(let i=100;i<=200;i++){
    if(isPrime(i)==true){
        count=count+1
        
    }
}
console.log("Count of Prime Numbers in between 100 to 200 :"+count);