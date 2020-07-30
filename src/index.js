const express = require("express");
const faker = require("faker");
const generateUsers = require("./generateUsers");

const app = express();

const errorMessage =
  "CALL /api/users (returns 100 randomly-generated records) OR /api/users/[NUMBER] (returns specified NUMBER of randomly-generated records)";

app.get("/api/users/", async function (req, res) {
  const users = await generateUsers(100);
  res.json({
    users,
  });
});

app.get("/api/users/:batchSize", async function (req, res) {
  const batchSize = req.params["batchSize"];
  if (isNaN(batchSize)) {
    res.send(errorMessage);
  } else {
    const users = await generateUsers(batchSize);
    res.json({
      users,
    });
  }
});

app.get("*", async function (req, res) {
  res.send(errorMessage);
});

app.listen(3723, () => {
  console.log("Listening on port 3723");
});
