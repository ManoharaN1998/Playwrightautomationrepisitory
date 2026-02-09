class Customer
{

    setCustomerId(){
        return 101
    }

    setCustomerName(){
        return "Lenovo"
    }

    setCustomerLoc(){
        return "California"
    }
}
let o = new Customer()
console.log(o.setCustomerId());
console.log(o.setCustomerName());
console.log(o.setCustomerLoc());