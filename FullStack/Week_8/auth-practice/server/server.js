const express = require("express"); // These will remain in this order for correct functionality
const cors = require("cors");
require("./config/mongoose.config");
const app = express(); // Express is the framework for the Node server
const PORT = 5001; // Using this as my Port 8000

app.use(express.json()); // Allows us to read JSON objects sent through client request
app.use(express.urlencoded({ extended: true })); // DON'T FORGET! THE middleware - This lets us read JSON objects
// with strings and array's that are present in the client request

// app.use(cors()); // this would accept all origins

// Only the localhost port will be able to access the server
// With cors, different ports will be able to send requests to the api
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Always place routes after the middleware
// app.use(express.json()) must be above the (app) call
require("./routes/movie.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
