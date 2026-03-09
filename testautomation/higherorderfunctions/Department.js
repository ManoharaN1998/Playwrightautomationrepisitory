class Department{
    constructor(deptno, dname, loc){
        this.deptno=deptno
        this.dname=dname
        this.loc=loc
    }

    getDeptNo(){
        console.log("Department Number :"+this.deptno); 
    }

    getDeptName(){
        console.log("Department Name :"+this.dname)
    }

    getDeptLocation(){
        console.log("Department Location :"+this.loc)
    }
}
module.exports = {Department}