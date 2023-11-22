/*
-------------------------------Assignment 2------------------------------
*/

const fs=require('fs')

const data="Incoming client requests are received by Node.js, which can be either simple (non-blocking) or complex (blocking), depending on the task to be performed.Querying for specific data involves searching for particular data in a database. Deleting data involves sending a request to delete specific data or performing a deleting query. Updating data involves sending a request to change or update a set of data or performing an updating query on a particular row of tables to update a specific entry in the database"



// 1 Way

// fs.writeFile("nodejs_architecture.txt",data,(error)=>{
//     if(error){
//         console.log("Error on writing on data");
//     }
//     else
//     {
//         console.log("Successfull data is wrriten");
//     }
// })

// 2 way

fs.writeFileSync("nodejs_architecture1.txt",data)