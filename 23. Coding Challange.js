
class CarCal {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 5;
        console.log(`${this.make} is going with ${this.speed}km/h`)
    }
    
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going with ${this.speed}km/h`)
        return this;
    }

    //validation
    get speedUS(){
        this.speed/1.5;
        return this;
    }
    set speedUS(speed){
        this.speed = speed*1.6;
        return this;
    }
}


class EvCl extends CarCal{
    #charge;
    constructor(make,speed,charge){
        super(make,speed);
        this.#charge = charge;    
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        console.log(`Battery Charge at ${this.charge}`);
        return this;
    }
    accelerate(){
        this.speed+=20;
        this.#charge--;
        console.log(`Tesla going at ${this.speed}km/h, with a charge of ${this.#charge.toFixed(2)}%`);
        return this;
    }
}


const Tesla = new EvCl("Tesla",80,90);
console.log(Tesla);
Tesla.chargeBattery(50)
Tesla.accelerate();
Tesla.accelerate();
Tesla.brake();
Tesla.brake();


//========== Chaining ============
Tesla.chargeBattery(100).accelerate().accelerate().brake().accelerate().brake();
console.log(Tesla.speedUS);