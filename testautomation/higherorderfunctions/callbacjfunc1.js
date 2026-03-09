
function greeting(name, callback){
    console.log("Hi/Hello "+name);
    callback()
    
}

function wishing(){
    console.log("Good Morning");
}

greeting("Santosh", wishing)
greeting("Manohara",wishing)
console.log("Very Good Afternoon")
greeting("Adams", function say(){
    console.log("Welcome to JavaScript Leanring");
    
})
console.log("---------------------------------------------");

function fooforder(Food,paymentmethod){
    console.log("hi hellow" +Food)
    paymentmethod()
}
 function fooddelivery(){
    console.log("food delivery successfully done")
 }
fooforder(" Manohara",fooddelivery)

console.log("---------------------------------------------");
function orderFood(food, paymentMethod){
    console.log("You ordered " + food);
    paymentMethod();   // execute payment
}
function payByUPI(){
    console.log("And Manohara Your food payment is done by UPI ")
}
function payByCard(){
    console.log("And Manohara Your food payment is done by Card ")
}
orderFood("Pizza", payByUPI);
orderFood("Burger", payByCard);

