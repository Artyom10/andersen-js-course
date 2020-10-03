const express = require('express');

const router = express.Router();

const Company = require('../models/companyModel');

const companyController = require('../controllers/companyController');

router.get('/company', companyController.getMainPage);
router.get('/company/:id', companyController.getCertainCompany);

router.post('/company', companyController.postMainPage);

router.delete('/company/:id', companyController.deleteCertainCompany);
router.patch('/company/:id', companyController.patchCertainCompany);

module.exports = router;
