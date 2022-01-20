const express = require("express");

const app = express()

app.set("port", process.env.PORT );

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => { res.json({ info: "Pagina cargada con exito!!" }) });

app.use('/mesas', require("./routes/routes"))

module.exports = {app};