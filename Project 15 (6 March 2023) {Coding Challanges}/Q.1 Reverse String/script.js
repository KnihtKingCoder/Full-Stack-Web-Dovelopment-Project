let data=document.getElementById("inp1")
let btn=document.getElementById("btnn")

function reverseString(str)
{
      let splitStr=str.split("")
      let revstr=splitStr.reverse()
      let joinstr=revstr.join("")

      return joinstr;
}


btn.addEventListener("click",()=>{
   setTimeout(() => {
    data.value=(reverseString(data.value)
)}, 2000);
})