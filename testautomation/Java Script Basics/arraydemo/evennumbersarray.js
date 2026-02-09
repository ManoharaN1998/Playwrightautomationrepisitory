/*
        Write a program to assign Even numbers from 20 to 40 in an Array and Read Elements in reverse

        Step 1:  Read numbers from 20 to 40
        Step 2: Declare an Array
        Step 3: While Reading assign each Even numbers in to an array
        Step 4: Read Elements in revere order

*/
let a=[]
let k=0
for(let i=20;i<=40;i++){
    if(i%2==0){
        a[k]=i
        k=k+1
    }
    
}
//Read in Revere order

for(let i=a.length-1;i>=0;i--){
    console.log(a[i]);
    
}