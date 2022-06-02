'use strict';

const juliaDog = [3, 5, 2, 12, 7];
const kateDog = [4, 1, 15, 8, 3];

const juliaDog2 = [9, 16, 6, 8, 3];
const kateDog2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const correctJulia = dogsJulia.slice(1, -2);
  console.log(correctJulia);
  const dogsBoth = [...correctJulia, ...dogsKate];
  // const dogsBoth = correctJulia.concat(dogsKate);
  // console.log(dogsBoth[0], typeof dogsBoth[0]);
  dogsBoth.forEach(function (age, key) {
    if (age >= 3) {
      console.log(`Dog number ${key + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${key + 1} is still a puppy⛄`);
    }
  });
};
checkDogs(juliaDog, kateDog);
checkDogs(juliaDog2, kateDog2);
