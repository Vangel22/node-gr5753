const http = require("http");
// Handler ili Controller e funkcija koja se spravuva so req, res

const handler = (req, res) => {
  if (req.url === "/") {
    res.end("Welcome!");
  }

  // /sobiranje/2/2 -> 4
  // /odzemanje/4/2 -> 2
  // /mnozenje/4/2 -> 2
  // /delenje/4/2 -> 2

  const [_, op, numOne, numTwo] = req.url.split("/");
  // ["", "sobiranje", "2", "2"]
  const myUrl = req.url.split("/");
  console.log("My url after split: ", myUrl);

  let result = 0;

  // Zadaca: implementirajte mnozenje i delenje
  // Isprobajte go ova preku localhost url

  switch (op) {
    case "sobiranje":
      result = Number(numOne) + Number(numTwo);
      res.end(`${result}`);
      break;
    default:
      res.end("Operacijata ne e prepoznaena!");
      break;
  }
};

const server = http.createServer(handler);

server.listen(3000, () => {
  console.log("Server is listening at port 3000!");
});
