class User{
    constructor(n,p)
    {
        this.name=n;
        this.passowrd=p;
    }

    get pass(){
        return this.passowrd.replace(/./g,"*")
    }

    set pass(newpassword)
    {
        let containNumber=0;
        let conatinUppercase=0;

        for(let i=0;i<newpassword.length;i++)
        {
            const char=newpassword.charAt(i)
            if(!isNaN(char))
            {
                containNumber=1;
            }
            else
            {
                if(char === char.toUpperCase())
                {
                    conatinUppercase=1;
                }
            }
        }

        if(newpassword.length >= 8 && containNumber && conatinUppercase)
        {
            this.passowrd=newpassword;
        }
        else
        {
            console.log("Error : password is at least 8 characters long and contains at least one number and one uppercase letter");
        }
    }
}


const user=new User("knight","Knight123")
console.log(user.pass);

user.pass="knight"
console.log(user.pass);
user.pass="King1224"
console.log(user.pass);

// user.pass="Knight1234"