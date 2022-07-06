// Exporting module
console.log('Exporting module');

// Blocking code
console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Fim=nish fetching users');

const shippingCost = 10;
export const cart = [];

// export must happen in top-level code, cannot in any if block or function block.
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
