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

const tesla = { make: 'tesla', speed: 122 };

// challenge 2
class CarCl {
  constructor(make, spped) {
    this.make = make;
    this.speed = spped;
  }

  accelerate() {
    return (this.speed += 10);
  }

  brake() {
    return (this.speed -= 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);

console.log(ford.accelerate());
console.log(ford.accelerate());
console.log(ford.brake());

ford.speedUS = 50;
console.log(ford);
