
class SingleDimenstionalArray{
    readFirstHalfOfElements(arr)
    {
        for(let i=0;i<arr.length/2;i++)
        {
            console.log(arr[i]);
            
        }
    }

    readSecondHalfOfElements(arr)
    {
        for(let i=arr.length/2;i<arr.length;i++)
        {
            console.log(arr[i]);
            
        }
    }

    readFirstHalfOfElementsInReverse(arr)
    {
        for(let i=arr.length/2-1;i>=0;i--)
        {
            console.log(arr[i]);
            
        }
    }

    readSecondHalfOfElementsInReverse(arr)
    {
        for(let i=arr.length-1;i>=arr.length/2;i--)
        {
            console.log(arr[i]); 
        }
    }
}

module.exports = {SingleDimenstionalArray}