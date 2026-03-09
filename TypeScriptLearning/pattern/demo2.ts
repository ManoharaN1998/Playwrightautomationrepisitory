/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
let str=""
let i:number=1
while(i<=5){

    let j:number=1
    while(j<=i){
        str=str+j+" "
        j++
    }
    str=str+"\n"
    i++
}

console.log(str);
