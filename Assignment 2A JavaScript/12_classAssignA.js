console.log(`1. Define class for Vehicles Information`);
class Mahindra {
    constructor(carName,enginePower,seatingCap,price,groundCl){
        this.carName = carName;
        this.enginePower = enginePower;
        this.seatingCap = seatingCap;
        this.price = price;
        this.groundCl = groundCl;
    }
    showDetails(){
        console.log(`Car Name: ${this.carName}, Engine Power(HP): ${this.enginePower}, Seating Capacity: ${this.seatingCap}, Price: ${this.price}, Ground Clearance: ${this.groundCl}`);
    }
}

const scorpion = new Mahindra("Scorpio N","97 t0 149 KW","7 Seater","₹ 8.42 - 14.60 Lakh","187 mm");
const xuv700 = new Mahindra("XUV 700", "147.1 & 136 kW", "5 or 7 Seater","₹ 14.01 - 26.18 Lakh","200 mm");
const thar = new Mahindra("Thar", "87 to 112 kW", "4 Seater","₹ 10.55 - 16.78 Lakh","226 mm");
const xuv300 = new Mahindra("XUV 300", "81 to 96 kW", "5 Seater","₹ 8.42 - 14.60 Lakh","180 mm");
const boleroNeo = new Mahindra("Bolero neo", "74 kW", "7 Seater","₹ 9.63 - 12.14 Lakh","180 mm");

const arrayOfVehicles = [scorpion,xuv700,thar,xuv300,boleroNeo];
for (const iterator of arrayOfVehicles) {
    iterator.showDetails();
}

console.log(``);

console.log(`2. Define class for college `);
class College {
    constructor(collgeName,city,type,deparment){
        this.collgeName = collgeName;
        this.city = city;
        this.type = type;
        this.deparment = deparment;
    }
}
const sinhgad = new College("Sinhgad","Lonavala","Private","Computer");
const mit = new College("MIT","Pune","Autonomus","Mechanical");
const dyPatil = new College("DY PAtil","Pune","Private","Civil");
const coep = new College("COEP","Pune","Government","IT");

console.log(`3. Function traverseObject() with one argument`);
function traverseObject(collegeObject){
    for (const key in collegeObject) {
        if (collegeObject.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key} -> ${element}`);
        }
    }
    console.log(``);

}
traverseObject(sinhgad);
traverseObject(mit);
traverseObject(dyPatil);
traverseObject(coep);




