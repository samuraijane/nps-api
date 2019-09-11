require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8080;

const { API_KEY, BASE_URL } = require("./config");

app.use("/", express.static(__dirname + "/public"));

app.get("/nps", function(req, res) {
  // TODO build request to NPS server here
  res.json({
    blah: "waz"
  });
});

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});
