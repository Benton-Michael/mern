const mongoose = require("mongoose");
const movieDB = "movieDB";

// interpolation to put this in the path
mongoose
  .connect(`mongodb://localhost/${movieDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to the MongoDB ${movieDB}`);
  })
  .catch((err) => {
    console.log("DB Connection Error", err);
  });
