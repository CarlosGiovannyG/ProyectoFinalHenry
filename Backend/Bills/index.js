require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const swaggerDoc = require('./swagger.json')
const swaggerUI = require('swagger-ui-express');


const app = express();

app.set('port', process.env.PORT || 5001)


//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

const billsRoute = require("./routes/Bills");

mongoose
  .connect(`${process.env.CONEXION_AXEL}`)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.json({ message: 'Pagina cargada con exito' })
})


app.use("/bills", billsRoute);

//Cambiar el puerto al que sea necesario
app.listen(app.get('port'), () => {
  console.log(`🚀 listening on port , http://localhost:${app.get('port')}`);
});
