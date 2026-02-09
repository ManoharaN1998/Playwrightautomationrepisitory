class Customer{
    constructor(){
        this.cid=101;
        this.custName="Dell Service";
        this.location="Dallas";
    }

    showCustomerDetails(){
        console.log(this.cid,this.custName,this.location);
        
    }
}

let o=new Customer()
o.showCustomerDetails()

let o1=new Customer()
o1.showCustomerDetails()