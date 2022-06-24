'use strict';

// constructor functions
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create a method inside of a constructor function
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);

// console.log(jonas);

// // 1. New {} is created ( new empty object was created)
// // 2. function is called, this = {}
// // 3. () linked to prototype
// // 4. function auto return {} with created properties

// const matila = new Person('Matila', 2017);
// const jack = new Person('Jack', 2000);
// console.log(matila, jack);

// Person.hey = function () {
//   console.log('Hey there🙌');
//   console.log(this);
// };

// Person.hey();
// // jonas.hey(); Not work

// const jay = 'jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// console.log(jonas.__proto__);
// // Propotypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// console.log(jonas);
// matila.calcAge();

// console.log(jonas.__proto__);
// console.log(Person.prototype);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapi';
// console.log(jonas.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(Person.prototype.constructor === Person);

// console.log(Person.__proto__);
// console.log(Object.__proto__);

// console.log(jonas.__proto__.__proto__); // propotype property of Object
// console.log(jonas.__proto__.__proto__.__proto__); // top of the propotype chain

// console.dir(Person.prototype.constructor);

// const arr = [2, 3, 4, 4, 3, 2, 5, 6, 7, 8]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// //Not do this below in actual work
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// console.dir(x => x + 1);

// ES6 classes

// Class expression
// const PersonCl1 = class {};

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  } // the method in prototype not the object themselves.

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there🙌');
    console.log(this);
  }
}

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// PersonCl.hey();

// // 1. Classes are Not hoisted ( cannot use them before declared)
// // 2. Classes are first-class citizen ( we can pass them into functions, and also return them from functions)
// // 3. Classes are execute in strict mode

// const walter = new PersonCl('Walter White', 1965);
// console.log(walter);

// // Setter and getter
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// // Static method

// // Object.create()

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto); // create a new object and link to the prototype
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979); // Sarah called the method, so this keyword will be sarah object.
// sarah.calcAge();

// // inheritance between classes

// // Constructor functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer');
// console.log(mike);

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person); // Also true, as we linked the prototype of Person and Student
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// ES6 Classes

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fulltName} and study ${this.course}`);
  }

  calcAge() {
    console.log(
      `i am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const Martah = new StudentCl('marta Jonas', 2012);
const Marta = new StudentCl('marta Jonas', 2012, 'computer');

// console.log(Martah.age);
// Martah.calcAge();

// Marta.calcAge();

// // Object Create - inherance between classes

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('jay', 2010, 'compouter');
// jay.introduce();

// 1) Public (instance) fields
// 2) Private fields
// 3) public methods
// 4) Private methods
class Account {
  // 1) define public fields (still present on all instances, not in prototype)
  locale = navigator.language;

  // 2) Private fields (also available on instance, properties are really not accessable by outside (only available in Google Chrome now))
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protect property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an accoint, ${owner}`);
  }

  // 3) public methods
  // Public interface of our objects
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approeved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('jonas', 'UER', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
Account.helper();

// console.log(acc1.pin);
// console.log(acc1.#movements);
// console.log(acc1.#pin);

// Chaining methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
