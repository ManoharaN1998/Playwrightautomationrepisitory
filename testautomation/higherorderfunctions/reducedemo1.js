let a = [4,2,6,1,3,5]

let sumResult=function(a){
    let sum=0
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    return sum
}
console.log(sumResult(a));

let sumResultNew=a.reduce((acc,curr)=>{
    return acc=acc+curr
},0)

console.log(sumResultNew);

