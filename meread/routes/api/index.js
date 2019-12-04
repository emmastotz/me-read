const router = require("express").Router();
const templateRoutes = require("./template");

// Template routes
router.use("/templates", templateRoutes);

module.exports = router;