
function greeting(name, callback){
    console.log("Hi/Hello "+name);
    callback()
    
}

function wishing(){
    console.log("Good Morning");
}

greeting("Santosh", wishing)

greeting("Adams", function say(){
    console.log("Welcome to JavaScript Leanring");
    
})