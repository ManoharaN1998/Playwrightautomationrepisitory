let a = [4,2,6,1,3,5]

let cube = function(a){
    return a * a * a
}

let res1= a.map(cube)
console.log(res1);

let res2 = a.map(function(x){
    return x * x * x
})
console.log(res2);

let res3=a.map((x) =>{
    return x * x * x
})
console.log(res3);