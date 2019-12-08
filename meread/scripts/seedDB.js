const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/meread"
);

const templateSeed = [{
  markdown: "testing please work"
}];

// This file empties the Books collection and inserts the books below
db.Template
  .remove({})
  .then(() => db.Template.collection.insertMany(templateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
