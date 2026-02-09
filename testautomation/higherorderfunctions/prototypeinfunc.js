function student(){
    this.firstname="Santosh"
    this.coursename="Medical"

}
let o1=new student()
student.prototype.cityname="Bellary"

console.log(o1.firstname, o1.coursename,o1.cityname);

let o2=new student();
console.log(o2.firstname, o2.coursename, o2.cityname);

