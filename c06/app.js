const url = require("url");
const http = require("http");

const handler = require("./handler/handler");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Napravete handler koj ke go ispise vaseto ime koga ke dopreme do /student

  if (parsedUrl.pathname === "/welcome") {
    handler.handleWelcome(req, res);
  } else if() {
    // Vasiot handler
  } else {
    res.end("Semos Education");
  }
});

server.listen(3000, () => console.log("Server started at port 3000!"));
