// Assignments:

const { constants } = require("node:buffer")

// 1. Without using length function find number of characters in given string
let str="Manohara   N"
let count=0
for(let ch of str)
{
    count=count+1   
}
console.log("length :"+count); 
console.log("----------------------------------")
// 2. The given String is "Bangalore and Mysore", write a program to display "Mysore and Bangalore"
let str1 = "Bangalore and Mysore"
let parts = str1.split(" and ");
let result = parts[1] + " and " + parts[0]
console.log(result)
console.log("----------------------------------")
// 3. Reverse the given String without using reverse in built function
//     a. charAt

//     b. substring

let str2 = "charAt"
let reverse = ""
for (let i = str2.length - 1; i >= 0; i--) 
    {
        reverse += str2[i]
    }
    console.log(reverse)
console.log("----------------------------------")


let str3 = "substring"
let reverse1 = ""
for (let i = str3.length - 1; i >= 0; i--) 
    {
        reverse1 += str3[i]
    }
    console.log(reverse1)
console.log("----------------------------------")


// 4. Write a program to display pattern

// a)

// P

// P R 

// P R O

// P R O G

// P R O G R

// P R O G R A

// P R O G R A M

let word = "PROGRAM"
for (let i = 1; i <= word.length; i++) {
    let line = ""
    for (let j = 0; j < i; j++) {
        line += word[j] + " "
    }
    console.log(line)
}
console.log("----------------------------------")


// b)

// P R O G R A M

// P R O G R A 

// P R O G R 

// P R O G

// P R O 

// P R 

// P 
let word1 = "PROGRAM"
for (let i = 0; i <= word1.length; i++) {
    let line = ""
    for (let j = 6; j >= i; j--) {
        line += word1[j] + " "
    }
    console.log(line)
}
console.log("----------------------------------")

// 5. The given String "SUNDAYMONDAYTUESDAYWEDNESDAYTHURSDAYFRIDAYSATURADY"

//     a) without using replace/split remove each occurance of DAY


let str4 = "SUNDAYMONDAYTUESDAYWEDNESDAYTHURSDAYFRIDAYSATURADY"
let result3 = ""

for (let i = 0; i < str4.length; i++) {
    if (str4.substring(i, i + 3) === "DAY") {
        i = i + 2
        } 
        else {
            result3 += str4[i]
        }
    }
    console.log(result3)
console.log("----------------------------------")

//     b) without using replace/split add "," after each occcurance of DAY
let str5 = "SUNDAYMONDAYTUESDAYWEDNESDAYTHURSDAYFRIDAYSATURADY"
let result4 = ""
for (let i = 0; i < str5.length; i++) {
    if (str5.substring(i, i + 3) === "DAY") {
        result4 += "DAY,"
        i = i + 2
        } 
        else {
            result4 += str5[i]
        }
    }
    console.log(result4)