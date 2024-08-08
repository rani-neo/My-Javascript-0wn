
/*
let js = 'amazing';
  console.log(40 + 8 + 23 - 10);
  
 
console.log("Rashmi");
 
console.log(40);
 
let firstName = "Ishaan";
 
 
 
console.log(firstName);
 
console.log(firstName);
 
console.log(firstName);
 
 
 
let rashmi_ishaan = "RI"
 
let $function = 27;
 
let person = 'jones'
 
let PI = 3.1415;
 
 
 
let myFirstJob = "Admin";
 
let myCurrentJob = "DevOps";
 
console.log(myFirstJob);
 
 
 
 
let = true;
let javascriptIsFun = true;
console.log(javascriptIsFun);
 
//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Rashmi');
 
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
 
let year;
console.log(year);
console.log(typeof year);
 
year = 1991;
console.log(typeof year);
 
console.log(typeof null);
 
 
let age = 30;
age = 31;
 
const birthYear = 1991;
//birthYear = 1990;
 
//const job;
 
var job = 'admin';
job = 'DevOps'
lastname = 'Rani';
console.log(lastname);
 
//math operator
const now = 2024;
const ageRashmi = now - 1980;
const ageIshaan = now - 2013;
 
console.log(ageRashmi, ageIshaan);
console.log(ageRashmi * 2, ageRashmi / 10, 2 ** 3);
// 2 ** means 2 to the power of 3 = 2 * 2 * 2 *
 
const firstName = 'Rashmi';
const lastName = 'Rani';
 
console.log(firstName + ' ' + lastName);
 
//assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // Decrement x by 1, so x = 100
x--; // Decrement x by 1 again, so x = 99
console.log(x);
 
//comparison operator
console.log(ageRashmi > ageIshaan); // >, <, >=, <=
console.log(ageIshaan >= 12);
 
const isFullAge = ageIshaan >= 12;
console.log(now - 1980 > now - 2013);
 
const now = 2024;
const ageRashmi = now - 1980;
const ageIshaan = now - 2013;
 
console.log(now - 1980 > now - 2013);
 
let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x,y)
 
const averageAge = (ageRashmi + ageIshaan) / 2
console.log(ageRashmi, ageIshaan, averageAge);
 
 
//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;
 
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
 
 
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI);
 
//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;//
 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI);
 
if (BMIMark > BMIJohn) {
  console.log(`"Mark's BMI (${BMIMark}) is higher than JOhn's! (${BMIJohn})!"`)
} else {
  console.log(`"John's BMI  (${BMIJohn}) is higher than Mark's! (${BMIMark})!"`)
}
 
const inputYear = '1991';
 
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
 
console.log(Number('Rashmi'));
console.log(typeof NaN);
 
console.log(String(23), 23);
 
// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3)
console.log('23' / '2')
 
let n = '1' + 1; // 11;
n = n - 1;
console.log(n);
 
// five falsy values: 0, '',undefined, null, NaN
 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jones'));
console.log(Boolean({ }));
console.log(Boolean(''));
 
const money = 100;
if (money) {
  console.log("Don't spend it all; )");
} else {
  console.log('You should get a job');
}
 
let height = 0;
if (height) {
  console.log('Yea height is defined');
 
} else {
  console.log('Height is undefined');
}
 
const age = '18';
if (age === 18) console.log('You just became an adlut:D (strict)');
if (age == 18) console.log('You just became an adlut:D (loose)');
 
const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
 
if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('cool! 23 is an amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number!')
} else {
  console.log('Number is not 23 or 7 or 9')
}
if (favourite !== 23) console.log('Why not 23?');
 
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
 
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
 
// if (hasDriversLicense && hasGoodVision) {
  // console.log('Sarah is able to drive!');
//
// } else {
  // console.log('someone else should drive...');
  // }
//
const isTired = false; // c
console.log(hasDriversLicense && hasGoodVision && !isTired); {
 
}
 
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
 
} else {
  console.log('someone else should drive...');
  }
 
 
const scoreDolphins = (96 + 108 + 101) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
 
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphin win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both will win trophy');
}
 
 
// Bonus 1
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
 
console.log(scoreDolphins, scoreKoalas);
 
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy');
}
 
 
const day = 'monday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D', '😄');
    break;
  default:
    console.log('Not a valid day!')
}
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
   
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
   
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
console.log('Enjoy the weekend :D', '😄');
} else {
  console.log('Not a valid day!');
}
 
3 + 4
1980
true && false && !false
if (23 > 10) {
const str = '23 is bigger'
}
const me = 'Rashmi';
console.log(`I'm ${2024-1980} years old ${me}`)
 
 
  
const age = 23;
//age >= 18 ? console.log('I like to drink wine🍷') :
// console.log('I like to drink water💧');
 
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);
 
let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);
 
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
 
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
 




















