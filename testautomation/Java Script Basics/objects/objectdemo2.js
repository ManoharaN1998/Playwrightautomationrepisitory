let student={
    "fname":"Santosh",
    "jobname":"Reserarch Analyst",
    "cityname":"Dallas"
}

//Read All Values
for(let x in student){
    console.log(student[x]);
    
}
console.log("----------------------------");

//Read All Key and Value
for(let x in student){
    let data=x +" -> "+student[x]
    console.log(data);
    
}
