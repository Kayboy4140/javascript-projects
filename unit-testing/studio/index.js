
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    if (num % 2 === 0) {
        if (num % 3 === 0) {
            if (num % 5 === 0){
                return "LaunchCode Rocks!";
            }
        }
    }
    if (num % 2 === 0) {
        if (num % 3 === 0) {
        return "LaunchCode!";
        }
    }
    if (num % 3 === 0) {
        if (num % 5 === 0) {
        return "Code Rocks!";
        }
    }
    if (num % 2 === 0) {
        if (num % 5 === 0) {
        return "Launch Rocks! (CRASH!!!!)";
        }
    }
    if (num % 2 === 0) {
        return "Launch!"; 
    }
    if (num % 3 === 0) {
        return "Code!";
    }
    if (num % 5 === 0) {
        return "Rocks!";
    }
    if (num % 2 !== 0 || num % 3 !== 0 || num % 5 !== 0) {
        return "Rutabagas! That doesn't work."
    }

  } 
}

console.log(launchcode.launchOutput(14))
module.exports = launchcode;

