const btn=document.getElementById("butt")

btn.addEventListener('click',(event)=>{
    event.preventDefault();

    const  Name=document.getElementById("name").value;
    const  userName=document.getElementById("username").value;
    const  userEmail=document.getElementById("email").value;
    const  userPassword=document.getElementById("pass").value;
    const  userbio=document.getElementById("bio").value;
    
    // if(Name && userName && userEmail && userPassword && userbio)
    // {
    //     alert("All fileds are Required")
    // }

    const userData={
        name:Name,
        username:userName,
        email:userEmail,
        password:userPassword,
        bio:userbio
    }

    registerUser(userData)

})

const registerUser= async (user)=>{
    try {
        const resp=await fetch("http://localhost:8081/signup",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user)

        })


        const data= await resp.json()
        console.log(data);
        window.location.href="http://localhost:5500/client/html file/login.html"
    } catch (error) {
        console.log(error.message);
    }
}