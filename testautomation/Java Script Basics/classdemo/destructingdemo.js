//Destrcturing on Array
let arr=[10,20,30,40,50]

const [x1,x2]= arr
console.log(x1,x2);
//first and last eleemnt
const[a1,,,,a2]=arr
console.log(a1,a2);
console.log("------------------------");
//destructing on String
let s="WELCOME"
const [s1,s2,s3]=s
console.log(s1,s2,s3);
console.log("------------------------");
//destructing on object
let fruits={
    "id":101,
    "fruitname":"Mango",
    "price":35.75,
    "quantity":"1 KG"
}

const {id,fruitname}=fruits
console.log(id,fruitname);
