function discountPercentage(orginal_price,discounted_price){
                 let discount=orginal_price-discounted_price;
                 let discount_percentage=discount/orginal_price*100;
                 return discount_percentage.toFixed(2);
}

let orginal_price=10000;
let discounted_price=6000;

let discount_percentage=discountPercentage(orginal_price,discounted_price);
console.log(discount_percentage)