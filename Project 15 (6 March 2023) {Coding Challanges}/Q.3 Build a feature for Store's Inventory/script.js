let arrItems=[{item1:100},{item2:300},{item3:200}]
let price=80;

let newarritems=arrItems.map(element => {
    let key=Object.keys(element)[0];
    element[key]=element[key]*80    
    return element;
});

console.log(newarritems)