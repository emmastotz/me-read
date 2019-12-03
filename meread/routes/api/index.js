const router = require("express").Router();
const templateRoutes = require("./template");

// Book routes
router.use("/template", templateRoutes);

module.exports = router;