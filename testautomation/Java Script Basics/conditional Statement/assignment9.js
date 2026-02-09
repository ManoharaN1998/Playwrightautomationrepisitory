//Using nested ifelse condition
// 7. Based on Traffic Signal Input print the behavior of bike rider
let Signal="green"
if(Signal==="red")
{
    console.log("Red color indicates rider should drive within 30 kmph")
}else if(Signal=="blue")
{
        console.log("Blue color indicates rider should drive within 60 kmphs")
}else if(Signal=="green")
{
        console.log(" green color indicates rider should drive within 100 kmph")
}else
{
        console.log("Invalid signal so the  action required")

}