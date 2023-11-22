function bill(Cost_dish,Num_person){
   let total_bill=Cost_dish*Num_person;
   let bill_per_person=total_bill/Num_person;

   return {
    total_bill:total_bill,
    bill_per_person:bill_per_person
   };
}

let Cost_dish=40;
let Num_person=20;

let result=bill(Cost_dish,Num_person);
console.log(result);
