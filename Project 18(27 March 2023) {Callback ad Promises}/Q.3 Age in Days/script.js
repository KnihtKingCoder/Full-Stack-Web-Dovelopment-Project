function ageIncdays(obj,callback){
            let fullname=obj.fname+" "+obj.lname
            let agedays=obj.age*365;

            return callback(fullname,agedays)

}

function ageIndayslog(fullname,age){
    console.log(`The Person Name is ${fullname} and their age is days is ${age}`);
}

 
let person={
    fname:"Knight",
    lname:"Prince",
    age:21
}

ageIncdays(person,ageIndayslog)