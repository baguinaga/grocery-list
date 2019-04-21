const mongoose =require("mongoose");
const Schema = mongoose.Schema;

// creating schema for groceries list, set to unique by name and type combined index

const groceriesSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  }
});

groceriesSchema.index({ item: 1, type: 1, brand: 1}, { unique: true });
const Groceries = mongoose.model("Groceries", groceriesSchema);


module.exports = Groceries;