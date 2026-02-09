/*
 Logical operator
 The output of all Logical operator will be boolean value
 
 && -   and operator
 
 A  B   A && B
 0  0     0
 1  0     0
 0  1     0
 1  1     1
 
 ||   -   OR Operator
 
  A  B   A || B
  0  0     0
  1  0     1
  0  1     1
  1  1     1
 
  ! --  Not Oprator
  A   !A
  0    1
  1    0
*/
 
let x=40
let y=30
 
let res= (x>y && y<x)
console.log(res);
 
 