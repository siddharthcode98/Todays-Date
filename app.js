const express = require("express");
const app = express();
const newDate = new Date();

app.get("/", (request, response) => {
  response.send(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
});

module.exports = app;
