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
*/
// Step 1: Create an array of neighbouring countries
const neighbours = ['France', 'Belgium', 'Netherlands'];
// Step 2: Add 'Utopia' to the end of the array
neighbours.push('Utopia');
console.log(neighbours)
// Step 3: Remove 'Utopia' from the end of the array
neighbours.pop('Utopia');
console.log(neighbours);
// Step 4: Check if 'Germany' is in the neighbours array
if (neighbours.includes('germany')) {
   console.log('Probably not a central European country :D');
}
// Step 5: Change the name of one of the neighbouring countries
// Let's change 'Netherlands' to 'Kingdom of the Netherlands' neighbours.indexOf('Netherlands');
neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);

























