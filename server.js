const express = require("express");
const app = express();

app.use(express.json())
app.use(express.static("build"))


const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "electric",
    level: 99,
  }
]

app.get("/api/pokemons", (req, res) => {
  console.log("GET /api/pokemons")
  console.log(pokemons)
  res.send({pokemons: pokemons})
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body
  console.log("POST /api/pokemons", data)
  data.id = pokemons.length+1
  pokemons.push(data)
  res.send(data)
})

app.get('*', (req, res) => {
  res.sendFile('build/index.html')});


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))