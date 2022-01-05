const express = require ("express");
const morgan= require("morgan");
const cors = require("cors");


const app = express();
app.set('port', process.env.PORT || 5000)
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.get("/", (req, res) => { res.json({ info: "Pagina cargada con exito!!" }) });

app.use('/products', require("./routes/routes"))



module.exports = {app};