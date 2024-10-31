//=========================================================================================
//========================== Inheritance Between Classes ES6 Classes ======================
//=========================================================================================
//----- Extends Keyword -------
//We  used  extends keyword to inharita in  ES6 base classes
//----- Super Keyword -------
//we used to  use parent class paremter in child we  used   Super kwyoerd

//_________________ Class 1 ___________________
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

    //get value from prottype of object
    get age(){
        return 2037- this.birthYear;
    }

    //--- Setter --- 
    set fullName(name){
        console.log(name);
        // if(name.includes(' ')) this.fullName = name;
        if(name.includes(' ')) this._fullName = name;
        else alert("Given name is not full name")
    }
    //--- getter ---  
    get fullName(){
        return this._fullName;
    }
}

//_________________ Class 2 (child)  with inharitance of PeronsCl ___________________
class StudendCl extends PersonCl {
    constructor(fullName,birthYear,course){
        //Always need to happend First!  
        super(fullName,birthYear) //it automaticaly set this keyword behind the seen
        this.course = course;
    }

    introduce(){
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }

    calcAge(){
        console.log(`I am ${2037- this.birthYear} old`);
    }
}


const saqib = new StudendCl('Saqib Ali',1996,'Computer Science');
console.log(saqib)
console.log(saqib.fullName)
saqib.introduce();
console.log(saqib.age)
saqib.calcAge();