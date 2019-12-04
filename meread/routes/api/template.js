const router = require("express").Router();
const templateController = require("../../controller/templateController");

// Matches with "/api/books"
router.route("/")
  .get(templateController.findAll)
  .post(Controller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(templateController.findById)
  .put(templateController.update)
  .delete(templateController.remove);

module.exports = router;