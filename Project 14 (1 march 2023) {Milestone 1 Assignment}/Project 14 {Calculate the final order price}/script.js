function totalCost(cart){
       let total_cost=0;
       for(let i=0;i<cart.length;i++)
       {
        let item_cost=cart[i].unit_price*cart[i].quantity;
        total_cost+=item_cost;
       }
       return total_cost;
}

const cart = [
    { unit_price: 100, quantity: 2 },
    { unit_price: 50, quantity: 3 },
    { unit_price: 200, quantity: 1 },
  ];

let TotalCost=totalCost(cart);
console.log(TotalCost);