function rentalCost(days,carType){
    let totalCost;
    let rentalCostPerDay;
       switch(carType)
       {
        case "Economy":
            {
                rentalCostPerDay=4000;
                break;
            }

        
        case "Midsize":
            {
                rentalCostPerDay=10000;
                break;
            }

        
        case "Luxury":
            {
                rentalCostPerDay=20000;
                break;
            }

        default:
            return 0;

        
       }

       totalCost=rentalCostPerDay*days;

       return totalCost;
}

let cartype="Midsize";
let days=3;

let totalCost=rentalCost(days,cartype);
console.log(totalCost);