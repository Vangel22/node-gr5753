const path = require("path"); // Core module
const express = require("express"); // Third party module

const { calculator, greetMe } = require("./calculator"); // Local module

// stosakam.greetMe("Sto sakam");
// stosakam.calculator();

// Types of modules:
// 1. Local modules
// 2. Core modules
// 3. Third party modules

// v1
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 26,
};

// v2
// person.address = {
//   street: "Debarska",
//   houseNumber: 10,
//   city: "Strumica",
// };

// greetMe(person.firstname);

// Objects

const human = {
  firstname: "John",
  lastname: "Doe",
  age: 26,
  address: "Merdzan 12",
};

// Destructuring

const { firstname, lastname, age } = human;

console.log(firstname, lastname, age);

// Spread operator - ...
const humanTwo = {
  ...human,
  //   firstname: "John",
  //   lastname: "Doe",
  //   age: 26,
  firstname: "Jane",
  lastname: "Doe",
};

// const humanTwo = {
//   firstname: human.firstname,
//   lastname: human.lastname,
//   age: human.age,
//   address: human.address,
//   firstname: "Jane",
//   lastname: "Doe",
// };

// console.log(humanTwo);

// ctrl + click imeto na funkcijata
console.log(calculator("product", 2, 5));
console.log(calculator("difference", 2, 5));
console.log(calculator("multiply", 2, 5));
console.log(calculator("subtract", 2, 5));
