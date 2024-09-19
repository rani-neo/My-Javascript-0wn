'use scrict';
/*
function describeCountry(country, population, capitalCity) {
 // Return a string in the required format
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
// Call the function 3 times with different countries
const country1 = describeCountry('Finland', 6, 'Helsinki');

const country2 = describeCountry('Japan', '126', 'Tokyo');
const country3 = describeCountry('Canada', 38, 'Ottawa');
console.log(country1, country2, country3);

// Function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
// Call percentageOfWorld1 with three different populations
const chinaPercentage1 = percentageOfWorld1(1441);
const indiaPercentage = percentageOfWorld1(1390);
const usaPercentage = percentageOfWorld1(331);

// Log the results to the console
console.log(`China: ${chinaPercentage1.toFixed(2)}% of the world population`);
console.log(`India: ${indiaPercentage.toFixed(2)}% of the world population`);
console.log(`USA: ${usaPercentage.toFixed(2)}% of the world population`);


//Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWorld3 = population => (population / 7900) * 100;

const persChina3 = percentageOfWorld3(1441);
const persIndia3 = percentageOfWorld3(1390);
const persUsa3 = percentageOfWorld3(331);


console.log(persChina3, persIndia3, persUsa3)


// Function Declaration for percentageOfWorld1
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
// Function Declaration for describePopulation
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage.toFixed(1)}% of the world.`;
}
//Call describePopulation with data for 3 countries
const chinaDescription = describePopulation('China', 1441);
const indiaDescription = describePopulation('India', 1390);
const usaDescription = describePopulation('USA', 331);
// Log the results to the console
console.log(chinaDescription);
console.log(indiaDescription);
console.log(usaDescription);
 
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in $ {retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🥥`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'mike'));

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentage = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// Log the percentages array
console.log(percentage);

// Step 1: Create an array of neighbouring countries
const neighbours = ['France', 'Belgium', 'Netherlands'];
// Step 2: Add 'Utopia' to the end of the array
neighbours.push('Utopia');
console.log(neighbours)
// Step 3: Remove 'Utopia' from the end of the array
neighbours.pop('Utopia');
console.log(neighbours);
// Step 4: Check if 'Germany' is in the neighbours array
if (neighbours.includes('Germany')); {
   console.log('Probably not a central European country :D');
}
// Step 5: Change the name of one of the neighbouring countries
// Let's change 'Netherlands' to 'Kingdom of the Netherlands' neighbours.indexOf('Netherlands');
neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);

// Objects
//const myCountry = {
  //country: 'India',
  //capital: 'New Delhi',
  //language: 'Hindi',
  //population: 1331,
  ////neighbours: ['China', 'Nepal', 'Pakistan'],
//};
//console.log(myCountry);
//dot notation and bracket notation: Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

//Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.


// Step 1: Create the myCountry object
//const myCountry = {
  country: 'India',
  capital: 'New Delhi',
  language: 'Hindi',
  population: 1391,
  neighbours: ['China', 'Nepal', 'Pakistan']
};
// Step 2: Log the desired string
console.log(`${myCountry.country} has  ${myCountry.population} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
// Step 3: Increase the population by 2 million using dot notation
myCountry.population += 2;
console.log(myCountry.population); 
// Step 4: Decrease the population by 2 million using bracket notation
myCountry['population'] -= 2;
console.log(myCountry['population']);  // Outputs: 

//Object method

 const myCountry = {
  country: 'India',
  capital: 'New Delhi',
  language: 'Hindi',
  population: 1391,
   neighbours: ['China', 'Nepal', 'Pakistan'],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.langauges}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
 },
    checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false;

    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  }
};
  // Outputs: 
myCountry.describe();
myCountry.checkIsland();
 
console.log(myCountry);

*/


// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects 
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * 
height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, a
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method 
both objects). Store the BMI value to a property, and also return it from the meth
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 

GOOD LUCK 😀
*/
// const mark = {
  // fullName: 'MArk Miller',
  // mass: 78,
  // height: 1.69,
  // calcBMI: function () {
    // this.bmi = this.mass / this.height ** 2;
    // return this.bmi;
  // }
// };
// const john = {
  // fullName: 'John Smith',
  // mass: 92,
  // height: 1.95,
  // calcBMI: function () {
    // this.bmi = this.mass / this.height ** 2;
    // return this.bmi;
  // }
// 
// };
// mark.calcBMI();
// john.calcBMI();
// 
// console.log(mark.bmi, john.bmi);
//" John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
// if (mark.bmi > john.bmi) {
  //console.log(`${mark.fullName}'s BMI  (${
    //mark.bmi}) is higher than  ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
// // console.log(`${john.fullName}'s BMI (${john.bmi} is heigher than ${mark.fullName}'s BMI (${mark.bmi) `)
// }
// 

// Let's improve Steven's tip calculator even more, this time using loops!
// 
// 1. Create an array 'bills' containing all 10 test bill values
// // 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// // 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips
// // total values (bill + tip) for every bill value in the bills array. Use a for loop t
// perform the 10 calculations!
// 
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// 
// // HINT: Call calcTip in the loop and use the push method to add values to the tips an
// totals arrays 😉
// 
// // 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an 
// // argument. This function calculates the average of all numbers in the given array. T
// // is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  // // 4.1. First, you will need to add up all values in the array. To do the addition,
// // by creating a variable 'sum' that starts at 0. Then loop over the array using a f
// // loop. In each iteration, add the current value to the 'sum' variable. This way, b
// end of the loop, you have all values added together
  // // 4.2. To calculate the average, divide the sum you calculated before by the length
// the array (because that's the number of elements)
  // 4.3. Call the function with the 'totals' array
// 
//  const calcTip = function (bill) {
  // return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//  }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// for (let i = 0; i < bills.length; i++){
  // const tip = calcTip(bills[i]);
  // tips.push(tip);
  // total.push(tip + bills[i]);
// }
// console.log(bills, tips, total);

// const calcAverage = function (arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
    // sum += arr[i];
  // }
  // return sum / arr.length;
// }
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(total));
// console.log(calcAverage(tips));
//Iteration: The for Loop﻿
// There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

// for (let i = 1; i <= 50; i++) {
  // console.log(`Voter number ${i} is currently voting`);
// }
//Looping Arrays, Breaking and Continuing﻿
// Let's bring back the populations array from a previous assignment.
// 
// // // Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.
// 
// // // Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.
// function percentageWorld1(population) {
  //const worldPopulation = 7900; // World population in millions
  //return (population / worldPopulation) * 100;
// }
// 
// Array of populations (replace with your actual population values)
// const populations = [1441, 83, 333, 126];
// 
///Array to store the percentages
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
  // const percentage = percentageWorld1(populations[i]);
//  percentages2.push(percentage);
// }
// console.log(percentages2);
// 
// Looping Backwards and Loops in Loops﻿
// Store this array of arrays into a variable called listOfNeighbours:
// 
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// // Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.
// 
// // You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
// 
// const listOfNeighbours = [['Canada', 'mexixo'], ['spain'], ['Norway', 'Sweden', 'Russia']];
// for (let i = 0; i < listOfNeighbours.length; i++) {
  // for (let j = 0; j < listOfNeighbours[i].length; j++) {
    //  console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  // }
// }
// // Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).
// 
// Reflect on what solution you like better for this task: the for loop or the while loop?

// function percentageWorld1(population) {
// const worldPopulation = 7900; // World population in millions
// return (population / population) * 100;
// }
// const populations = [1441, 83, 333, 126];
// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
  //  percentages3.push(percentageWorld1(populations[i]));
  // i++;
// }
// 
// console.log(percentages3);
// 
