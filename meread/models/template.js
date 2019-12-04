const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  markdown: {type: String, required: true}
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;