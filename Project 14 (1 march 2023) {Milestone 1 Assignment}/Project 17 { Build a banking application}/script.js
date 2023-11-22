


const customer = {
    name: "John Doe",
    balance: 5000,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
      },
    withdraw: function(amount) {
        if (this.balance < amount) {
          console.log("Insufficient balance.");
        } else {
          this.balance -= amount;
          console.log(`Withdrawn ${amount}. New balance is ${this.balance}.`);
        }
      }
  };

  customer.deposit(1000)
  customer.withdraw(2000)