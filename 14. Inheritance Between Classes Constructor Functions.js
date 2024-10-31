//=========================================================================================
//==================== Inheritance Between Classes Constructor Functions ==================
//=========================================================================================
//___________ .Call method ________
//this method  use other object proerpteis in the disred object


//______________ 1st Object ______________
const Person = function(firstName , birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function(){
    console.log(2037-this.birthYear)
}


//______________ 2nd Object ______________
const Student = function(firstName , birthYear, course){
    //______ this is same as Person Properties ______
    //______ why we should used  Person proprties ______
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this,firstName,birthYear)
    this.course = course;
}

//----------------- Wronge -----------------------
//it means we are ovrideing  student.prototy with Perosn prototyp
//See the diagram
//Student.prototype = Person.prototype; 
//-------------------------------------------------
//---------------- Correct -----------------------
// Connection -- Join 2 object toggether
Student.prototype = Object.create(Person.prototype);
//-------------------------------------------------

Student.prototype.introduce = function(){
    console.log(`My Name is ${this.firstName} and i study ${this.course}`)
}
const st_saqib = new Student('Saqib',2020 , 'Computer Science');
st_saqib.introduce();
console.log(st_saqib)

//___ Now using  PersonConstructor  method in Studenct Constructor method ____
st_saqib.calcAge()

console.log(st_saqib.__proto__);

//------------- Check The instance of objects -----------------
console.log(st_saqib instanceof Student);
console.log(st_saqib instanceof Person); //becuase we  inharit Person by create object
console.log(st_saqib instanceof Object); 


//------------- Fixed Construct mistake ------------------
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.dir(Student);

//=========================================================================================
//============================== Flow Diagram Please check ================================
//=========================================================================================
//check the image 
//14. Inheritance Between Classes Constructor Functions 3.png


