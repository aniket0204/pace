const express = require("express");
// Init app
const app = express();

const path = require("path");

// Setup port
const port = process.env.PORT || 3000;

// Setting up paths
const pubPath = path.join(__dirname, "../public/");
app.use(express.static(pubPath));

const flickity = path.join(__dirname, "..flickity/dist/");
// const flickityJS = path.join(__dirname, "..flickity/dist/");
app.use("/flickity", express.static(flickity));
// app.use("/flickitycss", express.static(flickityJS));

// Setting up view engine
app.set("view engine", "pug");

// Home Route
app.get("/", (req, res) => {
  res.render("index", {
    active: "home",
  });
});

// About Router
app.get("/about", (req, res) => {
  res.render("about", {
    active: "about pace",
  });
});

// Video-Gallery router
app.get("/video-gallery", (req, res) => {
  res.render("videogallery", {
    active: "Video Gallery",
  });
});

// Image-Gallery router
app.get("/image-gallery", (req, res) => {
  res.render("imagegallery", {
    active: "image gallery",
  });
});

app.listen(port, (port) => {
  console.log(`Listening to port: ${port}`);
});
