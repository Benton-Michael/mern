const Movie = require("../models/movie.model");

// other way for writing this is preferred
module.exports = {
  getMovies: (req, res) => {
    Movie.find({})
      .then((movies) => {
        res.json(movies);
      })
      .catch((err) => {
        res.status(400).json({ message: "Error is in findAll", error: err });
      });
  },
  createMovie: (req, res) => {
    Movie.create(req.body)
      .then((newMovie) => {
        res.status(201).json(newMovie);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "Error is in createMovie", error: err });
      });
  },
  getMovieById: (req, res) => {
    Movie.findOne({ _id: req.params.id })
      .then((movie) => {
        res.status(201).json(movie);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "Error is in getMovieById", error: err });
      });
  },
  deleteMovie: (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
      .then((movie) => {
        res.status(201).json(movie);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "Error is in deleteMovie", error: err });
      });
  },
  updateMovie: (req, res) => {
    Movie.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((movie) => {
        res.status(201).json(movie);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: "Error is in updateMovie", error: err });
      });
  },
};
