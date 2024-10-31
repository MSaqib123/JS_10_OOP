//===========================================================================
//========================== Another Class Example ==========================
//===========================================================================
class Account{
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;

        //Without Input
        this.movements = [];
        this.local = navigator.language;
        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    //------------- Public Properties -------------
    //---- Good ----
    deposit(val){
        this.movements.push(val)
    }
    withdrow(val){
        this.deposit(-val)
    }

    //------------- private  or Encapsulated proeprteis --------
    //private prop
    approveLoad(val){
        return true;
    }

    //this is public prop
    requestLoad(val){
        if(this.approveLoad(val)){
            this.deposit(val);
            console.log("Loan Approved")
        }
    }
}

const acc1 = new Account('Sajid','PKR',1111);
console.log(acc1);

//---- Bad ---- do this in class
//this is bad logic to do this type of things
//acc1.movements.push(250) //1st deposit
//acc1.movements.push(-130) //1st withdraw

acc1.deposit(5000);
acc1.withdrow(5000);

acc1.requestLoad(500);

//but i should not be used this  internal method
acc1.approveLoad()   //this is not valid in next lecture we will learn encapsoulation
console.log(acc1);

