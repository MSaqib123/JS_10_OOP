//=======================================================================================================
//======================== 1. Constructor Function New Keyword OOP ======================================
//=======================================================================================================
//the method with   
//1. same name as Object =  Constructor
//2. Same Name as Class =  Constructor
//we create object(instance) using Construtor Function

//========= Example 1 ==========
//-- Constructor ---
// when i will create  this function with New key ====> then it will be constructor
const Fan = function (name , waranty){ 
}
//-- Object --
new Fan();
console.log(new Fan())
console.log(typeof new Fan())
//console.log(typeof Fan()) //Undefined


//========= Example 2 ==========

//=> Blue Print
const Person = function(firstName , birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

//=> Object or Instances
const saqib = new Person("Saqib Ali",'2024-10-6')
console.log(saqib)
const malik = new Person("Ahamd Malik",'2024-10-6')
console.log(malik)


//----- Testing -----
console.log(saqib instanceof Person);
console.log(malik instanceof Person);

console.log(malik instanceof Fan); //becuase malik is not instance of  Fan its  Instance of Person

//=========================================================================================
//======================== Proccess Behinde the Seen ======================================
//=========================================================================================
//when we create  object with (New) kewyowrd  ===> 4 Steps happends
// 1. New {} is Created
// 2. function is called , this= {}
// 3. {} linked to prototype
// 4. function automatically  retunr  {} object

//=========================================================================================
//==================== Adding Function(Behavier) to Object ================================
//=========================================================================================
//so creating function in  Constructor is Very very Bad practice
//Because when 1000 instances made then   1000 copy will be for function inside constructur
const Country = function(Name , Curancy){
    this.CountryName = Name;
    this.Curancy = Curancy;

    //------ Never do this ----
    this.CurancyToPKR = function(){
        console.log("PKR ", 278 * Curancy)
    }
}
const UnitedState = new Country("England",45); //doller
console.log(UnitedState.CurancyToPKR())


//==========================================================================
//========================  Prototype ======================================
//==========================================================================
//in Js there is Build in Object   which is [Prototype]
// when ever we create   Object or Instance  ----> Prototype object is linked to  object automaticallly
// ---- we will study it Further

//------ Check 1 -----
console.log(malik , "check the prototype of Object which is lined during creating ")
console.log(Person.prototype)

//------ check 2 -----
const pak = function(){}
console.log(pak)   //not exist because its not object