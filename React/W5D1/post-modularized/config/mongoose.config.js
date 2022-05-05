const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/mongo-practice";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error in DB Connection", err);
  });