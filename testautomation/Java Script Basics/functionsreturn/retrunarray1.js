
function getOddNumbers(){
    let arr=[]

    for(let i=11;i<=31;i++){
        if(i % 2==1){
            arr.push(i)
        }
    }
    return arr;
}
console.log("REad Elements in Reverse Order");
// Read Elements in Reverse Order
for(let i=getOddNumbers().length-1;i>=0;i--){
    console.log(getOddNumbers()[i]);
    
}
console.log("REad half of Elements from Array");
// Read Elements in half of Elements f
for(let i=0;i<getOddNumbers().length/2;i++){
    console.log(getOddNumbers()[i]);
    
}

console.log("Sum of  Elements from Array");
// Sum of  Elements from Array
let sum=0
for(let i=0;i<getOddNumbers().length;i++){
    let v1=getOddNumbers()[i]
    sum=sum+v1
    
}
console.log("Sum of Elements :"+sum);
