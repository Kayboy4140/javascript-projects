// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {

}

// add logic below to verify all astronauts are ready

if (astronautStatus === "ready") {

}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= 850000) {

}
            
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp) {

}

// add logic below to verify the fuel level is at 100%
                
if (fuelLevel === "100%") {

}

// add logic below to verify the weather status is clear

if (weatherStatus === "clear") {

}         
                
// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg <= 850000 && fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp && fuelLevel === "100%" && weatherStatus === "clear") {
    console.log("------------------------------");
    console.log("> SHUTTLE LAUNCH CHECKLIST");
    console.log("------------------------------");
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log();
    console.log("------------------------------");
    console.log("> ASTRONAUT INFO");
    console.log("------------------------------");
    console.log("* count: " + astronautCount);
    console.log();
    console.log("------------------------------");
    console.log("> MASS DATA");
    console.log("------------------------------");
    console.log("* Crew mass: " + crewMassKg + " kg");
    console.log("* Fuel mass: " + fuelMassKg + " kg");
    console.log("* Shuttle mass: " + shuttleMassKg + " kg");
    console.log("* Total mass: " + totalMassKg + " kg");
    console.log();
    console.log("------------------------------");
    console.log("> FUEL DATA");
    console.log("------------------------------");
    console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
    console.log();
    console.log("------------------------------");
    console.log("> FLIGHT PLAN");
    console.log("------------------------------");
    console.log("* weather: " + weatherStatus);
    console.log();
    console.log("------------------------------");
    console.log("> OVERALL STATUS");
    console.log("------------------------------");
    console.log("* Clear for takeoff: YES");
    console.log();
    console.log("------------------------------");
    console.log("Have a safe flight astronauts!");
} else {
    console.log("Cancel the flight!");
}