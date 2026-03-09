/*
   Count of number in beteen 1 to 100 which are divisible by 9
*/
//Traditional Function
function getNumbers(start,end){
    if(start>end){
        return 0;
    }
    let count=0
    for(let i=start;i<=end;i++){
        if(i % 9 ==0){
            count=count+1
        }
    }
    return count;
}
let count1=getNumbers(1,100)
console.log("Count of Numbers in betwen 1 to 100 and divisible by 9 :"+count1);

console.log("--------------------------");
//Ananymous  Function
let countNumbers2=function (start,end){
    if(start>end){
        return 0;
    }
    let count=0
    for(let i=start;i<=end;i++){
        if(i % 9 ==0){
            count=count+1
        }
    }
    return count;
}
let count2=countNumbers2(100,200)
console.log("Count of Numbers in betwen 100 to 200 and divisible by 9 :"+count2);
console.log("--------------------------");
//Arrow  Function
let countNumbers3= (start,end)=>{
    if(start>end){
        return 0;
    }
    let count=0
    for(let i=start;i<=end;i++){
        if(i % 9 ==0){
            count=count+1
        }
    }
    return count;
}
let count3=countNumbers3(50,100)
console.log("Count of Numbers in betwen 50 to 100 and divisible by 9 :"+count3);