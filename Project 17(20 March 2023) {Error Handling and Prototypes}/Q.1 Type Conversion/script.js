

function convertToNumber(str)
{
   try {
    let num=Number(str)
    if(isNaN(num))
    {
        throw "Invalid Number";
    }
    else
    return num;
   } catch (error) {
        return error;
   }
}


console.log(convertToNumber("123"))
console.log(convertToNumber("hii"))
