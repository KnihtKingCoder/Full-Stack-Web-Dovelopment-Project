function removeDuplicates(cart){
    const uniqueitems=[];
    

    for(let i=0;i<cart.length;i++)
    {
        for(let j=i+1;j<cart.length;j++)
        {
            if(cart[i]==cart[j])
            {
                if(!uniqueitems.includes(cart[i])) {
                    uniqueitems.push(cart[i]);
                }
            }
            else {
                if(!uniqueitems.includes(cart[j])) {
                    uniqueitems.push(cart[j]);
                }
            }
           
        }
    }

    return uniqueitems;
}

let cart = ['apple', 'banana', 'orange', 'banana', 'pear', 'apple'];
let uniqueCart = removeDuplicates(cart);
console.log(uniqueCart); 