let employees={
    "id":101,
    "ename":"Santosh",
    "job":"Sales Manager",
    "salary":50000,
    "bonus":function(){
                return (this.salary * 20)/100
            },
    "commission":function(){
                return (this.salary * 5)/100
            },
    "incentive":function(){
                    return(this.salary + this.bonus() + this.commission())
                }

}

//Read values
console.log(employees.id);
console.log(employees.ename);
console.log(employees.job);
console.log(employees.salary);
console.log(employees.commission());
console.log(employees.bonus());
console.log(employees.incentive());