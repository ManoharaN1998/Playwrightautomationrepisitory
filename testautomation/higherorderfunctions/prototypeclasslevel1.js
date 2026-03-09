class Employee{
    constructor(eid,ename){
        this.eid=eid
        this.ename=ename
    }
}

let e1=new Employee(1001,"Adams")
Employee.prototype.job="SalesMan"
Employee.prototype.calcIncentive=function(sal){
                                    let bonus=(sal*10/100)
                                    let comm=bonus+(sal * 5)/100
                                    let incentive=sal+bonus+comm
                                    console.log("Incentives :"+incentive)
                                }
console.log(e1.eid, e1.ename,e1.job);
e1.calcIncentive(20000)

let e2=new Employee(1002, "Santosh")
console.log(e2.eid, e2.ename,e2.job);
e2.calcIncentive(10000)

