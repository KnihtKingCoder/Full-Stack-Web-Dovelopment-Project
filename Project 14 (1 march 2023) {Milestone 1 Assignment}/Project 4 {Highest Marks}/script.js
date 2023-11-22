let mark=[3,6,8,9,0];
let max=mark[0];
// for(let i=0;i<5;i++)
// {
//     if(max<mark[i])
//     {
//         max=mark[i];
//     }
// }

for(let i=0;i<5;i++)
{
    max<mark[i]?max=mark[i]:max;
}
console.log("The highest marks is : "+max)