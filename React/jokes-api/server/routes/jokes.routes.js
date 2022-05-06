const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.getAllJokes);
  app.post("/api/jokes", JokeController.createNewJoke);
  app.get("/api/jokes", JokeController.getJokeById);
  app.put("/api/jokes", JokeController.updateJoke);
  app.delete("/api/jokes", JokeController.deleteJoke);
};
