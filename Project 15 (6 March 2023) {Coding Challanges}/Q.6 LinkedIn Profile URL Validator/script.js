function validatelikdienurl(url)
{
    let patter=/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if(patter.test(url))
    {
        console.log(" valid Linkedin Url")
    }
    else
    {
        console.log("Invalid Linkedin Url")
    }
}

validatelikdienurl("https://www.linkedin.com/in/knight")