
const {SingleDimenstionalArray} = require('./exportarrayactions')

let o = new SingleDimenstionalArray()
let a=[10,20,30,40,50,60,70,80]

o.readFirstHalfOfElements(a)
console.log("-------------");
o.readSecondHalfOfElements(a)
console.log("-------------");
o.readFirstHalfOfElementsInReverse(a)
console.log("-------------");
o.readSecondHalfOfElementsInReverse(a)