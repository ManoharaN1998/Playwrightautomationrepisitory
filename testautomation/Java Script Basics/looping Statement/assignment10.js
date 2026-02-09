//10. Write a program to find count of numbers in between 100 to 200 which are divisible by 8
let count = 0;

for (let i = 100; i <= 200; i++) {
    if (i % 8 === 0) {
        count++;
    }
}

console.log("Count =", count);
console.log("------------------------------------------")
//-------------------------------------------------------------------------

let i = 100;
let count1 = 0;

while (i <= 200) {
    if (i % 8 === 0) {
        count1++;
    }
    i++;
}

console.log("Count =", count1);
console.log("------------------------------------------")
//-------------------------------------------------------------------------

let i1 = 100;
let count3 = 0;

do {
    if (i1 % 8 === 0) {
        count3++;
    }
    i1++;
} while (i1 <= 200);

console.log("Count =", count3);
