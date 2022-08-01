const express = require('express');
const router = express.Router();
const service = require('../service/vehicle');


router.get('/', service.findAll);

router.get('/:id', service.findById);

router.post('/', service.create);

module.exports = router;