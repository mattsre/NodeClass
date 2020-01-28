const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("generateGrid", size => {
  const gridSize = size;
  let table = "<table><tbody>";

  for (let i = 0; i < gridSize; i++) {
    let row = "<tr>";
    for (let h = 0; h < gridSize; h++) {
      const color = (((1 << 24) * Math.random()) | 0).toString(16);
      let data = `<td style="background-color: #${color};">${color}<br/><span style="color:#fff;">#${color}</span></td>`;
      row += data;
    }
    table += row;
  }

  table += "</tbody><table>";
  return new hbs.handlebars.SafeString(table);
});

hbs.registerHelper("error404", () => {
  const num = Math.random() * (50 - 20) + 20;
  const classes = ["shrink", "rotate", "still"];

  let html = "";
  for (let i = 0; i < num; i++) {
    let div = `<div class="${classes[i % 3]}">404</div>`;
    html += div;
  }

  return new hbs.handlebars.SafeString(html);
});

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About"
  });
});

app.get("/form", (req, res) => {
  res.render("form", {
    title: "Form Page"
  });
});

app.post("/results", (req, res) => {
  res.render("results", {
    ...req.body
  });
});

app.get("/colors", (req, res) => {
  res.render("colors", {
    size: req.body.gridSize ? req.body.gridSize : 3,
    sizeOptions: [3, 4, 5, 10, 20]
  });
});

app.post("/colors", (req, res) => {
  res.render("colors", {
    size: req.body.gridSize ? req.body.gridSize : 3,
    sizeOptions: [3, 4, 5, 10, 20]
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}/`)
);
