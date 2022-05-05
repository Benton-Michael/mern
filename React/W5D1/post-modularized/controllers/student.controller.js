const Student = require("../models/student.model");

// promisified function so we can use .then and .catch on it
const createStudent = (req, res) => {
  Student.create(req.body)
    .then((newStudent) => {
      res.status(201).json(newStudent);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const getStudents = (req, res) => {
  Student.find({})
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const getStudentById = (req, res) => {
  // findOne ({})
  Student.findById(req.params.id)
    .then((student) => {
      res.status(201).json(student);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const updateStudent = (req, res) => {
  // findOneAndUpdate({})
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deleteStudent = (req, res) => {
  //findOneAndDelete({})
  Student.findByIdAndDelete(req.params.id)
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
