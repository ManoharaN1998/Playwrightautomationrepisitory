class Customer{

    constructor(cid,custName,loc){
        this.cid=cid
        this.custName=custName
        this.loc=loc
    }

    showCustoemrDetails(){
        console.log(this.cid);
        console.log(this.custName);
        console.log(this.loc);
    }
}

let o1=new Customer(101,"Dell","Ne York")
o1.showCustoemrDetails()

let o2=new Customer(102,"LG","Boston")
o2.showCustoemrDetails()