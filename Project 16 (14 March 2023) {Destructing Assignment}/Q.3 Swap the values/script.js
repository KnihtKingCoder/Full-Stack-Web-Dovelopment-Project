function sawpValues(arg1,arg2)
{
   [arg1,arg2]=[arg2,arg1];

   return [arg1,arg2]
}

let num1=5,num2=10;
[num1,num2]=sawpValues(num1,num2)
console.log(num1,num2)