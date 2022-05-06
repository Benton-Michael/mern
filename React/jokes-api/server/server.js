const express = require("express");
require("./config/mongoose.config");
const app = express();
const PORT = 5001;

// middleware!! Dont forget it!!!!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const JokeRoutes = require("./routes/jokes.routes");

JokeRoutes(app);

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
