const mongoose = require("mongoose");
// all of the data types are used in the MovieSchema
const AuthorSchema = new mongoose.Schema(
  //  validation in mongoose requires an object with the type key and require the field
  {
    name: {
      type: String,
      // customized message for the front-end
      required: [true, "We Need a Name my friend!"],
      minlength: [
        3,
        "Please enter an author name that is 3 characters or more!!  OMG!!!",
      ],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// this is all relating to the Author Collection - it's all one collection being used above

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
