const express = require("express");
const cors = require("cors");
require("./config/mongoose.config");
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

// Always place routes after the middleware 
// app.use(express.json()) must be above the (app) call 
require('./routes/movie.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
