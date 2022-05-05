const StudentController = require("../controllers/student.controller");

//Routes receive requests and send them to the controller
// export a function to take in the app instance
module.exports = (app) => {
  app.post("/api/students", StudentController.createStudent);
  app.get("/api/students", StudentController.getStudents);
  app.get("/api/students/:id", StudentController.getStudentById);
  app.put("/api/students/:id", StudentController.updateStudent);
  app.delete("/api/students/:id", StudentController.deleteStudent);
};
