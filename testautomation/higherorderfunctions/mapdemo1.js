let a = [4,2,6,1,3,5]

let double = function(a){
    return 2 * a
}

let res1 = a.map(double)
console.log(res1);

let res2= a.map(function(a){
    return 2 * a
})
console.log(res2);

let res3=a.map((x) =>{
    return 2 * x
})
console.log(res3);
