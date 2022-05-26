const MovieController = require("../controllers/movie.controller");

// the api server routes
module.exports = (app) => {
  app.get("/api/movies", MovieController.getMovies);
  app.get("/api/movies/:id", MovieController.getMovieById);
  app.post("/api/movies", MovieController.createMovie);
  app.put("/api/movies/:id", MovieController.updateMovie);
  app.delete("/api/movies/:id", MovieController.deleteMovie);
};
