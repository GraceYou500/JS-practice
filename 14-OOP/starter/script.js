'use strict';

// constructor functions
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);

console.log(jonas);

// 1. New {} is created ( new empty object was created)
// 2. function is called, this = {}
// 3. () linked to prototype
// 4. function auto return {} with created properties

const matila = new Person('Matila', 2017);
const jack = new Person('Jack', 2000);
console.log(matila, jack);

const jay = 'jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

console.log(jonas.__proto__);
// Propotypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
console.log(jonas);
matila.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapi';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(Person.prototype.constructor === Person);

console.log(Person.__proto__);
console.log(Object.__proto__);
