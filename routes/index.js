const router = require("express").Router();
const apiRoutes = require("./api");

/* 
groceriesList, will be passed along to handlebars partial to start protyping a workable prototype. This will eventually be replaced by database-read function
*/

const groceriesList = [
  {
    "category": "fruit",
    "item": "apples",
    "type": "Honey Crisp",
    "brand": "Little cuties",
    "qty": 10
  },
  {
    "category": "beverage",
    "item": "milk",
    "type": "2%",
    "brand": "generic",
    "qty": "1 gallon"
  },
  {
    "category": "pasta",
    "item": "Pasta",
    "type": "Penne",
    "brand": "Barilla",
    "qty": 3
  },
  {
    "category": "dessert",
    "item": "Gelatin dessert",
    "type": "Green",
    "brand": "Jello",
    "qty": 3
  },
  {
    "category": "dairy",
    "item": "Yogurt",
    "type": "Assorted flavors",
    "brand": "Chobani",
    "qty": 12
  },
  {
    "category": "pasta",
    "item": "Pasta",
    "type": "Linguini",
    "brand": "Barilla",
    "qty": 3
  },
  {
    "category": "beverage",
    "item": "Apple juice",
    "type": "regular",
    "brand": "Happy Farms",
    "qty": 2
  },
  {
    "category": "beverage",
    "item": "Vodka",
    "type": "Tangerine",
    "brand": "Grey Goose",
    "qty": 1
  }
]

// creating /api routes currently disable until creating database CRUD functions
// router.use("/api", apiRoutes);

/* 
root route, will eventually call stored groceries from db and render them by passing along object to handlebars partial
*/

router.get("/", function(req, res) {
  res.render("index", {groceriesList: groceriesList});
});

module.exports = router;
