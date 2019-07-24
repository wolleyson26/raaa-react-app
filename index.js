const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "how are you" });
});

const PORT = process.env.PORT || 5005;

app.listen(5005);
