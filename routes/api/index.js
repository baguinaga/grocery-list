// api routes currently disabled
const router = require("express").Router();
const groceries = require("./groceries");

// corresponds to /api/groceries
router.use("/groceries", groceries);

module.exports = router;