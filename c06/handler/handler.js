// Aplikaciski kod
const handleWelcome = (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Welcome to our Node.js server!");
};

const handleUser = (req, res, username) => {
  const usernamePattern = /^[a-zA-Z\d_]{3,}$/;

  if (usernamePattern.test(username)) {
    res.writeHead(200, { "content-type": "text/plain" }); // 200 - OK
    res.end(`Hello ${username}`);
  } else {
    res.writeHead(400, { "content-type": "text/plain" }); // 400 - Client error
    res.end("Invalid username format.");
  }
};

const handleNotFound = (req, res) => {
  res.writeHead(404, { "content-type": "text/plain" }); // 404 - Not found
  res.end("Not found");
};

const handlePerson = (req, res, firstname, lastname) => {
  res.writeHead(200, { "content-type": "text/plain" }); // 200 - OK
  res.end(`Hello ${firstname} ${lastname}`);
};

module.exports = {
  handleWelcome,
  handleUser,
  handleNotFound,
  handlePerson,
};
