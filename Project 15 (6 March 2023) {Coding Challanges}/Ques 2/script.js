let delaytime=3;
let waittime=delaytime;

let countdown=setInterval(() =>{
    console.log(`generating random number in ${waittime} second`);
    waittime--;

    if(waittime<=0)
    {
        clearInterval(countdown)
        let number=Math.floor(Math.random()*100);
        console.log(`Randome number generated ${number}`);
    }
}, 1000);


