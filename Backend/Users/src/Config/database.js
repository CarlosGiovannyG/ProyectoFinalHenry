const mongoose = require("mongoose");



mongoose.connect(process.env.URL_MONGO, { useNewUrlParser: true })
  .then(db => console.log("Base de datos conectada"))
  .catch(err => console.log("tenemos en la base en linea, ¡¡un problema!! : ", err))