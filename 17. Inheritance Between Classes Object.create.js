//=========================================================================================
//========================= Inheritance Between Classes Object.create =====================
//=========================================================================================

//------------------- 1st Object.Create --------------
const PersonsProto = {
    calcAge(){
        console.log(2037-this.birthYear)
    },

    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
const saqib_Per = Object.create(PersonsProto);


//------------------- 2nd Object.Create --------------
const StudentProto = Object.create(PersonsProto);
StudentProto.init = function(firstName,birthYear,course){
    PersonsProto.init.call(this,firstName,birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My Name is ${this.firstName} and i am Studing ${this.course}`);
}

const saqib_Stu = Object.create(StudentProto);
saqib_Stu.init('Saqib',1996,'Copmputer Science')
saqib_Stu.introduce();
saqib_Stu.calcAge();