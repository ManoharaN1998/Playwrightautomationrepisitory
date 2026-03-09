/*
   declare an object 
   read values from object
*/

let student:{id:number, fname:string, age:number, course:string, city:string}={
    id:101,
    fname:"Santosh",
    age:22,
    course:"Research",
    city:"Raichur"
}

// console.log(student);
// console.log(student.fname);
// console.log(student["city"]);

// student.college = "Govt Degree College";
// console.log(student);

// delete student.college
// console.log(student);

for(let i:any in student){
    console.log(student[i]);
    
}