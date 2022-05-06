// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Martin";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Coder";
// let myCurrentJob = "Programmer";

// console.log(myFirstJob);

// // Assignment

// let country = "China";
// let continent = "Asia";
// let population = "1300mil";

// console.log(country);
// console.log(continent);
// console.log(population);

// let JavascriptIsFun = true;
// console.log(JavascriptIsFun);

// // console.log(typeof true);
// console.log(typeof JavascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonase");

// JavascriptIsFun = "YES!";
// console.log(typeof JavascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1992;
// console.log(typeof year);

// let age = 30;
// age = 31;

// const birthYear = 1992;
// // birthYear = 1991;

// // const Job;

// var job = "accounting";
// job = "Coder";

// //math operators
// const now = 2037;
// const ageGrace = now - 1991;
// const ageTiff = now - 2019;
// console.log(ageGrace, ageTiff);

// console.log(ageGrace * 2, ageGrace / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 *2* 2

// const firstName = "Jonas";
// const lastName = "Schm";
// console.log(firstName + " " + lastName);

// //Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 25 * 4
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// //comparision operators
// console.log(ageGrace > ageTiff); //., <, >=, <=
// console.log(ageTiff >= 18);

// const isFullAge = ageTiff >= 18;

// const now = 2037;
// const ageGrace = now - 1991;
// const ageTiff = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageGrace + ageTiff) / 2;
// console.log(ageGrace, ageTiff, averageAge);

// const massMark = 78;
// const heightMark = 1.69;
// const mbiMark = massMark / heightMark ** 2;
// console.log(mbiMark);

// const massJohn = 92;
// const heightJohn = 1.95;
// const mbiJohn = massJohn / (heightJohn * heightJohn);
// console.log(mbiJohn);

// const markHigherBMI = mbiMark > mbiJohn;
// console.log(markHigherBMI);

// const massMark = 95;
// const heightMark = 1.88;
// const mbiMark = massMark / heightMark ** 2;

// const massJohn = 85;
// const heightJohn = 1.76;
// const mbiJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = mbiMark > mbiJohn;

// console.log(mbiMark, mbiJohn, markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a string...`);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`string
// miltiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
// }

// //if else control struccure: if() {} else {}

// const birthYear = 2022;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// // const massMark = 95;
// // const heightMark = 1.88;
// const mbiMark = massMark / heightMark ** 2;

// // const massJohn = 85;
// // const heightJohn = 1.76;
// const mbiJohn = massJohn / (heightJohn * heightJohn);

// if (mbiMark > mbiJohn) {
//   console.log(`Mark's BMI (${mbiMark}) is higher than John's (${mbiJohn})!`);
// } else {
//   console.log(`John's BMI (${mbiJohn}) is higher than Mark's (${mbiMark})!`);
// }

// //Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));

// console.log(String(23), 23);

// //type coercion
// console.log("I'm " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1; // string "11"
// n = n - 1; // number 11-1
// console.log(n);

// // 5 falsy values: 0, "", undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all :)");
// } else {
//   console.log("you should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined!");
// } else {
//   console.log("Height is UNDIFINED");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult! (Strictly)");
// if (age == 18) console.log("You just became an adult! (loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // "23" == 23 23 === 23
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number!");
// } else if (favourite === 9) {
//   console.log("9 is a good one");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?"); // !== strictly  != loose Always use the strictly version.

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense && hasGoodVision);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sara is able to drive!");
// // } else {
// //   console.log("Someone else should drive..");
// // }

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense || (hasGoodVision && isTired)) {
//   console.log("Sara is able to drive!");
// } else {
//   console.log("Someone else should drive..");
// }

// const dolphins1 = 97;
// const dolphins2 = 112;
// const dolphins3 = 106;

// const Koalas1 = 109;
// const Koalas2 = 95;
// const Koalas3 = 50;

// const averageDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
// const averageKoalas = (Koalas1 + Koalas2 + Koalas3) / 3;
// console.log(averageDolphins, averageKoalas);

// const dolphinsMin = dolphins1 > 100 || dolphins2 > 100 || dolphins3 > 100;
// const koalasMin = Koalas1 > 100 || Koalas2 > 100 || Koalas3 > 100;

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log("Dplphins is the winner!");
// } else if (
//   averageDolphins === averageKoalas &&
//   averageDolphins >= 100 &&
//   averageKoalas >= 100
// ) {
//   console.log("Both of you are winners!");
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//   console.log("Koalas is the winner!");
// } else {
//   console.log("No one win the trophy..");
// }

// const day = "ewe";

// switch (day) {
//   case "monday": // day === "monday"
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend:D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend:D");
// } else {
//   console.log("Not a valid day!");
// }

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1992} years old ${me}`);
