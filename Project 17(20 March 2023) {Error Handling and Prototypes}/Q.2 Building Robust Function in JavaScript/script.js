

function getPerson(obj)
{
    try {
        let name=obj.name;
        let age=obj.age;

        if(typeof obj !== "object" || obj === null || !('name' in obj) || !('age' in obj))
        {
            throw "Invalid parameter type"
        }
        else
        return `Name: ${name}, Age: ${age}`
    } catch (error) {
        return error;
    }
}

console.log(getPerson({name:"Mithun",age:20}));
console.log(getPerson({name:"mithun"}));
console.log(getPerson(['name',"mithun"]));