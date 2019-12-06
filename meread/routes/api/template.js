const router = require("express").Router();
const templateController = require("../../controller/templateController");

// Matches with "Generator/api/templates"
router.route("/")
  .get(templateController.findAll)
  .post(templateController.create);

// Matches with "/api/templates/:id"
router
  .route("/:id")
  .get(templateController.findById)
  .put(templateController.update)
  .delete(templateController.remove);

module.exports = router;