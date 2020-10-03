const Company = require('../models/companyModel');

exports.getMainPage = async function(req, res) {
  try {
    const everyCompany = await Company.find();
    res.json(everyCompany);
  } catch (err) {
    res.json(err.message);
  }
};

exports.getCertainCompany = async function(req, res) {
  try {
    const certainCompany = await Company.findOne({ id: req.params.id });
    res.json(certainCompany);
  } catch (err) {
    res.json(err.message);
  }
};

exports.postMainPage = async function(req, res) {
  const company = new Company({
    id: req.body.id,
    name: req.body.name,
    assets: req.body.assets,
    founder: req.body.founder,
  });
  try {
    const addCompany = await company.save();
    res.json(addCompany);
  } catch (err) {
    res.json(err.message);
  }
};

exports.deleteCertainCompany = async function(req, res) {
  try {
    const deletedCompany = await Company.findByIdAndRemove(req.params.id);
    res.json(deletedCompany);
  } catch (err) {
    res.json(err.message);
  }
};

exports.patchCertainCompany = async function(req, res) {
  const company = {
    id: req.body.id,
    name: req.body.name,
    assets: req.body.assets,
    founder: req.body.founder,
  };
  try {
    const changedCompany = await Company.findByIdAndUpdate(req.params.id, company);
    res.json(changedCompany);
  } catch (err) {
    res.json(err.message);
  }
};
