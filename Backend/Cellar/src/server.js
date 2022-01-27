const express = require("express");
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json')


const app = express()

app.set("port", process.env.PORT );

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => { res.json({ info: "Pagina cargada con exito!!" }) });

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.use('/mesas', require("./routes/routes"))

module.exports = {app};