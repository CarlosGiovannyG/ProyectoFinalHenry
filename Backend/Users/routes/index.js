const { Router } = require('express');

const users = require('./users');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 router.use("/users",users)
// router.use("/types",types)


module.exports = router;