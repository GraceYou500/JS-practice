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
class CarCl {
  constructor(make, spped) {
    this.make = make;
    this.speed = spped;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  brake() {
    this.speed -= 5;
    return this;
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

// console.log(ford.accelerate());
// console.log(ford.accelerate());
// console.log(ford.brake());

// ford.speedUS = 50;
// console.log(ford);

// Challenge 3

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // Link the prototype

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

// const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// Challenge 4

const revian = new EVCl('Rivian', 120, 23);
console.log(revian);
// console.log(revian.#charge);
revian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(revian.speedUS);
