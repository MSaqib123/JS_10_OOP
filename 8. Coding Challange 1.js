
//=================================================
//=============== Coding Challenge #1 =============
//=================================================
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
//Constructor Function to implement the [Car and prototype inharitance]
const Car = function(make,speed){
    this.make = make,
    this.speed = speed
}

Car.prototype.accelerate = function(){
    this.speed += 5;
    console.log(`${this.make} is going with ${this.speed}km/h`)
    // console.log(this.speed + 10)
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going with ${this.speed}km/h`)
    // console.log(this.speed - 5)
}

//--- Test ---
const BMW = new Car("BMW",120);
console.log(BMW , "BMW")
BMW.accelerate()
BMW.brake()

const Mercedes = new Car("Mercedes",95);
console.log(Mercedes , "Mercedes")
Mercedes.accelerate()
Mercedes.brake()


//============== prototype ===============
//we defined mehtod to  Object.prototye 
//thats why its being  seeen in all object like   (BMW , Mercedes)