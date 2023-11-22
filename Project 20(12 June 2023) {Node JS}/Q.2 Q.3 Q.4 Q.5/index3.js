/*
-----------------------Assignment 5 ------------------------------
*/

const fs=require('fs')

fs.unlink("./nodejs_architecture1.txt",()=>{
    console.log("Deletion of Text File SUccesfull..");
})