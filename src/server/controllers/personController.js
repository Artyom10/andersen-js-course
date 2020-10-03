const Person = require('../models/peopleModel');

exports.getMainPage = async function(req, res) {
  try {
    const everyPerson = await Person.find();
    res.json(everyPerson);
  } catch (err) {
    res.json(err.message);
  }
};

exports.getCertainPerson = async function(req, res) {
  try {
    const certainPerson = await Person.findOne({ id: req.params.id });
    res.json(certainPerson);
  } catch (err) {
    res.json(err.message);
  }
};

exports.postMainPage = async function(req, res) {
  const person = new Person({
    id: req.body.id,
    name: req.body.name,
    wealth: req.body.wealth,
  });
  try {
    const addPerson = await person.save();
    res.json(addPerson);
  } catch (err) {
    res.json(err.message);
  }
};

exports.deleteCertainPerson = async function(req, res) {
  try {
    const deletedPerson = await Person.findByIdAndRemove(req.params.id);
    res.json(deletedPerson);
  } catch (err) {
    res.json(err.message);
  }
};

exports.patchCertainPerson = async function(req, res) {
  const person = {
    id: req.body.id,
    name: req.body.name,
    wealth: req.body.wealth,
  };
  try {
    const changedPerson = await Person.findByIdAndUpdate(req.params.id, person);
    res.json(changedPerson);
  } catch (err) {
    res.json(err.message);
  }
};
