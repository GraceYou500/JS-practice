'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are the age ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      output = `NEW OUTPUT!`;

      const str = `Oh, and you are millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    // console.log(str); Same error, const and let variables are block variables, only accessable in the block they are created.

    console.log(millenial); // Var variable is not block,it is function scope, ignore the block. it is still in the function, can still access the variable.
    // console.log(add(2, 3)); // add function is in the bloack of IF statement, cannot call outsider.

    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

//concole.log(age)
//printAge() Same as age, cannot call the function outsider

//Variables
console.log(me);
// console.log(job);
// console.log(birthYear);

var me = 'Jonas';
let job = 'teach';
const birthYear = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };  Not work because of TDZ

// var addArrow = (a, b) => a + b;  Not work because undefined(a, b) is not a function

//Example
// console.log(numProducts);
// if (!numProducts) deleteShopingCart();

// var numProducts = 10;

// function deleteShopingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge2 = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log('here2', this);
// };

// calcAge2(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log('here2', this);
// };
// calcAgeArrow(1990);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log('here3', this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const mati = {
//   year: 2017,
// };

// mati.calcAge = jonas.calcAge;

// console.log('here4', mati);
// mati.calcAge();

// const f = jonas.calcAge;

// console.log(f);
// f();

// var firstName2 = 'Mati';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log('here5', this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that to point the object
    // const isMillen = function () {
    //   console.log('here6', self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && year <= 1996);
    // };

    //Solution 2

    const isMillen = () => {
      console.log('here6', this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillen();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

//Argument keyword
const addExpre = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpre(2, 5);
addExpre(2, 5, 8, 12);

//Argument keywords only can use (exist) in expression and declaration function, cannot in Arrow function
var addArrowFu = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrowFu(2, 5, 8);
