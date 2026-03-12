// Infrastrukturen kod
const url = require("url");
const http = require("http");

const handler = require("./handler/handler");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // http://localhost:3000/user?username=Marko123@@@$$$!!
  // req.query -> query parametar - se sto se naogja posle prasalnikot  ( ? )

  // Napravete handler koj ke go ispise vaseto ime koga ke dopreme do /student

  if (parsedUrl.pathname === "/welcome") {
    handler.handleWelcome(req, res);
  } else if (parsedUrl.pathname === "/user") {
    handler.handleUser(req, res, parsedUrl.query.username);
  } else {
    handler.handleNotFound(req, res);
  }
});

server.listen(3000, () => console.log("Server started at port 3000!"));
