// async function getcomineddata(){

//     const response1= await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data1=await response1.json()
//     const response2=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data2=await response2.json()

//     const combineddata={
//         todo:data1,
//         post:data2
//     }

//     return combineddata;
    
// }

// getcomineddata().then((data)=>console.log(data))



async function getcomineddata(){
    const [data1,data2]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>response.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>response.json())
    ])

    const combineddata={
                todo:data1,
                post:data2
            }
        
            return combineddata;
}

getcomineddata().then((data)=>console.log(data))