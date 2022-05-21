const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the pet's name!"],
      minlength: [3, "Pet names must have at least 3 characters!"],
      unique: true,
    },
    type: {
      type: String,
      required: [true, "Please enter the pet's type'"],
      minlength: [3, "Pet types must have at least 3 characters!"],
    },
    description: {
      type: String,
      required: [true, "Please enter the pet's description!"],
      minlength: [3, "Pet descriptions must have at least 3 characters!"],
    },
    skillOne: {
      type: String,
    },
    skillTwo: {
      type: String,
    },
    skillThree: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
