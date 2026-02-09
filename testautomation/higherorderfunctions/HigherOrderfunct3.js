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

Array.prototype.calculate= function(businessLogic){
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(businessLogic(this[i]))
    }
    return result
}

// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));
console.log(radius.map(diameter));
console.log(radius.calculate(diameter));


