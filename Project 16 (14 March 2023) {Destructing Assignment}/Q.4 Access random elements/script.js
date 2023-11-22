function rendomEl(arr)
{
    let first,second,last,rest;

    [first,second,...rest]=arr;
    
    last=rest.pop()

    return [first,second,last]
}


let array=[4,2,1,3,6,7,8]

console.log(rendomEl(array))