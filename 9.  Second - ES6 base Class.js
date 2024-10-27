//=========================================================================================
//================================= 2. ES6 Base Class OOP =================================
//=========================================================================================


//=================== 1. Expression Syntax =================
//const Person = class{};

//=================== 2. declaration Syntax =================
class PersonCl {
    constructor(firstName , birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }


    //--- By ES6 method will automatically to Prototype object hahahaahahaha
    calcAge(){
        console.log(2037-this.birthYear)
    }

    greet(){
        console.log(`Hey ${this.firstName}`)
    }
}



const saqib = new PersonCl('Saqib',1996);
console.log(saqib,"ES6-class")
//-- ageCalc method ES6 --
saqib.calcAge();


console.log(saqib.__proto__)
console.log(saqib.__proto__ === PersonCl.prototype)

//-- greateing method ES6 --
saqib.greet()



//========================== Note Importent ======================
//1. Classes are NOT hoisted  ---> even they are class declaration
//--> but function declaration are hoisted , we can use before they are declare in the code
//--> but with class it does not work

//2. Class are  first-class cititzens 
//--> we can pass  theem into function   also   can return them from function 
//--> because  class are  realy just  special Kindes of function behinde the seeen in ES6

//3. Classes are execued in strict mode
//--> The body {} of Class  always be executed in Strick mode ---> means its nesosry to add  {}
