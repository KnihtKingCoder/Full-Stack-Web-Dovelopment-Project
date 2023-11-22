let inc=document.querySelector('#increment');
let dec=document.querySelector('#decrement');
let res=document.querySelector('#reset')
let count=document.querySelector('#showValue');


function incre(){
    
    let value=Number(count.innerText);
    console.log(value)
    if(value>=0)
    {
      value++;
    }
    console.log(value)
    document.getElementById('showValue').innerText=""+value;
}

function decre(){
    
    
    let value=Number(count.innerText);
    if(value>0){
      value--;
    }
    document.getElementById('showValue').innerText=""+value;
}

function reset(){
  
  let value=Number(count.innerText);
  document.getElementById('showValue').innerText="0";
}

inc.addEventListener('click',incre);
dec.addEventListener('click',decre);
res.addEventListener('click',reset)
