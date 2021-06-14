/** 
//@@ Exporting and Importing in ES6 Modules
//* Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 3);
//2 pizza added to cart
//5 bread added to cart
//3 apples added to cart
console.log(cart);
//(3) [{…}, {…}, {…}]

//@@ The Module Pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalQuantity = 237;
  const totalPrice = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart('apples', 4);
//4 apples added to cart (shipping cost is 10)
ShoppingCart2.addToCart('pizza', 2);
//2 pizza added to cart (shipping cost is 10)
console.log(ShoppingCart2);
//{cart: Array(2), totalPrice: 23, totalQuantity: 237, addToCart: ƒ}
console.log(ShoppingCart2.shippingCost);

//@@ CommonJS Modules
//* Export
export.addToCart =function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  //* Import
  const {addToCart} = require('./shoppingCart.js')
*/
//@@ Introduction to NPM
// import { exportNamedDeclaration } from 'babel-types';
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
import { product } from 'prelude-ls';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
//{cart: Array(2), user: {…}}
//cart: (2) [{…}, {…}]
//user: {loggedIn: false}
console.log(stateDeepClone);
//{cart: Array(2), user: {…}}
//cart: (2) [{…}, {…}]
//user: {loggedIn: true}

//@@ Bundling With Parcel and NPM Scripts
if (module.hot) {
  module.hot.accept();
}

//@@ Configuring Babel and Polyfilling
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const mooping = new Person('mooping');
//Hey, mooping
console.log('mooping' ?? null);
//mooping
console.log(cart.find(el => el.quantity >= 2));
//{product: "pizza", quantity: 2}
Promise.resolve('TEST').then(x => console.log(x));
//TEST

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/array/promise';

//* Polyfilling async function
import 'regenerator-runtime/runtime';
