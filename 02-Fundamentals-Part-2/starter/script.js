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

// const friend1 = "Michael";
// const friend2 = "Steve";
// const friend3 = "Peter";

// const friends = ["Michael", "Steve", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "jay";
// console.log(friends);

// //cannot replace the array totally, but can change element in the array
// // friends = ["Bob", "Aly"];

// const firstName = "Jonas";
// const jonas = [firstName, "Schem", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// //Excercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// const friends = ["Michael", "Steve", "Peter"];

// //Add elements
// const newLength = friends.push("jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// //Remove element
// friends.pop(); //remove last element
// const popped = friends.pop(); //remove last element, and return last element
// console.log(popped);
// console.log(friends);

// friends.shift(); // remov and return the first element
// console.log(friends);

// console.log(friends.indexOf("Steve"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steve"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steve")) {
//   console.log("You have a friend called Steve");
// }

// const calTip = function (billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     const tips = billValue * 0.15;
//     return tips;
//   } else {
//     const tips = billValue * 0.2;
//     return tips;
//   }
// };

// console.log(calTip(100));

// const bills = [125, 555, 44];
// console.log(bills);
// const tipOfBill = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// console.log(tipOfBill);

// const total = [
//   bills[0] + tipOfBill[0],
//   bills[1] + tipOfBill[1],
//   bills[2] + tipOfBill[2],
// ];
// console.log(total);

// const calTipJonas = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // const calcTipJonas = (bill) =>
// //   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const jonasArray = [
//   "Jonas",
//   "schem",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steve"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schem",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Steve"],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const namekey = "Name";
// console.log(jonas["first" + namekey]);
// console.log(jonas["last" + namekey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// jonas.location = "Sydney";
// jonas["twitter"] = "@graceyou";
// console.log(jonas);

// //Challenge
// const cents = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`;

// console.log(cents);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schem",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Steve"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

// getSummary: function () {
//   if (this.hasDriversLicense) {
//     this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has a driver's license.`;
//     return this.summary;
//   } else {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has no driver's license.`;
//   }
// },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log("here2", jonas.calcAge());
// // console.log(jonas["calcAge"](1991));

// // console.log("here3", jonas.age);
// // console.log(jonas.age);
// // console.log(jonas.age);
// // console.log("here1", jonas.age);

// //Challenge

// console.log("here4", jonas.getSummary());
// // console.log("here 5", jonas.summary);

// jonas.hobby = "fishing";
// console.log(jonas);

//Challengs 3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John  Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
//   );
// }

// console.log("Lifting weights repitition 1");
// console.log("Lifting weights repitition 2");
// console.log("Lifting weights repitition 3");
// console.log("Lifting weights repitition 4");
// console.log("Lifting weights repitition 5");

//for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep}`);
// }

// const jonasArray = [
//   "Jonas",
//   "schem",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steve"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   //reading from jonas array
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   // filling types array
//   // types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// //continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonasArray = [
//   "Jonas",
//   "schem",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steve"],
//   true,
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------Staring exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is about to end...");
//   }
// }

//Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);

// let sum = 0;
// for (let i = 0; i < totals.length; i++) {
//   const addSum = function (eachValue) {
//     sum = sum + eachValue;
//   };
//   addSum(totals[i]);
// }

// console.log(sum);

// const calcAverage = function (arr) {
//   return arr / totals.length;
// };

// console.log(calcAverage(sum));

//Jonas solution for average
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }

  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
