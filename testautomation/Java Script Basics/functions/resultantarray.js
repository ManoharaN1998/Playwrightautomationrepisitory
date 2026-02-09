// Resultant Array

function resultantArray(a,b) {
   
    let c = []
    let k = 0
    for (let i = 0; i < a.length; i++) {
        c[k] = a[i]
        k = k + 1;
    }

    for (let j = 0; j < b.length; j++) {
        c[k] = b[j]
        k++;
    }

    //Read Eleemnts from c array
    for (let x of c) {
        console.log(x);

    }
}

 let v1 = [2, 4, 6, 8]
 let v2 = [5, 15, 25, 35, 45]
resultantArray(v1, v2)
