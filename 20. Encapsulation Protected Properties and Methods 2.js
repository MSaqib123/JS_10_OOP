//===========================================================================
//=============== Real Encap Protected Properties and Methods ===============
//===========================================================================
//Real Protect done wit  ---> # symbol


// there are  8 new class features
//1. Public fields
//2. Private Fields
//3. Public fields
//4. Private fields

//... 5, 6 , 7 , 8    Static version 


class Account{
    //---- 1. Public Fields (Instances) -----
    locale = navigator.language;
    
    //---- 2. Private Fields (Instances) -----
    #movements = [];
    #pin;  //undefined

    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        
        //--- critical data ---
        // this.movements = [];
        // this._movements = []; 
        this.#pin = pin;
        //---------------------

        // this.local = navigator.language;
        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    //------------- 3 Public Properties -------------
    getMovements(){
        // return this._movements;
        return this.#movements;
    }
    deposit(val){
        // this._movements.push(val)
        this.#movements.push(val)
    }
    withdrow(val){
        this.deposit(-val)
    }
    requestLoad(val){
        if(this.#approveLoad(val)){
            this.deposit(val);
            console.log("Loan Approved")
        }
    }

    //------------- 4. private  or Encapsulated proeprteis --------
    //private prop
    #approveLoad(val){
        return true;
    }

    //------------- 5,6,7,8  Static Versions --------
    //static are called with blue pr9int  not with  Instances
    static helper(){
        console.log("Helper")
    }

}

const acc1 = new Account('Sajid','PKR',1111);
console.log(acc1);
acc1.deposit(5000);
acc1.withdrow(5000);
acc1.requestLoad(500);

//--- 2. Test Private value ----
//console.log(acc1.#movements);    yes
//Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
console.log(acc1.getMovements());

//console.log(acc1.#pin);           yes



//--- 4. Test Private Method  ----
//acc1.#approveLoad(234234);
//Uncaught SyntaxError: Private field '#approveLoad' must be declared in an enclosing class


//--- 5,6,7,8 static version -----
//acc1.helper(); 
Account.helper()