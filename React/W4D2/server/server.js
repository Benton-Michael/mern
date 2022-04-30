const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const PORT = 8000;
// fixing the request body issue returning null
// we always need these two lines in express for post and put data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
  },
];

app.get("/", (req, res) => {
  // return a response to the requester's browser
  // res.send will send a http response
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  // industry convention to use /api in route
  res.json(users);
});

app.post("/api/users", (req, res) => {
  //add a new user to the array
  // same route as above but diff. method so this is
  // allowed in express
  // with post req we must receive in the request.body
  console.log(req.body);
  users.push(req.body);
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${PORT}`);
});
