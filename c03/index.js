const fs = require("fs");

const { readFile } = require("./read-write");

// Callback
// Analogija - vadenje na karticka vo banka

// Example 1
function callback() {
  console.log("call me back!");
}

// it should have a function parameter
function greetMe(fn) {
  // fn = callback
  fn(); // 2 -> callback()
}

// greetMe(callback);

// Example 2
function someFunction(x, y, cb) {
  // Funkcija 1
  const result = x + y;

  setTimeout(() => {
    cb(result, callbackHell); // printResultCallback(result, callbackHell)
  }, 1000);
}

function printResultCallback(result, cb) {
  // Funkcija 2
  console.log("Result: ", result);
  cb(); // calling a function
}

function callbackHell() {
  // Funckija 3
  console.log("Callback hell");
}

// someFunction(1, 2, printResultCallback);

// Promise - fullfilled, rejected, pending

// readFile("dat.txt")
//   .then((res) => console.log(res)) // fullfilled
//   .catch((err) => console.log(err)) // rejected
//   .finally(() => console.log("Finally block")); // executes every time

// Promise - ES6
// Write file with promise

// Step 1
// const writeFile = () => {}
// Step 2
// const writeFile = () => {
//     return new Promise();
// }
// writeFile().then().catch().finally();
// Step 3

// function promiseCallbacks(resolve, reject) {}

// const writeFile = () => {
//   return new Promise((resolve, reject) => {});
//   return new Promise(function (resolve, reject) {});
//   return new Promise(promiseCallbacks);
// };

// Step 4
// Async - fire and forget
// Sync - synchronize between both sides - bluetooth speaker

// const writeFile = () => {
//   return new Promise((resolve, reject) => {
//     // async function
//     fs.writeFile();
//     // sync function
//     fs.writeFileSync();
//   });
// };

// Step 5

const writeFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile("data.txt", "Semos education!", (err) => {
      if (err) reject(err);
      resolve("Success");
    });
  });
};

writeFile()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Writing operation finished..."));

// student.txt
// writeFile da ja premestite vo read-write.js
// writeFile treba da ima dva parametri writeFile(fileName, data)
// Zapisete go vaseto ime i prezime vo student.txt
