const express = require("express");
const app = express();
const port = 3000;

app.use(
  "/",
  express.static("public", { index: false, extensions: ["html", "json"] })
);
app.get("*", (req, res) => res.redirect(301, "./index"));

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
