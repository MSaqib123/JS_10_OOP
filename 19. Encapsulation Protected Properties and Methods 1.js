//===========================================================================
//============= Encapsulation Protected Properties and Methods ==============
//===========================================================================
//Why we need private Prop ???
//1. its is to prevent code from outside of class to accedently  change(minupleate) the data inside the class.
//2. if only small interface are public then we more Confident to use  method of class less chance to mess with data

// _  symbol used that this propery is Critical .. its not real  encapsulation  its facking  symbox
// it understood if developer see this  _  he will  not use this  _ proeryt , method outside of class


//_movments         property
//__approveLoad     method


class Account{
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        
        //--- critical data ---
        // this.movements = [];
        this._movements = []; 
        this._pin = pin;
        //---------------------

        this.local = navigator.language;
        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    //------------- Public Properties -------------
    getMovements(){
        return this._movements;
    }
    deposit(val){
        this._movements.push(val)
    }
    withdrow(val){
        this.deposit(-val)
    }

    //------------- private  or Encapsulated proeprteis --------
    //private prop
    _approveLoad(val){
        return true;
    }

    //this is public prop
    requestLoad(val){
        if(this._approveLoad(val)){
            this.deposit(val);
            console.log("Loan Approved")
        }
    }
}

const acc1 = new Account('Sajid','PKR',1111);
console.log(acc1);
acc1.deposit(5000);
acc1.withdrow(5000);

//-------------- Private Proprty Understanding ------------------
acc1.requestLoad(500);
//but i should not be used this  internal method
//acc1._approveLoad()   //this is not valid in next lecture we will learn encapsoulation
console.log(acc1.getMovements());
console.log(acc1);

