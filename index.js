const express = require("express");
const app = express();
const port = 3000;

app.get("/get_name", (req, res) => {
  res.send("Hello World!");
});
app.post("/save_name", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
