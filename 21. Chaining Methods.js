//===========================================================================
//=============== Chaining Methods ===============
//===========================================================================
class Account{
    locale = navigator.language;
    #movements = [];
    #pin; 

    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val)
        return this;
    }
    withdrow(val){
        this.deposit(-val)
        return this;
    }
    requestLoad(val){
        if(this.#approveLoad(val)){
            this.deposit(val);
            console.log("Loan Approved")
            return this;
        }
    }
    #approveLoad(val){
        return true;
    }
    static helper(){
        console.log("Helper")
    }
}

const acc1 = new Account('Sajid','PKR',1111);
console.log(acc1);
acc1.deposit(5000);
acc1.withdrow(5000);
acc1.requestLoad(500);
console.log(acc1.getMovements());
Account.helper()


//================= Chainings =====================
acc1.deposit(400).withdrow(300).requestLoad(500).withdrow(400).deposit(1000).deposit(400).requestLoad(4000)

console.log(acc1.getMovements())