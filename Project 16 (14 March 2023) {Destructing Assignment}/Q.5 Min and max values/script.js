function minAndMax(elemnts)
{
     let min,max;
     min=Math.min(...elemnts)
     max=Math.max(...elemnts)
     let obj=new Object()
     obj.Min=min;
     obj.Max=max;

     return obj;
}

let arr=[34,21,89,3,2]
console.log(minAndMax(arr))