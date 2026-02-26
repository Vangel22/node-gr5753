function greetMe(name) {
  console.log("My name is", name);
}

function calculator(op, numOne, numTwo) {
  switch (op) {
    case "product":
      return numOne + numTwo;
    case "difference":
      return numOne - numTwo;
    case "multiply":
      return numOne * numTwo;
    case "subtract":
      return numOne / numTwo; // TODO: subtract with zero is impossible
    default:
      return 0;
  }
}

// module.exports = greetMe;

// const test = {
//   greetMe,
//   calculator,
// };

// test.greetMe("Jane")

module.exports = {
  greetMe,
  calculator,
};
