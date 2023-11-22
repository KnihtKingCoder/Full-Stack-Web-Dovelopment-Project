let waittime=3;

let countdown=setInterval(() => {
    console.log(`Random Number Generated in ${waittime}`)
    waittime--;

    if(waittime<=0)
    {
        clearInterval(countdown)
        let randomnumber=Math.floor(Math.random()*10)
        console.log(`Random Number is ${randomnumber}`)
    }
}, 1000);