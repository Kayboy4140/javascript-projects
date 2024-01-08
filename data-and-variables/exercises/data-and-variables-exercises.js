// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeed_mph = 17500;
let distanceToMars_km = 225000000;
let distanceToTheMoon_km = 384400;
const milesPerKm = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed_mph);
console.log(typeof distanceToMars_km);
console.log(typeof distanceToTheMoon_km);
console.log(typeof milesPerKm);


// Calculate a space mission below
let milesToMars = distanceToMars_km * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeed_mph;
let daysToMars = hoursToMars / 24;


// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars. ");

// Calculate a trip to the moon below
let milesToMoon = distanceToTheMoon_km * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeed_mph;
let daysToMoon = hoursToMoon / 24;


// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon. ");