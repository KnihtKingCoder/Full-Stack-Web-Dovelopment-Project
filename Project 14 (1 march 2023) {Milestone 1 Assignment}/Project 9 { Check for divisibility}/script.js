function divisble(number){
       divisbleBy3=[];

       for(let i=0;i<number.length;i++)
       {
        if(number[i]%3==0 && number[i]%2!=0)
        {
            divisbleBy3.push(number[i]);
        }
       }

       return divisbleBy3;
}

let number=[2,3,4,9,6,12,90];
let divisbleBy3AndNot2=divisble(number);
console.log(divisbleBy3AndNot2);

