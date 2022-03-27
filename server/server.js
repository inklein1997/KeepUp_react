const path = require("path");
const express = require("express");
const dbConnection = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

dbConnection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
});
