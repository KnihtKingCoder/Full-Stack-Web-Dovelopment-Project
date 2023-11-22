function filterBycategory(product)
{
          return function(category)
          {
            return product.filter(function (product){
                return product.category===category
            })
          }
}


const products=[
    {name:"shirt",category:"Clothing"},
    {name:"Pants",category:"Clothing"},
    {name:"hat",category:"Accessories"},
    {name:"Sunglasses",category:"Accessories"},
]

let clothingProdcuts=filterBycategory(products)("Clothing")
console.log(clothingProdcuts);

let accessoriesproducts=filterBycategory(products)("Accessories")
console.log(accessoriesproducts);