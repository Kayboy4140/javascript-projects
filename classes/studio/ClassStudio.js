//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores = []) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore)
    }
    average() {
        let sum = 0;
        for (let i=0; i<this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(sum/this.scores.length*10)/10;
    }
    status(averageTestScore = this.average()) {
        if (averageTestScore >= 90) {
            return "Accepted";
        } else if (averageTestScore >= 80 && averageTestScore <= 89) {
            return "Reserve";
        } else if (averageTestScore >= 70 && averageTestScore <= 79) {
            return "Probationary";
        } else if (averageTestScore < 70) {
            return "Rejected"
        }
    }
}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

// console.log(bubbaBear, merryMaltese, gladGator);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


// bubbaBear.addScore(83);
// console.log(bubbaBear.scores);

// console.log(merryMaltese.average());

// console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
// console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
// console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let arr = [90, 95, 80, 95, 100, 100, 100, 100, 100, 100, 100, 100, 100];
for (i=0; i < arr.length; i++) {
    if (gladGator.status() === "Probationary") {
        gladGator.addScore(arr[i]);
        gladGator.average();
        gladGator.status();
    }
}

console.log(`${gladGator.name} has now earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()} in ${gladGator.scores.length} attempted tests.`);

// for (i=0; i < arr.length; i++) {
//     if (gladGator.status() === "Probationary" || gladGator.status() === "Reserve") {
//         gladGator.addScore(arr[i]);
//         gladGator.average();
//         gladGator.status();
//     }
// }

// console.log(`${gladGator.name} has now earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()} in ${gladGator.scores.length} attempted tests.`);