// Primitive data types
// String, Number, Boolean, Symbol

// Non-primitive data types
// Objects, Functions, Arrays

// Scope
// 1. Global
// 2. Function - var
// 3. Block - const, let

var test = 1; // Global scope
var logic = false;
const testOne = "Test one"; // Global scope
let testTwo = "Test three"; // Global scope

const MAX_NUMBER = 999; // usage in a for cycle

// for (let i = 0; i < MAX_NUMBER; i++) {
//   console.log("I go to MAX_NUMBER");
// }

// true
// false

function scopeTest() {
  // Function scope
  if (true) {
    // Block scope
    var name = "John";
    const surname = "Doe";
    let age = 25;
    console.log(name, surname, age);
  }
  console.log("Reference error, block scope variable.", surname);
  console.log("Name, function scope", name);
}

// scopeTest();

// Conditionals
const testVar = false;
const varTest = true;

if (!testVar) {
  // false -> true
  // true -> false
  //   console.log("NOT");
}

if (testVar || varTest) {
  // false false -> false
  // false true -> true
  // true false -> true
  // true true -> true
  //   console.log("OR");
}

if (!testVar || !varTest) {
  // false false -> true
  // false true -> false
  // true false -> false
  // true true -> false
  //   console.log("NOR");
}

if (testVar && varTest) {
  // false false -> false
  // false true -> false
  // true false -> false
  // true true -> true
  //   console.log("AND");
}

// FIX THIS
if ((testVar && !varTest) || (!testVar && varTest)) {
  // false false -> true
  // false true -> false
  // true false -> false
  // true true -> false
  //   console.log("XOR");
}

// Logical operators - OR, AND, XOR, NOR, NOT
// 0 1

const myName = "John";
// myName = "Jane"; // TypeError: Assignment to constant variable.
let mySurname = "Doe";
mySurname = "Test";

// console.log(mySurname);

// Object - key, value

// person is an Object
// firstname is key
// "John" is value for firstname
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 20,
  address: "Test 123",
};

person.age = 25;

// console.log("Person age", person.age);
// console.log("Dot notation: ", person.address);
// console.log("Bracket notation: ", person["firstname"]);

function greetMe(key) {
  // key is String
  // key = "firstname"
  // person["firstname"]
  console.log(`${key}:`, person[key]);
}

// greetMe("firstname");

const keyAddress = "address";
// console.log("Person address: ", person[keyAddress]);

// Array
const numbers = [33, 3, 13, 7, 17, 9, 2];
// console.log("Arrays start from zero: ", numbers[0]);
// console.log(numbers.length);

function testFun(num) {
  return num;
}

const testArrow = (num) => num;
const testReturnArrow = (num) => {
  return num;
};

for (let i = 0; i < 5; i++) {
  //   console.log(testFun(i));
  //   console.log(testArrow(i));
  //   console.log(testReturnArrow(i));
}

// = initialization
// == comparisson
// === comparisson with value and type

const findOdd = numbers.find((num) => num % 2 !== 0); // Returns the first match from the array
// console.log("Odd number: ", findOdd);

const newNumbers = numbers.map((num) => num * 2); // Returns a new array mapped from the original one
// console.log("Mapped numbers: ", newNumbers);

const numbersBiggerThanFive = numbers.filter((num) => num > 5);
// console.log("Bigger than five: ", numbersBiggerThanFive);

// const sortNumbers = numbers.sort((a, b) => {
//   if (a < b) return -1; // ascending
//   if (a > b) return 1; // descending
//   if (a === b) return 0;
// });

const testCondition = "abc" === "bca";

// Functions for number arrays
const sortNumbers = numbers.sort((a, b) => a - b); // ascending
// const sortNumbers = numbers.sort((a, b) => b - a); // descending

console.log("Sorted numbers", sortNumbers);
