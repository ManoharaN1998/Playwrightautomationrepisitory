let radius=[2,5,3,4,6]

let calculateArea= function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(Math.PI * radius[i] * radius[i])
    }
    return result
}

console.log(calculateArea(radius));

let calcualteDiameter= function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * radius[i])
    }
    return result
}

console.log(calcualteDiameter(radius));

let calculateCircumference = function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * Math.PI * radius[i])
    }
    return result
}

console.log(calculateCircumference(radius));

