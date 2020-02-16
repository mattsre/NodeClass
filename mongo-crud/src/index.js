require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();

// Database setup
mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error: ")
);

// Middleware registration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine setup
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
hbs.registerPartials(path.join(__dirname, "/views/partials"));

// Routing
const ViewRouter = require("./routes/views");
const APIRouter = require("./routes/api");

app.use("/", ViewRouter);
app.use("/api", APIRouter);

app.listen(3000);
