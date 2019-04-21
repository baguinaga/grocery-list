const router = require("express").Router();
const apiRoutes = require("./api");
const groceriesController = require("../controllers/groceriesController");

// Seed Data left for testing, no longer required
/*
const seedData = [
  {
    category: "fruit",
    item: "apples",
    type: "Honey Crisp",
    brand: "Little cuties",
    qty: 10
  },
  {
    category: "beverage",
    item: "milk",
    type: "2%",
    brand: "generic",
    qty: "1 gallon"
  },
  {
    category: "pasta",
    item: "Pasta",
    type: "Penne",
    brand: "Barilla",
    qty: 3
  },
  {
    category: "dessert",
    item: "Gelatin dessert",
    type: "Green",
    brand: "Jello",
    qty: 3
  },
  {
    category: "dairy",
    item: "Yogurt",
    type: "Assorted flavors",
    brand: "Chobani",
    qty: 12
  },
  {
    category: "pasta",
    item: "Pasta",
    type: "Linguini",
    brand: "Barilla",
    qty: 3
  },
  {
    category: "beverage",
    item: "Apple juice",
    type: "regular",
    brand: "Happy Farms",
    qty: 2
  },
  {
    category: "beverage",
    item: "Vodka",
    type: "Tangerine",
    brand: "Grey Goose",
    qty: 1
  }
];
*/

// setting up api routes disabled temporarily
router.use("/api", apiRoutes);

//root route, using provided seedData, testing client side ajax calls
router.route("/").get(groceriesController.findRenderAll);

module.exports = router;
