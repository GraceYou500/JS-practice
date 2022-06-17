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

console.log(jonas.__proto__.__proto__); // propotype property of Object
console.log(jonas.__proto__.__proto__.__proto__); // top of the propotype chain

console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 4, 3, 2, 5, 6, 7, 8]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

//Not do this below in actual work
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
  // console.log(`${this.make} speed is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} speed is going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const benz = new Car('Mercedes', 95);

console.log(bmw, benz);
console.log(bmw.accelerate());
console.log(bmw.accelerate());
bmw.accelerate();
bmw.brake();
bmw.accelerate();

const tesla = { make: 'tesla', speed: 122 };
