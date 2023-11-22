/*
--------------------Assignment 4-----------------------------
*/

const fs=require('fs')

fs.appendFile("nodejs_architecture.txt","Node.js adds incoming client requests to its event queue. The event loop in Node.js processes the requests one by one and checks whether external resources are required. If so, the requests are allocated with external resources; otherwise, they move on to the next step.Non-blocking (simple) requests are processed in the event loop, such as I/O polling, and responses are returned to the respective clients.",(error)=>{
    if(error){
        console.log("Error generated on the updating file");
    }
    else
        console.log("Updation Succesfully");
    

    
})