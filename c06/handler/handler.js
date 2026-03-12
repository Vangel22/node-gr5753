const handleWelcome = (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Welcome to our Node.js server!");
};

const greetMyself = () => {};

module.exports = {
  handleWelcome,
};
