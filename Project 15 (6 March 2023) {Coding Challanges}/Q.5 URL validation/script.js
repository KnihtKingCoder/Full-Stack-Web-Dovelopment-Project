function urlValdation(url)
{
   
    let pattern = /^(?:[^\s@]+@[^\s@]+\.[^\s@]+|((?:http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+))$/;

    if(pattern.test(url))
    {
        console.log("valid Url")
    }
    else
    console.log("Invaild Url")
}

urlValdation("http://www.example.com")