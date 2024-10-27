//=========================================================================================
//================================ Static  Methods ==============================
//=========================================================================================
//Static methods are directly attach with constructure.
//Diff...  Method called without  instance (new person())  direclty with construct  is called static method
//wo method jo  directly   blueprint sa access hota han.  Instance ni hotaa

//------------------ Build in Method in JS. ------------------
//------ 1. Array.From (static) -----------
//from convert any  Array like object to  Real array -----
console.log(Array.from(document.querySelectorAll("h1")));

//will not work directly to array becuase its static method
//[1,2,3].from()

//------ 2. parseFloat -----------
console.log(Number.parseFloat(12)); //static method on   Number constructor

//==================================================================================
//============================ 1.  Constructor function ============================
//==================================================================================
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const saqib = new Person("Saqib Ali", "2024-10-6");
console.log(saqib);

//------- Static Method -------- only used with  blueprint
Person.hey = function () {
  console.log("Hey there 🙌");
};
Person.hey();

//not used in saqib object
//saqib.hey();

//==================================================================================
//============================ 2.  Constructor function ============================
//==================================================================================
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //------- 1_Instance_Method -------
  /* #region  1_Instance_Method */
  //======= Method will be added to .prototype proptyr =========
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //-------- Getter ----------
  //get value from prottype of object
  get age() {
    return 2037 - this.birthYear;
  }

  //Set property that is alredy exist
  //--- Setter ---
  //set value to prototype object
  set fullName(name) {
    console.log(name);
    // if(name.includes(' ')) this.fullName = name;
    if (name.includes(" ")) this._fullName = name;
    else alert("Given name is not full name");
  }
  //--- getter ---
  //to get _fullname and  set fullname
  get fullName() {
    return this._fullName;
  }

  /* #endregion */

  //------- 2_Static_method  -------
  /* #region  static methods */
  //Only Acces with blue print 
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
  /* #endregion */
}

const boota = new PersonCl("Saqib Ali", 2000);
console.log(saqib);

//boota.hey();
PersonCl.hey();