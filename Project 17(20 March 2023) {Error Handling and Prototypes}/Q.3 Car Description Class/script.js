class Car{

    constructor(y,c,m)
    {
        this.year=y;
        this.company=c;
        this.model=m;
    }

    getDescription(){
        return `This is ${this.year} ${this.company} ${this.model}`
    }



}

let mycar=new Car(2022,"Skoda","Rapid")

console.log(mycar.getDescription());