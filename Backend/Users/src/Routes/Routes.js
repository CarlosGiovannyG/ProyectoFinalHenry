const express = require('express');
const router = express.Router();
const Auth = require('../Middlewares/Auth')


router.post('/register', require('../Controllers/UsersRegister'));
router.post('/login', require('../Controllers/UsersLogin'));
router.post('/access', Auth, require('../Controllers/UserAccess'))
router.post('/:id/admin', require('../Controllers/ChangePassword'))
router.post('/:id/image', require('../Controllers/ChangeImage'))
router.get('/:id', require('../Controllers/UserById'))


module.exports = router;