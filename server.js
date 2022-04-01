const path = require("path");
const express = require("express");
const session = require("express-session");
const sequelize = require("./config/connection");
const routes = require("./routes");
const http = require("http");
require("dotenv").config({});

const app = express();
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

const SequelizeStore = require("connect-session-sequelize")(session.Store);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: "Super secret secret",
  cookie: { maxAge: 600000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(routes);



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../views/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
