const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user:password123@ds015899.mlab.com:15899/heroku_hkndztv1"
);

const templateSeed = {
  name: "",
  description: "",
  problem: "",
  overview: "",
  technologies: "",
  deployment: "",
  created: ""
};