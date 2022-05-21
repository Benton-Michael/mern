const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

require("./config/mongoose.config")
require("./routes/pet.routes")(app);


app.listen(5001, () => {
  console.log(`Server is listening on port ${PORT}`);
});
