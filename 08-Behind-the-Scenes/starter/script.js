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
console.log(numProducts);
if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
