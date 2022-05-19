const mongoose = require("mongoose");
// const { db } = require("../models/author.model");
const dbName = "authors";

// interpolation to put this in the path
mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to the MongoDB ${dbName} database`);
  })
  .catch((err) => {
    console.log("DB Connection Error", err);
  });
