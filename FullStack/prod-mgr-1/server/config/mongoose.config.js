const mongoose = require("mongoose");
const dbName = "productDB";

// interpolation to put this in the path
mongoose
  .connect(`mongodb://localhost/${movieDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to the MongoDB ${productDB}`);
  })
  .catch((err) => {
    console.log("DB Connection Error", err);
  });
