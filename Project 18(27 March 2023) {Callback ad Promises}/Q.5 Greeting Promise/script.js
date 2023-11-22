function greetingpromise(inpname)
{
    return new Promise((resolve,reject)=>{
        resolve(`Hello ! ${inpname}`)
    })
    
}

greetingpromise("knight").then((message)=>{console.log(message);})