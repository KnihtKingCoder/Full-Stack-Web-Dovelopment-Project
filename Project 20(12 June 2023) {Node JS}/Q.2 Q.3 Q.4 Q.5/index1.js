/*
-------------------------Assignment 3------------------------
*/

const fs=require('fs')

//1 way

fs.readFile("nodejs_architecture.txt",(error,data)=>{
    if(error){
        console.log("These file name no exited");
    }
    else
    {
        console.log("file Reading Succesfully");
        console.log(`The Data on "nodejs_architecture.txt" file is : ${data}`);
    }
})
/*
//2 way

const data=fs.readFileSync("nodejs_architecture.txt")
console.log("Data is : ",data.toString())

console.log("------------------------------------------");

*/