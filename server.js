const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./routes")
const http = require("http");

require("dotenv").config({});

const app = express();
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../views/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log("Now listening"));
});
