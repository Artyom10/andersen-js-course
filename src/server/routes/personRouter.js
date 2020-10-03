const express = require('express');

const router = express.Router();

const Person = require('../models/peopleModel');

const personController = require('../controllers/personController');

router.get('/people', personController.getMainPage);
router.get('/people/:id', personController.getCertainPerson);

router.post('/people', personController.postMainPage);

router.delete('/people/:id', personController.deleteCertainPerson);
router.patch('/people/:id', personController.patchCertainPerson);

module.exports = router;
