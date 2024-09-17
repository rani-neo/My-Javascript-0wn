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
*/

