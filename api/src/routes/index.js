const { Router } = require('express');
const fetch = require("node-fetch");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require("./countries");

const router = Router();

const { Country } = require ('../db.js')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.use('/countries', countries);


module.exports = router;
