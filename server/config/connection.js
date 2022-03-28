const Sequelize = require("sequelize");
const path = require("path")
require("dotenv").config({});

let sequelize;
console.log('=-==========================')
console.log(process.env.DB_USER)

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    host: "kutnpvrhom7lki7u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
    },
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
