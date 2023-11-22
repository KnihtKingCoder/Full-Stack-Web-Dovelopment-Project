function doublecartitem(cart){
    updatedcartitem=[];
    for(let i=0;i<cart.length;i++)
    {
        
        updatedcartitem.push(cart[i]*2);
    }
    return updatedcartitem;
}


let cart=[1,2,3,4,5,6];

let updatecart=doublecartitem(cart);

console.log(cart);
console.log(updatecart);