//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startingFuelLevel = 0;
let numberOfAstronautsAboard = 0;
let altitudeTheShuttleReaches = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = Number(input.question("Enter the starting fuel level: "));
while (startingFuelLevel <= 5000 || startingFuelLevel >= 30000 || isNaN(startingFuelLevel)) {
  startingFuelLevel = Number(input.question("Invalid input. Please enter the starting fuel level: "));  
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numberOfAstronautsAboard = Number(input.question("Enter the number of astronauts: "));
while (numberOfAstronautsAboard < 1 || numberOfAstronautsAboard > 7 || numberOfAstronautsAboard % 2 !==1 && numberOfAstronautsAboard % 2 !==0 ||  isNaN(numberOfAstronautsAboard)) {
  numberOfAstronautsAboard = Number(input.question("Invalid input. Please enter the number of astronauts aboard: "));  
} 
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel-100*numberOfAstronautsAboard >= 0) {
  startingFuelLevel -= 100*numberOfAstronautsAboard;
  altitudeTheShuttleReaches += 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitudeTheShuttleReaches}km.`);

if (altitudeTheShuttleReaches >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}