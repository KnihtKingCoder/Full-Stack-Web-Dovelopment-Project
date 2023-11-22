let btn=document.getElementById("btnn");

function countOcuur(str)
{
    let words=str.split(" ")
    let map=new Map()

    for(let word of words)
    {
        if(map.has(word))
        {
          map.set(word,map.get(word)+1)
        }
        else
        {
            map.set(word,1)
        }
    }

    return map;
}

btn.addEventListener("click",()=>{
    let data=document.getElementById("inp").value;
    alert("Check on Console screen")
    console.log(countOcuur(data))
})

