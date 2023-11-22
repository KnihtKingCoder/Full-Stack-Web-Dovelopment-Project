function Student(name)
{
    this.name=name
}

Student.prototype.printdetails=function(){
    console.log(`Hello my name is ${this.name}`);
}

const student=new Student("knight")
student.printdetails();