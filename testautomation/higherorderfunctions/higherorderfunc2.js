let radius=[2,5,3,4,6]

let area = function(radius){
    return Math.PI * radius * radius
}

let diameter=function(radius){
    return 2 * radius
}

let circumference = function(radius){
    return 2 * Math.PI * radius
}

let calculate= function(radius, businessLogic){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(businessLogic(radius[i]))
    }
    return result
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));