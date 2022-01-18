const express = require('express');
const router = express.Router();


router.post('/register',  require('../Controllers/UsersRegister'));
// router.post('/login', require('../Controllers/UsersLogin'));


module.exports = router;