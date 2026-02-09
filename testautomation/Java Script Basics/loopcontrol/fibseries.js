// Fib series:

// fn    sn    tn      fourth        fifth              sixth

// 0      1     1        2                3                   5                8    13     21     34    55

// fn=0; sn=1

// tn=fn+sn

// fn=sn

// sn=tn
 
// fourth=sn+tn
 
// fifth=tn+fourth
 
// sixth=fourth +fifth

/*
     Fib series:
    fn    sn    tn      fourth        fifth              sixth
    0      1     1        2                3                   5                8    13     21     34    55
    fn=0; sn=1
    tn=fn+sn
    fn=sn
    sn=tn
*/
 
fn=0
sn=1
console.log(fn);
console.log(sn);
 
for(let i=1;i<=10;i++)
{
    tn=fn+sn
    console.log(tn);
    fn=sn
    sn=tn
   
}
 
 
 
 