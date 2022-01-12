const { Router } = require('express');

const users = require('./users');
const auth = require('./auth')
const test = require('./test')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 router.use("/users",users)
 router.use("/auth",auth)
 router.use("/test",test)


module.exports = router;