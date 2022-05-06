const mongoose = require("mongoose");
const jokeDB = "jokeDB";

// interpolation to put this in the path
mongoose
  .connect(`mongodb://localhost/${jokeDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to the MongoDB ${jokeDB}`);
  })
  .catch((err) => {
    console.log("DB Connection Error", err);
  });
