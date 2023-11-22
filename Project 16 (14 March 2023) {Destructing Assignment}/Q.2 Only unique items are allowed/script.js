function uniqueNum(num)
{
    let set=new Set(num)

    return set;
}

let arr=[1,2,3,43,2,1,34,4,2,21,1,33,3,2]
console.log(uniqueNum(arr))