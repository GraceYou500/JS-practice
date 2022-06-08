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

// const calcAverageHumanAge = dogAges =>
//   dogAges
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAge(dogs1));
// console.log(calcAverageHumanAge(dogs2));

// Chalenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
const reconmendFood = dogs.map(
  dog => (dog.recommendFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2.
const dogSarah = dogs.find(acc => acc.owners.includes('Sarah'));
console.log(dogSarah);

console.log(
  `Sarah's dog eating too ${
    dogSarah.curFood > dogSarah.recommendFood * 1.1 ? 'much' : 'little'
  }`
);

// 3.

const dogsEatTooMuch = dogs.filter(
  (_, i) => dogs[i].curFood > dogs[i].recommendFood * 1.1
);
const ownersEatTooMuch = dogsEatTooMuch
  .filter((_, i) => dogsEatTooMuch[i].owners)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs.filter(
//   (_, i) => dogs[i].curFood < dogs[i].recommendFood * 0.9
// );

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dog eating too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dog eating too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendFood));

// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendFood * 0.9 &&
      dog.curFood < dog.recommendFood * 1.1
  )
);

// 7.
const dogsEatOK = dogs.filter(
  dog =>
    dog.curFood > dog.recommendFood * 0.9 &&
    dog.curFood < dog.recommendFood * 1.1
);
console.log(dogsEatOK);

// 8.

const dgosAcending = dogs
  .slice()
  .sort((a, b) => a.recommendFood - b.recommendFood);
console.log(dgosAcending);
console.log(dogs);
