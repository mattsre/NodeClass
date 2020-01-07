const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const hostname = "127.0.0.1";

const todoHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  fs.readFile(path.join(__dirname, "../public/todo.json"), (err, data) => {
    if (err) {
      res.writeHead(404, "Not Found");
      res.write("404: File not found");
      return res.end();
    }

    res.statusCode = 200;
    res.write(data);
    return res.end();
  });
};

const indexHandler = (req, res) => {
  fs.readFile(path.join(__dirname, "../public/index.html"), (err, data) => {
    if (err) {
      res.writeHead(404, "Not Found");
      res.write("404: File not found");
      return res.end();
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    return res.end();
  });
};

const readTodoHandler = (req, res) => {
  fs.readFile(path.join(__dirname, "../public/read-todo.html"), (err, data) => {
    if (err) {
      res.writeHead(404, "Not Found");
      res.write("404: File not found");
      return res.end();
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    return res.end();
  });
};

const notFoundHandler = (req, res) => {
  res.writeHead(301, { Location: `http://${req.headers["host"]}/index` });
  res.end();
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/todo":
      todoHandler(req, res);
      break;

    case "/index":
      indexHandler(req, res);
      break;

    case "/read-todo":
      readTodoHandler(req, res);
      break;

    default:
      notFoundHandler(req, res);
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server listening at http://${hostname}:${port}`);
});
