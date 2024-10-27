//=============================================================================================
//=================================== Prototype Chain =========================================
//=============================================================================================
// All the
// 1. Function Constructor  ,  2. CS6 Class
// ===> when therer the object is made from   Instance   then --->  they are inharited from  --proto-- object
// ===> proto object is the parent object is  ===> Prototypal inharit object 
// ===> It is also a Prototype chain <=== 

//__________ 1. constructor function _____________
const Person = function(firstName ){
    this.firstName = firstName;
}

//__________ 2. object by instance _____________
const saqib = new Person("Pakistan");

//__________ 3. Proto Chain _____________
console.log(saqib.__proto__)

//__________ 4. Object.Proto _____________
console.log(saqib.__proto__.__proto__)

//__________ 5. Null mean above is parent object _____________
console.log(saqib.__proto__.__proto__.__proto__)


//=============================================================================================
//============================= Build In Object __proto__ =====================================
//=============================================================================================

//________________ 1. Array ________________
const arr = [3,6,6,5,6,9,9,8]
console.log(arr.__proto__)
console.log(arr.__proto__ == Array.__proto__)
console.log(arr.__proto__.__proto__)


//=============================================================================================
//======================== Add custom Build In Object __proto__ ===============================
//=============================================================================================
//Adding my Custom function in  build in prototype object

 Array.prototype.unique = function(){
    return [...new Set(this)]
 }
 console.log(arr.unique())

 //this is fucking way to do this  ----> Please don't do this

 //=============================================================================================
//======================== Testing Element  with  __proto__ Object =============================
//=============================================================================================
// html elements also contain   __proto__ object h1h1h1h
const h1 = document.querySelector("h1");
console.dir(h1)  //see the   proto object by ur selef
console.log(h1.__proto__);
