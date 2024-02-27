const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const sass = require("node-sass");
const app = express();
const port = 3000;

//Handle Static file
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname));

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource\\views"));

//Render page
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
