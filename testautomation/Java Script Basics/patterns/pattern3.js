/*
    5
    5  5
    5  5  5
    5  5  5  5
    5  5  5  5  5

    row?  5
    cols? 

*/
pattern=""
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        pattern=pattern+"5 "
    }
    pattern=pattern+"\n"
}

console.log(pattern);
