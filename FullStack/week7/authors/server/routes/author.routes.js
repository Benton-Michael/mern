const authorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.post("/api/authors", authorController.createAuthor); // createAuthor
  // app.get("/api/authors", authorController.getAuthors); // shows up in yellow if the method is written correctly
  //   app.get("/api/authors/:id", authorController.getOneAuthor); getAuthor
  //     app.put("/api/author/:id", authorController.updateAuthor);
  //     app.delete("/api/author/:id", authorController.deleteExistingUser);
};
