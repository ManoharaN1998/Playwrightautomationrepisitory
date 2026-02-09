
let i=10

function displayNumbers(){
    console.log(i);
    i=i+1
    if(i<=20){
        displayNumbers()
    }
}


displayNumbers()