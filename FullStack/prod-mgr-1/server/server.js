const express = require("express");
const cors = require("cors");
require("./config/mongoose.config.js");
const app = express();
const PORT = 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // DONT FORGET THE middleware

// app.use(cors()); // this would accept all origins

// Only the localhost port will be able to access the server
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

require("./routes/product.routes")(app);

app.listen(5001, () => {
  console.log(`Server is listening on port ${PORT}`);
});
