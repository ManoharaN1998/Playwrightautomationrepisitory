function secondlargext(arr){
    arr.sort((a, b) => (b - a));   
    return arr[0]
}
console.log(secondlargext([12,4,54,43,23,45,32]))
 
console.log('----------------------')

function largest(arr1){
    return Math.max(...arr1)
}
console.log(largest([12,4,54,43,23,45,32]))

