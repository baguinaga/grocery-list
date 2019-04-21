const mongoose =require("mongoose");
const Schema = mongoose.Schema;

// creating schema for groceries list, set to unique by name. Type and brand are not required in the case the product cannot be described with such categories. Blank edgecase will be handled client side. 

const groceriesSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String
  },
  brand: {
    type: String
  },
  qty: {
    type: Number,
    required: true
  }
});

const Groceries = mongoose.model("Groceries", groceriesSchema);

module.exports = Groceries;