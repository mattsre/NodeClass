require("dotenv").config();
const Sentry = require('@sentry/node');

Sentry.init({ dsn: process.env.SENTRY_DSN });
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const app = express();

// Setup Sentry request handlers
app.use(Sentry.Handlers.requestHandler());

// Database setup
try {
  mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
} catch (error) {
  throw new Error(error.message)
}

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

// Use Sentry error handler, must be after all routers
app.use(Sentry.Handlers.errorHandler())

app.listen(3000);
