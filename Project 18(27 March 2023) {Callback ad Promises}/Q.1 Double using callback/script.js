/*
function dbNumber(arr,callabck)
{
    let dbarritem=arr.map((el)=>{
        return  el*2
    })

    return callabck(dbarritem)
}

function printarr(arr)
{
    console.log(arr)
}

const arr=[1,2,3,4,5]
dbNumber(arr,printarr)

*/


function dbNumber(arr,callabck){
    let dbarr=arr.map((el)=>{
        return callabck(el)
    })

    return dbarr;
}

function callback(num)
{
    return num*2;
}

const arr=[1,2,3,4,5]

let db=dbNumber(arr,callback)
console.log(db);