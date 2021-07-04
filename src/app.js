const express = require("express");
// Init app
const app = express();

const path = require("path");

// Setup port
const port = process.env.PORT || 3000;

// Setting up paths
const pubPath = path.join(__dirname, "../public/");
app.use(express.static(pubPath));

// Setting up view engine
app.set("view engine", "pug");


// Home Route
app.get("/", (req, res) => {
  res.render("index");
})

// About Router
app.get("/about", (req, res) => {
  res.render("about");
})

app.listen(port, port => {
  console.log(`Listening to port: ${port}`)
})