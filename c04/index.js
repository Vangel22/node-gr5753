const http = require("http"); // core module

const { convertMilesToKm, fahrenheitToCelsius } = require("./convert");
// data.convertMilesToKm

// request/response - client/server

// const server = http.createServer((req, res) => {
//   res.end("Hello World!");
// });

// CRUD - Create, Read, Update, Delete
// HTTP - POST, GET (default), PUT, DELETE

const server = http.createServer((req, res) => {
  // req.method - HTTP method
  // req.url - Ruta kade se naogja resursot

  // Postman
  if (req.method === "POST" && req.url === "/convert") {
    let data = "";

    // ovoj event listener se aktivira koga isprakjame podatoci
    req.on("data", (chunk) => {
      // { miles: 10 }
      console.log("chunk", chunk);
      // chunk 1 - { mi
      // chunk 2 - les: 10 }
      data += chunk;
    });

    req.on("end", () => {
      // JSON.parse - ke napravi json vo JS objekt
      // JSON.stringify - ke napravi JS objekt vo json

      // JSON: { "data": 10 }
      // Simulacija na podatok
      // const data = {
      //     miles: 10
      // }

      const parsedData = JSON.parse(data);
      console.log("Parsed data", parsedData);

      const convertedKilometers = convertMilesToKm(parsedData.miles);

      // HTTP status 200 - OK
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(
        `${parsedData.miles} miles to kilometers: ${convertedKilometers}`,
      );
    });
  } else if (req.method === "POST" && req.url === "/to-celsius") {
    console.log("To celsius");
  } else if (req.method === "POST" && req.url === "/to-metres") {
    console.log("To metres");
  } else if (req.method === "POST" && req.url === "/to-kilograms") {
    console.log("To kilograms");
  } else {
    // Site baranja
    res.end("I am lost...");
  }
});

server.listen(3000, () => {
  console.log("Server started at port 3000!");
});
