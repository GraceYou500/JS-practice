'use strict';

// // Challenge 1
// const juliaDog = [3, 5, 2, 12, 7];
// const kateDog = [4, 1, 15, 8, 3];

// const juliaDog2 = [9, 16, 6, 8, 3];
// const kateDog2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctJulia = dogsJulia.slice(1, -2);
//   console.log(correctJulia);
//   const dogsBoth = [...correctJulia, ...dogsKate];
//   // const dogsBoth = correctJulia.concat(dogsKate);
//   // console.log(dogsBoth[0], typeof dogsBoth[0]);
//   dogsBoth.forEach(function (age, key) {
//     if (age >= 3) {
//       console.log(`Dog number ${key + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${key + 1} is still a puppy⛄`);
//     }
//   });
// };
// checkDogs(juliaDog, kateDog);
// checkDogs(juliaDog2, kateDog2);

// // Challenge 2

const dogs1 = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (dogAges) {
//   const dogHumanAge = dogAges
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18);
//   console.log(dogHumanAge);
//   const calcAvg =
//     // dogHumanAge.reduce((acc, age) => acc + age, 0) / dogHumanAge.length;

//     dogHumanAge.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return calcAvg;
// };

// console.log(calcAverageHumanAge(dogs1));
// console.log(calcAverageHumanAge(dogs2));

// Challenge 3 - change 2 into arrow function and chainning

const calcAverageHumanAge = dogAges =>
  dogAges
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge(dogs1));
console.log(calcAverageHumanAge(dogs2));
