/*
let country = "India"
let continent = "Asia"
let population = 1417; // In million
 
console.log(country);
console.log(continent);
console.log(population);
 
let IsIsland = false;
let languase;
 
console.log(typeof IsIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof langause);
 
 
langause = 'hindi';
const country = 'India';
const continent = 'Asia';
const isIsland = false;
isIsland = true;
 
 
let country = 'India';
let population = 1417; // in millions
let continent = 'Asia';
let language = 'Hindi';
let hindiSpeakingPopulation = 623.48; // in millions
 
// Calculate the population in each half if the country splits
console.log("Population per half if the country splits:", population / 2);
 
// Increase the population by 1 and log the result
population++;
console.log("Increased population:", population);
 
// Compare the population with Finland (6 million) and log the result
const finlandPopulation = 6; // in million
console.log("Does the country have more people than Finland?", population > finlandPopulation);
 
// Compare the population with the average country population (33 million) and log the result
const averagePopulation = 33; // In million
console.log("Does the country have less people than the average country?", population < averagePopulation);
 
// Creating description string
const description = `${country} is in ${continent}, and its ${populationSpeakHindi} million people speak Hindi.`;
console.log(description);
 
// Given variables
const country = "India";
const continent = "Asia";
let population = 1417; // in million
const percentageSpeakingHindi = 44;
const hindiSpeakingPopulation = (percentageSpeakingHindi / 100) * population; // Calculating the population speaking Hindi
 
// Creating the description variable
const description = ` ${country} is in ${continent}, and its ${hindiSpeakingPopulation.toFixed(2)} million people speak Hindi`;
 
console.log(description);
 
 
 
const firstName = "Rashmi";
const job = " Devops";
const birthyear = 1980;
const year = 2024;
 
const rashmi = "I'm " + firstName + ", a " + (year - birthyear) + " years old " + job  +
"!";
console.log(rashmi);
 
const rashmiNew = `I'm ${firstName},  a ${year - birthyear} year old ${job}!`;
console.log(rashmiNew);
 
console.log(`Just a regular string...`);
 
console.log(`String with \n\ multiple \n\ lines`);
 
console.log(`string multiple lines`);
 
 
 
const age = 16;
 
if (age >= 18) {
    console.log('Ishika can start driving licence');
 
} else {
 
    const yearsLeft = 18 - age;
    console.log(`Ishika is too young. Wait another ${yearsLeft} years :)`);
}
 
const birthyear = 2012;
 
let century;
if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
 
console.log(century);
 
 
 
const country = "India";
let population = 1417; // In million
 
if (population > 33) {
    console.log(`${country}'s population is ${population - 33} million above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
}
//// Test with population temporarily set to 13
//population = 13;
//if (population > 33) {
//    console.log(`${country}'s population is ${population - 33} million above average.`);
//} else {
//    console.log(`${country}'s population is ${33 - population } million below average.`);
//}
//// Test with population temporarly set to 130
//population = 130;
//if (population > 33) {
//    console.log(`${country}'s population is ${population - 33} million above average.`);
//} else {
//    console.log(`${country}'s population is ${33 - population} million below average.`);
//}
 
 
 
console.log('9' - '5'); // -> ? 4
console.log('19' - '13' + '17'); // -> ? '617'
console.log('19' - '13' + 17); // -> ? 23
console.log('123' < 57); // -> ? false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ? 1143
 
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
 
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than one border');
} else {
    console.log('No borders');
}
  
 
 
const country = "India"
const speakEnglish = true; // change to false if your country doesn't speak english
const population = 1430; // change to more than 50 if your country has more than 50 million people
const isIsland = false; // change to true if your country isIsland
// Temporarily change some variables to make the condition true
// For example, set language to 'english', population to less than 50, and isIsland to false
 
if (speakEnglish && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
    
   function logLanguageRank(language) {
    switch (language) {
        case 'chinese':
        case 'mandarin':
            console.log('MOST number of native speakers!');
            break;
        case 'spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'english':
            console.log('3rd place');
            break;
        case 'hindi':
            console.log('Number 4');
            break;
        case 'arabic':
            console.log('5th most spoken language');
            break;
        default:
            console.log('Great language too :D');
    }
}
 
// Example calls to the function
logLanguageRank('chinese'); // Output: MOST number of native speakers!
logLanguageRank('spanish'); // Output: 2nd place in number of native speakers
logLanguageRank('english'); // Output: 3rd place
logLanguageRank('hindi'); // Output: Number 4
logLanguageRank('arabic'); // Output: 5th most spoken language
logLanguageRank('french'); // Output: Great language too :D
 
*/