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

const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) reject(err);
      resolve("Success");
    });
  });
};

module.exports = {
  readFile,
  writeFile,
};
