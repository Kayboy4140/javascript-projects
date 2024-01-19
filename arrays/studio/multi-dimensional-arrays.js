let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

food = food.split(',').sort();
console.log(food);

equipment = equipment.split(',').sort();
console.log(equipment);

pets = pets.split(',').sort();
console.log(pets);

sleepAids = sleepAids.split(',').sort();
console.log(sleepAids);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let no = Number(input.question("Select one of the four cabinets: "));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if ((no -1) >= 0 && (no - 1) <= 3) {
    console.log(`${cargoHold[no -1]}`);
} else {
    console.log("Invalid number entered")
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

no = Number(input.question("Select one of the four cabinets: "));
let cabinetItem = input.question("What item do you seek in this cabinet? ");
if (cargoHold[no - 1].includes(cabinetItem)) {
    console.log(`Cabinet ${no} DOES contain ${cabinetItem}`);
} else {
    console.log(`Cabinet ${no} DOES NOT contain ${cabinetItem}`);
}
