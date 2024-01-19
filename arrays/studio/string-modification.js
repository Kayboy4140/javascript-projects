const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str1 = str.slice(3,10) + str.slice(0,3);
console.log(str1);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original word is ${str}, however, after converting to pseudo-pig latin, it becomes ${str1}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let sliceSize = input.question("How many letters do you want to relocate? ");
let str2 = str.slice(Number(sliceSize),str.length) + str.slice(0, Number(sliceSize));
// console.log(`The original word is ${str}, however, after converting to pseudo-pig latin, it becomes ${str2}.`);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (Number(sliceSize) <= str.length) {
    console.log(`The original word is ${str}, however, after converting to pseudo-pig latin, it becomes ${str2}.`);
} else {
    console.log(`The number chosen is longer than the length of ${str}. The default pseudo-pig latin word is ${str1}.`);
}


