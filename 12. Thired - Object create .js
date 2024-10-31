//======================================================================================
//=============================== Thired - Object create ===============================
//======================================================================================

const PersonsProto = {
    calcAge(){
        console.log(2037-this.birthYear)
    },

    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

//============= SAQIB ==============
const saqib = Object.create(PersonsProto);
console.log(saqib);

//_____ repeated code _____
// saqib.name = 'Saqib'
// saqib.birthYear = 1996
// saqib.calcAge()
saqib.init("SAQIB",2000)


//--- check prototype ---
console.log(saqib.__proto__ === PersonsProto)


//============= Sajid ==============
const sajid = Object.create(PersonsProto)

//_____ repeated code _____
// sajid.name = 'sajid'
// sajid.birthYear = 1999
// sajid.calcAge()
sajid.init("sajid",1900)
console.log(sajid)


//==========================================================================
//=============================== Importenat ===============================
//==========================================================================
//in  featuer when we will implement true  class inharitance then we need 
// (Object.Crate)