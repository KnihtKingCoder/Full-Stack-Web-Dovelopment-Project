let inputData=document.getElementById("input1");
let show=document.getElementById("display");

inputData.addEventListener("keypress",()=>{
    inputData.value=inputData.value.toUpperCase()
})

inputData.addEventListener("keyup",()=>{
    inputData.style.color="blue";
    inputData.style.fontWeight="bold";
})