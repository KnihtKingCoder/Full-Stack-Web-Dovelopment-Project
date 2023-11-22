const btn=document.getElementById("butt")

btn.addEventListener('click',(event)=>{
     event.preventDefault()

     const userName=document.getElementById("username")
     const userPassword=document.getElementById("pass")

     if(userName && userPassword)
     {
         alert("All fileds are Required")
     }

     const userData={
        username:userName,
        password:userPassword
     }

     loginUser(userData)
})

const loginUser=async (user)=>{
    try {
        const resp=await fetch("http://localhost:8081/signup",{
            method:"POST",
            credentials:'include',
            redirect:'follow',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user)

        })


        const data= await resp.json()
        console.log(data);
        window.location.href="http://localhost:5500/client/html file/user.html"
    } catch (error) {
        console.log(error.message);
    }
}