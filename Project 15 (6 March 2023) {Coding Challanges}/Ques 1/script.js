let inputData=document.getElementById("input_data")
let btn=document.getElementById("btnn")
function reverseString(str){
       let strSplit=str.split("")
       let strRev=strSplit.reverse()
       let strJoin=strRev.join("")

       return strJoin;

}



function rev()
{
      setTimeout (()=>{inputData.value=(reverseString(inputData.value))},2000)
      
}


btn.addEventListener('click',rev)

