const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  name: String,
  description: String,
  problem: String,
  overview: String,
  technologies: String,
  deployment: String,
  created: String
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;