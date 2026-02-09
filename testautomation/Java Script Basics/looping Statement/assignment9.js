//9. write a program to print all Mathematical tables from 1 to 20 
for (let num = 1; num <= 20; num++)
    {
        console.log("Table of " + num)
        for (let i = 1; i <= 10; i++)
            {
                console.log(num + " x " + i + " = " + (num * i));
            }
            console.log("------------------");
}
// ------------------------------------------------------------------
let num = 1;

while (num <= 20) {
    console.log("Table of " + num);

    let i = 1;
    while (i <= 10) {
        console.log(num + " x " + i + " = " + (num * i));
        i++;
    }

    console.log("------------------");
    num++;
}

// ------------------------------------------------------------------
let num2 = 1;

do {
    console.log("Table of " + num2);

    let i = 1;
    do {
        console.log(num2 + " x " + i + " = " + (num2 * i));
        i++;
    } while (i <= 10);

    console.log("------------------");
    num2++;
} while (num2 <= 20);

// ------------------------------------------------------------------
