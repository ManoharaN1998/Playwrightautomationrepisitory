/*
  String In-built Functions
*/
// trim function removes space on both sides
let s1="    Playwright    "
console.log(s1);

console.log(s1.trim());
//Remove spacs on left side alone
console.log(s1.trimStart());
//Remove space on right side alone
console.log("Length of s1 :"+s1.length);

console.log(s1.trimEnd());
console.log(s1.trimEnd().length);

//Repeat function
let s2="Playwright"
console.log(s2.repeat(4));

//slice
let s3="The sky color is blue"
let v3=s3.slice(4,13)
console.log(v3);
