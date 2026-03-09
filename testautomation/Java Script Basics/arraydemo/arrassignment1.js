// Assignments on Array:

const { count } = require("node:console")

let a = []
for (let i = 81; i >= 41; i--) {
    if (i % 2 !== 0) {
        a.push(i)
    }
}
console.log(a)
console.log("--------------------------------------------")

// 2. Programmatically assign 9th table result in an array in reverse order, Read Elements

let a1=[]
for(let i=10;i>=1;i--)
{
    a1.push(9*i)
}
for(i=0;i<a1.length;i++)
{
    console.log(a1[i])
}
    console.log("--------------------------------------------")

// 3. Programmatically assign the square of the first 15 numbers
let a2=[]
for(let i=0;i<=15;i++){
        {
            a2.push(i*i)
        }
    }
    for(i=1;i<a2.length;i++)
        {
            console.log(a2[i])
        }
 console.log("--------------------------------------------")

// 4. Programmatically assign the cube of numbers from 10 to 1 and read elements
let a3=[]
for(i=10;i>=1;i--)
{
    a3.push(i*i*i)
}
for(i=0;i<a3.length;i++)
{
    console.log(a3[i])
}
console.log("--------------------------------------------")

// 5. Read First half of the Elements from an Array
let arr5=[1,2,3,4,5,6,7,8,9,10]
arr5.push(arr5)
for(i=0;i<=4;i++)
{
    console.log(arr5[i])
}
console.log("--------------------------------------------")

// 6. Read Second half of the Elements from an Array
let arr6=[1,2,3,4,5,6,7,8,9,10]
arr6.push(arr6)
for(i=4;i<=9;i++)
{
    console.log(arr6[i])
}
console.log("--------------------------------------------")

// 7. Find sum of all elements in an array
let arr7 = [1, 2, 3, 4, 5, 6, 7]
let sum = 0
for (let num of arr7) {
    sum += num
}
console.log("Sum =", sum)
console.log("--------------------------------------------")
// 8. Without sort function sort the Elements in the Array?

let arr = [5, 2, 8, 1, 4]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) { 
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Sorted Array:", arr);
console.log("--------------------------------------------")
// 9. Without using length method, find number of Elements in an array
let arr8 = [1,2,3,4,5,6,7,8];
let count1 = 0;

for (let value of arr8) {
    count1++;
}

console.log("Number of elements =", count1);
console.log("-----------------------------------------");


// 10. without using concat function, combine the elements from two arrays 
let d11 = [10,6,2,4,15,9,7]
let d13 = [2,3,4,5]
let d12 = []
let k = 0
// First array
for (let i = 0; i < d11.length; i++) {
    d12[k] = d11[i];
    k++;
}
// Second array
for (let i = 0; i < d13.length; i++) {
    d12[k] = d13[i];
    k++;
}
console.log(d12);
