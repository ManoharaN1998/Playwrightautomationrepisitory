// Assignments on Patterns: for, While & Do While

// 1)

// 1 

// 1  2

// 1  2  3

// 1  2  3  4

// 1  2  3  4  5

pattern=""
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        pattern=pattern+j+" "
    }
    pattern=pattern+"\n"
}
console.log(pattern)

console.log("--------------------------------------")
// 2)

// 1

// 2  2

// 3  3  3

// 4  4  4  4

// 5  5  5  5  5

pattern=""
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        pattern=pattern+i+" "
    }
    pattern=pattern+"\n"
}
console.log(pattern)
console.log("--------------------------------------")


// 3)

// 1 2 3 4 5

// 1 2 3 4

// 1 2 3

// 1 2

// 1

pattern=""
for(let i=5;i>=1;i--)
{
    for(let j=1;j<=i;j++)
    {
        pattern=pattern+j+" "
    }
    pattern=pattern+"\n"
}
console.log(pattern)

console.log("--------------------------------------")

// 4)

// *

// * *

// * * *

// * * * *

// * * * *  *

pattern=""
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        pattern=pattern+"* "
    }
    pattern=pattern+"\n"
}
console.log(pattern)

console.log("--------------------------------------")

// 5)

// A

// B C

// D E F

// G H I J

// K L M N O

let i = 1;
let ch = 65;
let pattern1 = ""

while (i <= 5) {

    let j = 1

    while (j <= i) {
        pattern1 += String.fromCharCode(ch) + " "
        ch++;
        j++;
    }

    pattern1 += "\n"
    i++;
}console.log(pattern1)
console.log("--------------------------------------")

// 6)

// 1

// 2 3

// 4 5 6

// 7 8 9 10

// 11 12 13 14 15

let i2 = 1
let num=0
let pattern2=""
while(i2<=5){
    let j=1
    while(j<=i2)
    {
        pattern2+=num+" "
        j++
        num++
    }
    pattern2=pattern2+"\n"
    i2++
}console.log(pattern2)
console.log("--------------------------------------")

// 7)

// 1

// 3 5

// 7 9 11

// 13 15 17 19

// 21 23 25 27 29

let i3 = 1;
let num11 = 1;        
let pattern3 = "";

while (i3 <= 5) {

    let j1 = 1;

    while (j1 <= i3) {
        pattern3 += num11 + " ";
        num11 += 2;  
        j1++;
    }

    pattern3 += "\n";
    i3++;
}

console.log(pattern3);
console.log("------------------------------------");

// 8)

// 5 5 5 5 5

// 4 4 4 4

// 3 3 3

// 2 2

// 1


let pattern10 = "";

for (let i = 5; i >= 1; i--) {

    for (let j = 1; j <= i; j++) {
        pattern10 += i + " ";
    }

    pattern10 += "\n";
}

console.log(pattern10);
console.log("--------------------------------------");



// 9)

// * * *

// * * *

// * * *

// * * *

// * * *

// * * *

// * * *

// * * *

// * * *

// * * *
 let i12 = 1;
let pattern15 = "";

do {
    let j = 1;

    do {
        pattern15 += "* ";
        j++;
    } while (j <= 3);

    pattern15 += "\n";
    i12++;

} while (i12 <= 10);

console.log(pattern15);


 