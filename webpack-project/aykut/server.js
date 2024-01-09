const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(420, () => {
  console.log("Server started at http://localhost:420");
});
