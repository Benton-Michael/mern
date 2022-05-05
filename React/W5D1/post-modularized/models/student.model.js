const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema(
  {
    // _id will be automatically created with uuid
    name: String,
    email: String,
    age: Number,
    currentStack: String,
    isActive: Boolean,
  },
  {
    timestamp: true,
  }
);

// the student model
const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
