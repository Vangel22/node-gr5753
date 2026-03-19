const express = require("express");

const { write, read } = require("./read-write");

const app = express();

// Globalen middleware - vazi za site ruti
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);

  if (true) {
    next(); // Predaj ja kontrolata na naredniot middleware ili funkcija/ruta
  } else {
    res.send("Error");
  }
});

app.get("/", (req, res) => {
  res.send("Hi students");
});

// Route-specific middleware - vazi za specificna ruta
const aboutMiddleware = (req, res, next) => {
  console.log("About route accessed!");
  next(); // bez next nema da zavrsi baranjeto ke vrti celo vreme
  // next ke go povika: (req, res) => {
  //   res.send("About page");
  // }
  //   res.send("Error")
};

// Odime na ruta /about
// 1. Globalen middlware pecati -> GET /about
// 2. Route specific middleware pecati -> About route accessed!
// 3. GET na /about ni vrakja -> res.send("About page");

app.get("/about", aboutMiddleware, (req, res) => {
  res.send("About page");
});

async function authenticate(req, res, next) {
  const users = await read("users.json");
  const userIndex = Number(req.params.id); // /users/0
  const foundUser = users[userIndex]; // users[0] -> John users[1] -> Jane

  const ROLES = {
    admin: "admin",
    user: "user",
  };

  if (foundUser.role === ROLES.admin) {
    next();
  } else {
    res.status(401).send("Неовластен пристап!");
  }
}

// 1. Globalen middleware pecati -> GET /admin/0
// 2. Route specific middleware -> next() se povikuva
// 3. Kontrolerot od samata ruta vrakja -> Добредојдовте администратор!

app.get("/admin/:id", authenticate, (req, res) => {
  res.send("Добредојдовте администратор!");
});

app.get("/user/:firstname/:lastname", (req, res) => {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});

app.get("/test/:identifier", (req, res) => {
  res.send(`My param: ${req.params.identifier}`);
});

// Query parametar ke go poznaeme po ? vo URL
// Za da gi spoime posle ? koristime & pr. ?name=vangel&page=1&username=vangel22
app.get("/search", (req, res) => {
  const name = req.query.name;
  const page = req.query.page;

  const username = req.query.username;

  res.send(
    `Пребаруваме за ${name} со корисничко име ${username}, страница ${page}`,
  );
});

app.listen(3000, () => console.log("Server is listening on port 3000!"));
