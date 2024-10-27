//=========================================================================================
//=========================== (Accessor Properties) Getters and Setters =====================
//=========================================================================================
//Used in    Data_Validation

//1. ---> Accessor Proerities  are Getter and setter
//2. ---> Other are Propert  --> Data Properites  

//========================================================== 
//================ object litteral ---> {}  ================
//==========================================================
const account = {
    owner : "Jones",
    movments : [2000,530,120,300],

    get latest(){
        return this.movments.slice(-1).pop(); // last value get
    },

    set latest(mov){
        this.movments.push(mov);
    }

};

//-- Use setter , gett ----
console.log(account.latest);
account.latest = 50;
console.log(account.latest)



//========================================================== 
//================== Class ---> ES6 Object =================
//==========================================================
class PersonCl {
    constructor(fullName , birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge(){
        console.log(2037-this.birthYear)
    }
    greet(){
        console.log(`Hey ${this.fullName}`)
    }

    //-------- Getter ----------
    //get value from prottype of object
    get age(){
        return 2037- this.birthYear;
    }

    //------------ Set property that is alredy exist ----------------
    //----------- Validate FullName  ----------
    //--- Setter --- 
    //set value to prototype object
    set fullName(name){
        console.log(name);
        // if(name.includes(' ')) this.fullName = name;
        if(name.includes(' ')) this._fullName = name;
        else alert("Given name is not full name")
    }
    //--- getter ---  
    //to get _fullname and  set fullname
    get fullName(){
        return this._fullName;
    }
}
const saqib = new PersonCl("Saqib Ali",2000);
console.log(saqib)

//getter  to get the value from prototype
console.log(saqib.age);

console.log(saqib)


