'use scrict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


function logger() {
    console.log("My name is Rashmi");
}
// calling , running , invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // Log the inputs to the console

  // Create the juice string
  const juice = `juice with ${apples} apples and ${oranges} oranges`;

  // Return the juice string from the function
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
console.log(fruitProcessor(5, 0));

const appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);

// function declaration 
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
 const age1 = calcAge1(1980);

// function expression 
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
 const age2 = calcAge2(1980);
 
console.log(age1 ,age2);



const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// function calling other function

function cutFruitPieces(fruit) {
return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces 
    of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgkoalas) {
    if (avgDolphins >= 2 * avgkoalas) {
        console.log(`Dolphin win 🏆 (${avgDolphins} vs. ${avgkoalas})`);
    } else if (avgkoalas >= 2 * avgDolphins) {
        console.log(`koalas win🏆 (${avgkoalas} vs. $ {avgDolphin})`);
    } else {
        console.log('No team wins..');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

 //Arrays
const friend1 = 'Ishika';
const friend2 = 'Ishaan'; 
const friend3 = 'Chandra';

const friends = ['Ishika', 'Ishaan', 'Chandra'];
console.log(friends);
const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends);

const firstName = 'Rashmi';
const Rashmi = [firstName, 'Rani', 2037 - 1980, 'devOps', friends];
console.log(Rashmi);
console.log(Rashmi.length)
//excersice
const calcAge = function (birthyear) {
    return 2037 - birthyear
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
    calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Ishika', 'Ishaan', 'Chandra'];
// Add elements
const newlength = friends.push('Jay');
console.log(friends);
console.log(newlength);

friends.unshift('Rashmi');
console.log(friends);
 
//Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);// Last
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Ishaan'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Ishaan'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Ishaan')) {
    console.log('You have a friend called Ishaan');
}

// Coding Challenge #2
// Step 1: Function to calculate the tip based on the bill value
const calcTip = function (bill) {

    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
};
// Test the function with a bill value of 100
console.log(calcTip(100));  // Output: 15 (since 100 is between 50 and 300, the tip is 15%)
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1] ,bills[2] + tips[2]];
console.log(bills, tips, total);
// Objects
const Rashmi = {
    firstName: 'Rashmi',
    lastName: 'Rani',
    age: 2037 - 1980,
    job: 'devops',
    friends: ['Ishika', 'Ishaan', 'Chandra'],
  
}
console.log(Rashmi);
//Dot notation
console.log(Rashmi.lastName);
//Brackect notation
console.log(Rashmi['lastname']);

const namekey = 'Name';
console.log(Rashmi['first' + namekey]);
console.log(Rashmi['last' + namekey]);

const interestedIn = prompt('what do you want to know about  rashmi? Choose between firstname, lastName, age, job, and friends');

if (Rashmi[interestedIn]) {
    console.log(Rashmi[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName,lastName, age, job, and friends');
}
Rashmi.location = 'Australia';
Rashmi['twitter'] = '@RashmiRO5298976';
console.log(Rashmi);

// Challange
// "Rashmi has 3 friends, and her best friend is called Ishika"
console.log(`${Rashmi.firstName} has ${Rashmi.friends.length}friends, and his best friend is called ${Rashmi.friends[0]}`);

//object method

const Rashmi = {
    firstName: 'Rashmi',
    lastName: 'Rani',
    birthyear: 1980,
    job: 'devops',
    friends: ['Ishika', 'Ishaan', 'Chandra'],
    hasDriverlicence: true,

    //calcAge: function (birthyear) {
        //return 2037 - birthyear;
    //}

    //calcAge: function () {
   //console.log(this)
    //return 2037 - this.birthyear;
     //}
   
     calcAge: function () {
        this.age = 2037 - this.birthyear;
        return this.age;
},
getSummary: function () {
         return `${this.firstName} is a ${this.calcAge()} -year old ${Rashmi.job}, and she has ${this.hasDriverLicence ? 'a' : 'no'} drivers'licence.`
     }
  
};

console.log(Rashmi.calcAge());


console.log(Rashmi.age);
console.log(Rashmi.age);
console.log(Rashmi.age);

//challenge
//"Rashmi is a 57 year old devops, and she has a driver licence"
console.log(Rashmi.getSummary());

*/