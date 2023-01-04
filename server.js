const express = require("express");
const app = express();

const getRandomNumber20 = () => Math.floor(Math.random() * 20 + 1);
const getRandomNumber10 = () => Math.floor(Math.random() * 10 + 1);
const getRandomNumber8 = () => Math.floor(Math.random() * 8 + 1);
const getRandomNumber6 = () => Math.floor(Math.random() * 6 + 1);
const getRandomNumber4 = () => Math.floor(Math.random() * 4 + 1);

app.get("/api/d20", (req, res) => {
  res.send({d20: getRandomNumber20()});
});

app.get("/api/d10", (req, res) => {
  res.send({d10: getRandomNumber10()});
});

app.get("/api/d8", (req, res) => {
  res.send({d8: getRandomNumber8()});
});

app.get("/api/d6", (req, res) => {
  res.send({d6: getRandomNumber6()});
});

app.get("/api/d4", (req, res) => {
  res.send({d4: getRandomNumber4()});
});

app.get("/api/dice", (req, res) => {
  res.send({ d20: getRandomNumber20(), d10: getRandomNumber10(), d8: getRandomNumber8(), d6: getRandomNumber6(), d4: getRandomNumber4() });
});


app.get("/", (req, res) => {
  console.log("GET /");
  res.send(`<h1>Dice Api</h1>`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
