// Code your orbitCircumference function here:

function orbitCircumference(altitude) {
  return Math.round(2 * Math.PI * altitude);
}

// console.log(orbitCircumference(2000));

// Code your missionDuration function here:

function missionDuration(numberOfOrbitsCompleted, alt = 2000, speed = 28000) {
  let circumference = orbitCircumference(alt);
  let distance = numberOfOrbitsCompleted * circumference;
  let time = Math.round(distance / speed * 100) / 100;
  return time;
}

// console.log(missionDuration(5));

// console.log(`The mission will travel ${orbitCircumference(2000) * 5} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)


// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(array) {
  let index = Math.floor(Math.random()*(array.length));
  return array[index]
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate, alt = 2000, speed = 28000) {
  let hoursTheSpaceWalkTakes = missionDuration(3, alt, speed);
  let oxygen = Math.round(candidate.o2Used(hoursTheSpaceWalkTakes) * 1000) / 1000;
  return `${candidate.name} will perform the spacewalk, which will last ${hoursTheSpaceWalkTakes} and require ${oxygen} kg of oxygen.` 
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log(oxygenExpended(selectRandomEntry(crew)));