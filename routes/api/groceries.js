const router = require("express").Router();
const groceriesController = require("../../controllers/groceriesController");

// corresponds to /api/groceries
router
  .route("/")
  .get(groceriesController.findAll)
  .post(groceriesController.create);

//corresponds to /api/groceries/reset 
// used for testing and possibly for a demo button that populates database
router
  .route("/all/reset")
  .post(groceriesController.createSeedData);

//corresponds to /api/groceries/:id
router
  .route("/:id")
  .get(groceriesController.findById)
  .put(groceriesController.update)
  .delete(groceriesController.remove);

module.exports = router;
