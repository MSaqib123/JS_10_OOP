//==========================================================================
//========================  Prototype ======================================
//==========================================================================
//When we Open MDN   deocument thair Array method and other method are writen like this
// 1.  Array.prototype.at()
// 2. Array.prototype.concat()
// 3. Array.prototype.fill()
// 4. Array.prototype.filter()
// 5. Array.prototype.find()
// 6. Array.prototype.findIndex()
// 7. Array.prototype.findLast()
// 8. Array.prototype.findLastIndex()
// 9. Array.prototype.flat()

const Person = function(firstName , birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    //--- Never do this ---  we used Prototypes methods
    // this.CalcAge = function(){
    //     console.log(2037 - birthYear)
    // }
}
const saqib = new Person("Saqib Ali",1996)
console.log(saqib)
//saqib.CalcAge()

const malike = new Person("Malik",1998)
console.log(malike)
//malike.CalcAge()

//-------------------------------------------------------
//--------- Adding Function to Person Prototype ---------
//-------------------------------------------------------
//becuase the  Method is only 1 time added to prototype then 
//the Instance  Object will used that  method to implement

//---- check 1 ---
console.log(Person.prototype);
console.log(saqib);

//---- check 2 ---
Person.prototype.calcAge = function(){
    console.log(2037-this.birthYear)
}
saqib.calcAge();
console.log(Person.prototype);
console.log(saqib);



//==========================================================================
//========================  __proto__ ======================================
//==========================================================================
// __proto__ is object  which is linked to object during  Creationg of object hahahhaahha
// so  Every Object  are Enharit from  __proto__ object 
// prototype is Property of  __proto__ object 
console.log(saqib.__proto__,"__proto__");

//verify
console.log(saqib.__proto__ == Person.prototype);

//there is also  method in  prototype --->  isPrototypeof()   you can seee in  above __proto__
console.log(Person.prototype.isPrototypeOf(saqib));   //both are Person instance = true
console.log(Person.prototype.isPrototypeOf(malike)); //boht are Person instance  = true


//-------------------------------------------------------
//--------- Adding Property to Person Prototype ---------
//-------------------------------------------------------
Person.prototype.species = "Homo sapiens"

console.log(saqib,malike)


//-------------------------------------------------------
//--------- hasOwnProperty of __proto__ object ----------
//-------------------------------------------------------
console.log(saqib.hasOwnProperty('firstName')); //true
console.log(saqib.hasOwnProperty('species')); //false


//==========================================================================
//============= Behinde the Seen Prototype Method call =====================
//============= Prototype Chaing ===========================================
//==========================================================================
//_______ 1 ________
//when we call the Prototype method  
saqib.calcAge();
//js  1st search it to own object but its not therer then its goes to --> __proto__ obbject find it there and 
//then display the result
//Because its located in  prototype type property of Person

//_______ 2 ________
saqib.hasOwnProperty('')
//JS fill try to find   hasOwnProperty() in Instance Object ---> Not find 
//then it will go to ---> __proto__ object and fined the method there.

//this called  __proto__ Chain    ||   (Prototype_Chain)