const router = require("express").Router();
const apiRoutes = require("./api");
const groceriesController = require("../controllers/groceriesController");

// setting up api routes disabled temporarily
router.use("/api", apiRoutes);

//root route, using provided seedData, testing client side ajax calls
router.route("/").get(groceriesController.findRenderAll);

module.exports = router;
