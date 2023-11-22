/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
*/



async function fetchdata()
{
    const response=await
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    console.log(data);
}

fetchdata()

