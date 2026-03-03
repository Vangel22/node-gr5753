const fs = require("fs"); // core module

// class Test {
//   finally(test) {}
// }

// const testObj = new Test()
// testObj.finally

const readFile = (fileName) => {
  return new Promise((success, fail) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) fail(err);
      success(data);
    });
  });
};

// readFile("data.txt")

module.exports = {
  readFile,
};
