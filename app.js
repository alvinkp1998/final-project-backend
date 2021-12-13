const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./src/routes");
const cors = require("cors");
const { sequelize, Sequelize } = require("./src/models");

// sequelize.sync({ force: true });
// sequelize.sync();

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

app.use(routes);
// app.listen(process.env.PORT || 5000);

module.exports = app;
