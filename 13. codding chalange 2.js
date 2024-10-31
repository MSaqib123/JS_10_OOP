
class carCal {
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
    }

    //validation
    get speedUS(){
        return this.speed/1.5;
    }
    set speedUS(speed){
        this.speed = speed*1.6;
    }
}

const Toyota = new carCal('Toyota',120)
console.log(Toyota.speedUS());


Toyota.accelerate()
Toyota.accelerate()
Toyota.brake()
Toyota.speedUS=50
console.log(Toyota)

