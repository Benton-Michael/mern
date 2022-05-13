const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// requiring the mongoose config file so that it is available to our express method
require("./config/mongoose.config");
// require the routes folder because it has the function with (app) parameter. The express method must be added as an argument
require("./routes/product.routes")(app);

app.listen(5001, () => {
  console.log("listening on Port 5001");
});
