function extractObjitem(obj)
{
    const {
        name,
        adress:{street}
    }=obj;

    return {name,street};
}

const person={
    name: "Mithun",
    age:21,
    adress:{
        street:"BB, Block B, Industrial Area.",
        city: "Setor 62, Noida",
        sstate:"Uttar Pradesh",
    },
};

console.log(extractObjitem(person))