const Author = require("../models/author.model");

// other way for writing this is preferred
module.exports = {
  // getAuthors: (req, res) => {
  //   Author.find({})
  //     .then((authors) => {
  //       res.json(authors);
  //     })
  //     .catch((err) => {
  //       res.status(400).json({ message: "Error is in findAll", error: err });
  //     });
  // },
  createAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        res.status(201).json(newAuthor);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "Error is in createAuthor", error: err });
      });
//   },
  //   getMovieById: (req, res) => {
  //     Movie.findOne({ _id: req.params.id })
  //       .then((movie) => {
  //         res.status(201).json(movie);
  //       })
  //       .catch((err) => {
  //         res
  //           .status(400)
  //           .json({ message: "Error is in getMovieById", error: err });
  //       });
  //   },
  //   deleteMovie: (req, res) => {
  //     Movie.deleteOne({ _id: req.params.id })
  //       .then((movie) => {
  //         res.status(201).json(movie);
  //       })
  //       .catch((err) => {
  //         res
  //           .status(400)
  //           .json({ message: "Error is in deleteMovie", error: err });
  //       });
  //   },
  //   updateMovie: (req, res) => {
  //     Movie.findByIdAndUpdate({ _id: req.params.id }, req.body, {
  //       new: true,
  //       runValidators: true,
  //     })
  //       .then((movie) => {
  //         res.status(201).json(movie);
  //       })
  //       .catch((err) => {
  //         res
  //           .status(400)
  //           .json({ message: "Error is in updateMovie", error: err });
  //       });
  //   },
  }
}
