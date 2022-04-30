const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
  console.log("faker", faker.internet.password);
  return {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
};

const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};

// app.get("/", (req, res) => {
//   res.json(createUser());
// });
// Create route "/api/users/new" returns a new user
app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  console.log("newUser", newUser);
  res.json(newUser);
});

// Create route "/api/companies/new" returns a new company
app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

// route "/api/user/company" returns new user and new company
app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  const newUserCompany = {
    user: newUser,
    company: newCompany,
  };
  res.json(newUserCompany);
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${PORT}`);
});
