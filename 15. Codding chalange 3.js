//------------------ Object 1 ----------------
const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
}


Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going with ${this.speed}km/h`)
    // console.log(this.speed + 10)
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going with ${this.speed}km/h`)
    // console.log(this.speed - 5)
}



//------------------ Object 2 ----------------
const EV = function(make,speed,charge){
    Car.call(this,make,speed);
    this.charge = charge;
}

//________ Join  Car with child EV _________
EV.prototype = Object.create(Car.prototype);
//------------------------------------------

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
    console.log(`Battery Charge at ${this.charge}`);
}

//its polymorphism type method becouse its also avalible in parent class
EV.prototype.accelerate = function(){
    this.speed+=20;
    this.charge--;
    console.log(`Tesla going at ${this.speed}km/h, with a charge of ${this.charge.toFixed(2)}%`);
}

const Tesla = new EV("Tesla",80,90);
console.log(Tesla);
Tesla.chargeBattery(50)
Tesla.accelerate();
Tesla.accelerate();
Tesla.brake();
Tesla.brake();
