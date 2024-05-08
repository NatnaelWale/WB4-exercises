"use strict";



let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
   ];

   let whichVehiclesAreRed = [];

   let numOfArray = vehicles.length;

   for (let i=0; i<numOfArray; i++) {
    let vehicleColor = vehicles[i].color;
    if(vehicleColor == "Red") {
        whichVehiclesAreRed.push(vehicles[i].licenseNo)
    }
   }
// console.log(`The Vehicles with Red color are the ones with license plate of: ${whichVehiclesAreRed}`);


let registrationExpiredVehicles = [];

let currentDate = new Date(); 

for (let i = 0; i < numOfArray; i++) {
    let vehicle = vehicles[i];
    if (vehicle.registrationExpires < currentDate) {
        registrationExpiredVehicles.push(vehicles[i].licenseNo)
    }
}
// console.log(`Vehicle with license no: ${registrationExpiredVehicles} has expired registration.`);

let vehicleCapacity = [];

for(let i = 0; i < numOfArray; i ++) {
    let capacity = vehicles[i].capacity;
    if(capacity >= 6){
        vehicleCapacity.push(vehicles[i].licenseNo)
    }
}
// console.log(`The vehicles that has atleast 6 seats are with the following license numbers: ${vehicleCapacity}`);


let whichVehiclesHasEndLicensePlates = [];

for(let i = 0; i<numOfArray; i++){
    let licensePlate = vehicles[i].licenseNo
    let licensePlateIndex = licensePlate.indexOf("-")
    let lastLicensePlate = licensePlate.substring(licensePlateIndex+1)
    // console.log(`${lastLicensePlate}   ${licensePlate}`);
    if(lastLicensePlate == "222"){
        let value = `Vehicle with License No: ${licensePlate} has a plate number ending in "222"`
        whichVehiclesHasEndLicensePlates.push(value)
    }
}
// console.log(whichVehiclesHasEndLicensePlates);