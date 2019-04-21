const db = require("../models");

// defining database CRUD methods with error catching
module.exports = {
  // returns all entries in model
  findAll: function (req, res) {
    db.Groceries
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
      });
  },
  // finds all entries and renders them using handlebars
  findRenderAll: function (req, res) {
    db.Groceries
      .find(req.query)
      .then(dbModel => res.render("index", {groceriesList: dbModel}))
      .catch(err => {
        console.log(err);
      });
  },
  // returns an entry by db ID
  findById: function (req, res) {
    db.Groceries
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // creates a new entry to DB, unique: true in schema prevents duplicate entries (by name)
  create: function (req, res) {
    db.Groceries
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // find and update by databaseID
  update: function (req, res) {
    db.Groceries
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // finds and removes an entry
  remove: function (req, res) {
    db.Groceries
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
};