class Person{
    constructor(n="unknown",a=0)
    {
        this.name=n;
        this.age=a;
    }

    getdetails()
    {
        return `"Name: ${this.name} , Age: ${this.age}"`
    }
}

const person1=new Person("knight",20)
console.log((person1.getdetails()));

const person2=new Person()
console.log(person2.getdetails());