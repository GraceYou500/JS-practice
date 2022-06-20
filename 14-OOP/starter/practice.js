'use strict';

// Chllenge 1
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

// const tesla = { make: 'tesla', speed: 122 };

// challenge 2
// class CarCl {
//   constructor(make, spped) {
//     this.make = make;
//     this.speed = spped;
//   }

//   accelerate() {
//     return (this.speed += 10);
//   }

//   brake() {
//     return (this.speed -= 5);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);

// console.log(ford.speedUS);

// console.log(ford.accelerate());
// console.log(ford.accelerate());
// console.log(ford.brake());

// ford.speedUS = 50;
// console.log(ford);

// Challenge 3

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
