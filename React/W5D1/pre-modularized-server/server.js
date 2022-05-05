const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5001;
const mongoURI = "mongodb://localhost/mongo-practice";

// ------------------------------------------ This is the PRE-MODULARIZED VERSION
// the body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error in DB Connection", err);
  });

  // schema 
  const StudentSchema = mongoose.Schema({ 
    // _id will be automatically created with uuid 
    name: String,
    email: String,
    age: Number,
    currentStack: String,
    isActive: Boolean,
  },
  {
    timestamp: true,
  });

  // the student model
  const Student = mongoose.model('Student', StudentSchema);

  // promisified function so we can use .then and .catch on it
  app.post('/api/students', (req, res) => {
    Student.create(req.body).then((newStudent) => { 
        res.status(201).json(newStudent);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
  });

  // GET route
  app.get('/api/students', (req, res) => {
      // empty finds all
    Student.find({})
    .then((students) => { 
        res.json(students);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
  });

  app.listen(PORT, ()=> {
      console.log(`SERVER UP on ${PORT}`);
  });