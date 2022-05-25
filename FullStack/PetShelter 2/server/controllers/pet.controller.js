const Pet = require("../models/pet.model");

module.exports = {
  getPets: (req, res) => {
    Pet.find({})
      .then((pets) => {
        res.json(pets);
      })
      .catch((err) => {
        res.status(400).json({ message: "Error finding all pets", error: err });
      });
  },

  createPet: (req, res) => {
    Pet.create(req.body)
      .then((newPet) => {
        res.status(201).json(newPet);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "Error in creating the Pet", error: err });
      });
  },

  getPetById: (req, res) => {
    Pet.findOne({ _id: req.params.id })
      .then((pet) => {
        res.status(201).json(pet);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "Error finding pet by id", error: err });
      });
  },
  // Pet Adoption Method
  deletePet: (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
      .then((pet) => {
        res.status(201).json(pet);
      })
      .catch((err) => {
        res.status(400).json({ message: "Error in Adoption", error: err });
      });
  },

  updatePet: (req, res) => {
    Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((pet) => {
        res.status(201).json(pet);
      })
      .catch((err) => {
        res.status(400).json({ message: "Error updating pet", error: err });
      });
  },
};
