const express = require('express');
const router = express.Router();
const Auth = require('../Middlewares/Auth')


router.post('/register', require('../Controllers/UsersRegister'));
router.post('/login', require('../Controllers/UsersLogin'));
router.post('/access', Auth, require('../Controllers/UserAccess'));
router.post('/:id/admin', require('../Controllers/ChangePassword'));
router.post('/:id/image', require('../Controllers/ChangeImage'));
router.post('/:id/info', require('../Controllers/ChangeInfo'));
router.get('/:id', require('../Controllers/UserById'));

// direciones
router.post('/:id/address', require('../Controllers/RegisterAddress'));
router.get('/address/:id', require('../Controllers/AddressUserById'));

module.exports = router;