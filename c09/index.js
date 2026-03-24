// Infrastrukturen kod
const express = require("express");

const { getCalculator, postCalculator } = require("./controllers/calculator");
// ./ znaci momentalnoto mesto kade se naogjame t.e index.js

const app = express();
// app.use(express.json()) - ova znacese deka moze req.body da bide od JSON format
app.use(express.urlencoded({ extended: true })); // ke ni treba koga rabotime so HTML formi

app.get("/calculator", getCalculator); // calculator-form.html
app.post("/calculator", postCalculator); // calculator.html

app.listen(3000, () => console.log("Server is listening at port 3000!"));
