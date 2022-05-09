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

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetired = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirment = 65 - age;

  if (retirment > 0) {
    console.log(`${firstName} retires in ${retirment} years.`);
    return retirment;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }

  // return `${firstName} retires in ${retirment} years.`;
};
console.log(yearsUntilRetired(1991, "Jonas"));
console.log(yearsUntilRetired(1950, "Mike"));
