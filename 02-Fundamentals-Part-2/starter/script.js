"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive!");

// // const interface = "Audio";
// // const private = 534;

// function logger() {
//   console.log("My name is Grace");
// }

// // calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Function declaration

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// console.log(calcAge2(1991));

// //Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(1991));

// const yearsUntilRetired = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   // return retirment;
//   return `${firstName} retires in ${retirment} years.`;
// };

// console.log(yearsUntilRetired(1991, "Jonas"));
// console.log(yearsUntilRetired(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePicese = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apples and ${orangePicese} pieces of oranges.`;
//   // const juice = `juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetired = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirment = 65 - age;

//   if (retirment > 0) {
//     console.log(`${firstName} retires in ${retirment} years.`);
//     return retirment;
//   } else {
//     console.log(`${firstName} has already retired.`);
//     return -1;
//   }

//   // return `${firstName} retires in ${retirment} years.`;
// };
// console.log(yearsUntilRetired(1991, "Jonas"));
// console.log(yearsUntilRetired(1950, "Mike"));

// const yearsUntilRetired = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   // return retirment;
//   return `${firstName} retires in ${retirment} years.`;
// };
// console.log(yearsUntilRetired(1991, "Jonas"));

// //Grace solution for challabnge 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // const dolphinsAveg = calcAverage(44, 23, 71);
// // const koalasAveg = calcAverage(65, 54, 49);
// // console.log(dolphinsAveg);
// // console.log(koalasAveg);
// const d = [1, 2, 3];
// const checkWinner = function (
//   scoreD1,
//   scoreD2,
//   scoreD3,
//   scoreK1,
//   scoreK2,
//   scoreK3
// ) {
//   const avgDolphins = calcAverage(scoreD1, scoreD2, scoreD3);
//   const avgkoalas = calcAverage(scoreK1, scoreK2, scoreK3);
//   let winner = 2;
//   if (avgDolphins >= avgkoalas * 2) {
//     winner = `Dolphins win (${avgDolphins} vs. ${avgkoalas}).`;
//   } else if (avgkoalas >= avgDolphins * 2) {
//     let winner = `koalas win (${avgkoalas} vs. ${avgDolphins}).`;
//     return winner;
//   } else {
//     let winner = "No winner!";
//     return winner;
//   }
//   return winner;
// };
// const aa = checkWinner(44, 23, 71, 65, 54, 49);
// console.log("here1", aa);
// console.log("here2", checkWinner(85, 54, 41, 23, 34, 27));

// Jonas solution

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4, 5));

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scorekoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scorekoalas);

// const checkWinner = function (avgDolphins, avgkoalas) {
//   if (avgDolphins >= 2 * avgkoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgkoalas})`);
//   } else if (avgkoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgkoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(scoreDolphins, scorekoalas);

// //Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scorekoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scorekoalas);
// checkWinner(scoreDolphins, scorekoalas);

const friend1 = "Michael";
const friend2 = "Steve";
const friend3 = "Peter";

const friends = ["Michael", "Steve", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

//cannot replace the array totally, but can change element in the array
// friends = ["Bob", "Aly"];

const firstName = "Jonas";
const jonas = [firstName, "Schem", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Excercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
