const express = require("express");
const connectToDb = require("./src/db/db");

const app = express();

connectToDb();

module.exports = app;