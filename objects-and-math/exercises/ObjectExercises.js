let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let animal1 = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let animal2 = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let animal3 = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

// After you have created the other object literals, add the astronautID property to each one.


superChimpOne["astronautID"] = 1;
salamander["astronautID"] = Math.PI;
animal1["astronautID"] = Math.round(Math.sqrt(8)*100)/100;
animal2["astronautID"] = 2;
animal3["astronautID"] = 7;



// Create an array to hold the animal objects.

let crewArray = [superChimpOne, salamander, animal1, animal2, animal3];

// console.log(crewArray);


// Print out the relevant information about each animal.

function crewReports(object) {
   return `${object["name"]} is a ${object.species}. They are ${object.age} years old and ${object.mass} kilograms. Their ID is ${object.astronautID}.`;
}

// console.log(crewReports(animal1));

// Start an animal race!

function fitnessTest(array){
   let results = [], numSteps, turns;
   for (let i = 0; i < array.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += array[i].move();
       turns++;
       }
       results.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

  for (i=0; i<crewArray.length; i++) {
   console.log(fitnessTest(crewArray)[i]);
  }
 