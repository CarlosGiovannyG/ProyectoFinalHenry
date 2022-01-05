require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require('morgan')
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


const billsRoute = require("./routes/Bills");

mongoose
  .connect(`${process.env.CONEXION_AXEL}`)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/bills", billsRoute);

//Cambiar el puerto al que sea necesario
app.listen(3000, () => console.log("Listening in port 3000"));
