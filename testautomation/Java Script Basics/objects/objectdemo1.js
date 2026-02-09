let student={
    "fname":"Santosh",
    "jobname":"Reserarch Analyst",
    "cityname":"Dallas"
}

console.log(student);

//Read value from object
let v1=student.fname
console.log(v1);
let v2=student["fname"]
console.log(v2);

//Add proeprty name and value
student.age=22
console.log(student);
student["statename"]="Karnataka"
console.log(student);

//Modify the Existing property value
student.statename="California"
console.log(student);
//delete proeprty value
delete student.statename
console.log(student);