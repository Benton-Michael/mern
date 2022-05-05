const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5001;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  // schema 
  

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