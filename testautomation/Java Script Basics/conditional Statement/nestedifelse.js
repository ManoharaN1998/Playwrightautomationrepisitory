/*
    Nested if ..else statement :
if input should be evaluate by applying 'N' number condition, we should prefer Nested if ..else statement
 
*/
 
let marks =100
if(marks<=100 && marks>=70){
    console.log("The Grade of the student FCD!!!");
}else if(marks<70 && marks>=60){
    console.log("The Grade of the student First class!!!");
}else if(marks<60 && marks>=50){
    console.log("The Grade of the student Second class!!!");
}else if(marks<50 && marks>=35){
    console.log("The Grade of the student Pass class!!!");
}else if(marks<35 && marks>=0){
    console.log("Thestudent Result has failed!!!");
}else{
    console.log("Invalid Marks!!!!");
   
}
 