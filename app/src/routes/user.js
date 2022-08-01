const express = require('express');
const router = express.Router();
const service = require('../service/user');


router.post('/signup', service.signUp);

router.post('/signin', service.signIn);

router.get('/exists/:user', service.isUserTaken);

module.exports = router;