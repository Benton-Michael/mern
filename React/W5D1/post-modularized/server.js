const express = require("express");
require("./config/mongoose.config");
const app = express();
const PORT = 5001;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// invoke the app by calling an instance of (app)
require("./routes/student.routes")(app);
// const routes = require('./routes/student.routes')
// routes(app)

app.listen(PORT, () => {
  console.log(`SERVER UP on ${PORT}`);
});
