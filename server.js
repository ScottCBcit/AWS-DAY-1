const express = require("express");
const app = express();

const getRandomNumber20 = () => Math.floor(Math.random() * 20 + 1);
const getRandomNumber10 = () => Math.floor(Math.random() * 10 + 1);
const getRandomNumber8 = () => Math.floor(Math.random() * 8 + 1);
const getRandomNumber6 = () => Math.floor(Math.random() * 6 + 1);
const getRandomNumber4 = () => Math.floor(Math.random() * 4 + 1);

app.get("/", (req, res) => {
  console.log("GET /");
  res.send({
    randomDiceRolls: {
      fourSidedDice: getRandomNumber4(),
      sixSidedDice: getRandomNumber6(),
      eightSidedDice: getRandomNumber8(),
      tenSidedDice: getRandomNumber10(),
      twentySidedDice: getRandomNumber20()
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
