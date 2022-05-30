'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const asdasd = 'thu';

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const username = {
//   Carl: 'carsdadqwdxz123esd21',
//   Grace: 'gradawdczsfqawdczx',
// };

// const password = {

//   [username.Carl]: 'lsk',
//   [username.Grace]: 'gra',
// };

// console.log(username);
// console.log(password);

const restaurant = {
  name: 'Classico Italiano',
  // name2: {
  //   firstName: 'Grace',
  //   lastname: 'You',
  // },

  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  },
};

const rest = new Map();
rest.set('name', 'Classical Itali');
rest.set(1, 'Firanze, Italy');
console.log(rest.set(2, 'Lisbon, Poirta'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;

const result = time > rest.get('open') && time < rest.get('close');
console.log(rest.get(result));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(rest.get(arr));

const question = new Map([
  ['question', 'what is the best in world'],
  [1, 'C'],
  [2, 'JAva'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct anwser'],
  [false, 'Try again'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('You answer'));
const answer = 3;

console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to Array

console.log('map to array', [...question]);
console.log(question);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//////////////////////////////////////////////
// Set
// const orderSet = new Set([
//   'Psta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'Psta',
//   'pizza',
// ]);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('galic bread');
// orderSet.add('galic bread');
// orderSet.delete('risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // Example
// const staff = ['Waiter', 'chef', 'Waiter', 'Manager', 'chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staff, staffUnique);
// console.log(
//   new Set(['Waiter', 'chef', 'Waiter', 'Manager', 'chef', 'Waiter']).size
// );

// console.log(new Set('graceyouya').size);

//////////////////////////////////////////////////////////////////
// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

/////////////////////////////////////////////////////////////////////////////////
//Optional chaining

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? ' Method does not exist');
// console.log(restaurant.orderResotto?.(0, 1) ?? ' Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@grace.com' }];
// // const users = [];//
// console.log(users[0]?.name ?? 'User array empty');

// ////////////////////////////////////////////////////////////////////////
// // For - of - Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// // Destructuring each item into 2 variables
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name: 'carpri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Givanni Rossi',
// };

// //OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //nullish assignment operator (null or undefined )
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////////////
//The Nullish Coalescing Operator

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log('here2', guests);

// // Nullish: null and undefined (NOT include 0 or empty string "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// ////////////////////////////////////////////////////////////
// //Short Circuiting (&& and ||)

// console.log('----OR----');
// // Use ANY data type, return ANY date type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log('here1', guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log('here2', guests2);

// console.log('----AND-----');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// //Practical examples
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mashrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mashroom', 'spinach');

// //////////////////////////////////////////////////
// //Rest Pattern and parameters
// //1) Destructuring

// //Spread. because on right side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 6, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mashrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mashrooms');

//////////////////////////////////////////////////////////
//The Spread Operator (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newGoodArr = [1, 2, ...arr];
// console.log(newGoodArr);

// console.log(...newGoodArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];

// console.log(...str);
// console.log(`${...str} Schem`); // NOT work, as ...only can use in building array and used as argument in function, seperate by comma.

//Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'rest Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// console.log(restaurant.name2.firstName);
// restaurantCopy.name2.firstName = 'Carl';
// console.log(restaurantCopy.name2.firstName);
// console.log(restaurant.name2.firstName);

///////////////////////////////////
//Destructuring Objects
// restaurant.orderDelivery({
//   time: '23.30',
//   address: 'foxall road',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '110 foxall',
//   starterIndex: 1,
// });

// ///////////////////////////////////////////////////////
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// ////Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// ////Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////////////////
// Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructering
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

//////////////////////////////////////////////
//Challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Lewandowski'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    console.log(...players, `,Total scored ${players.length}.`);
  },
};
game.odds;
// const aaa = 'odds';
game['odds'];

///////////////////////////////////////////////////////
// Challenge 2

// // 1.
// for (const playerName of game.scored.entries()) {
//   console.log(`Goal${playerName[0] + 1}: ${playerName[1]}`);
// }

// // 2.

// const oddNum = Object.values(game.odds);
// console.log(oddNum);
// let oddItem = 0;
// for (const odd of oddNum) {
//   oddItem += odd;
// }
// console.log(`${oddItem / oddNum.length}`);

// // 3.
// const teamMapping = {
//   team1: game.team1,
//   x: 'draw',
//   team2: game.team2,
// };

// const oddEntires = Object.entries(game.odds);
// console.log(oddEntires);

// for (const [team, value] of oddEntires) {
//   console.log(`odd of ${teamMapping[team]}: ${value}`);

//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${value}`);

//   // console.log(`Odd od ${game[team] || 'draw'}: ${value}`);
// }

// // 4.
// const scorers = {};
// // scorers.Lewandowski;
// // scorers['Lewandowski'];

// for (const scorer of game.scored) {
//   // scorers[scorer]
//   // console.log(scorer);
//   if (!scorers[scorer]) {
//     scorers[scorer] = 1;
//   } else {
//     scorers[scorer] += 1;
//   }
//   // scorers[scorer] = 1;
// }
// console.log(scorers);

// Challenge 1
// // 1.
// // const players1 = game.players[0];
// // const players2 = game.players[1];

// const [players1, players2] = game.players;

// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// // game.odds.team1 ??= 0;
// // game.odds.team2 ??= 0;
// // game.odds.draw ??= 0;

// const { date: day, odds } = game;
// let { team1, team2, x: draw } = odds;
// console.log('a', team1, odds);
// odds.team1 = 3;
// team1 = 2;
// // const { team1, team2, x: draw } = game.odds;
// game.odds.draw = game.odds.x;
// delete game.odds.x;
// console.log('b', team1, odds.team1, game.odds);
// // console.log('aaaa', date, odds);
// console.log(game);
// // 6.
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// // 7.
// // console.log(game.odds.team1 < game.odds.team2 && 'Team1 is more likely to win');
// // console.log(game.odds.team2 < game.odds.team1 && 'Team2 is more likely to win');

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//Challenge 3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// // 1)
// const eventValue = [...gameEvents.values()];
// const eventSet = [...new Set(eventValue)];
// console.log(eventValue, eventSet);
// console.log('here4', gameEvents.values());

// // 2)
// gameEvents.delete(64);

// console.log(gameEvents);

// // 3)

// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minutes`);

// const eventTime = [...gameEvents.keys()].pop();
// console.log(eventTime);

// console.log(`An event happened, on
// average, every ${eventTime / gameEvents.size} minutes`);

// // 4)

// for (const [minute, event] of gameEvents) {
//   if (minute <= 45) {
//     console.log(`[FIRST HALF]${minute}: ${event}`);
//   } else {
//     console.log(`[SECOND HALF]${minute}: ${event}`);
//   }
// }

// for (const [min, value] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF]${min}: ${value}`);
// }

//////////////////////////////////////////////
// Strings

// Working with strings - Part 3

// Split and join

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schem'.split(' '));

const [firstName, lastName] = 'Jonas Schem'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizationName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizationName('jessica ann smith davis');
capitalizationName('grace you');

// Padding

const mesage = 'Go to gate 23!';
console.log(mesage.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(432345354));
console.log(maskCreditCard(4323456734232354));
console.log(maskCreditCard('5437963976035242425788'));

// Repeat

const message2 = 'Bad weather... All Departues Delayed... ';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// Working with strings - Part 2

// const airLine = 'TAP Air Portugal';
// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());
// console.log('grace'.toUpperCase());

// // Fix capitalization in name

// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails

// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimEmail = lowerEmail.trim();
// console.log(trimEmail);

// const nornallisedEmail = loginEmail.toLowerCase().trim();
// console.log(nornallisedEmail);

// console.log(email === nornallisedEmail);

// // Replacing

// const priceGB = '288,97€';
// const priceUS = priceGB.replace('€', '$').replace(',', '.');

// console.log(priceUS);

// const annocement = 'All passengers come to boarding door 23. Boarding door 23!';

// console.log(annocement.replace('door', 'gate'));
// console.log(annocement.replaceAll('door', 'gate'));

// console.log(annocement.replace(/door/g, 'gate'));

// // Booleans

// const plane = 'Airbus320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of hr new Airbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allow to board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// // Working with Strings - Part 1

// const airLine = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airLine.length);
// console.log('B737'.length);

// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.indexOf('Portugal'));

// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));

// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMidSeat = function (seat) {
//   // B and E are middle seats

//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat😬!');
//   } else {
//     console.log('You got lucy👌');
//   }
// };
// checkMidSeat('11B');
// checkMidSeat('32C');
// checkMidSeat('3E');
