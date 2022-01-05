const mongoose = require("mongoose");


const urlmongo = `mongodb+srv://grupo10:8hjB4-wjNy!Css8@cluster0.povzz.mongodb.net/RestaurantGrupo10?retryWrites=true&w=majority`
// mongodb+srv://grupo10:<password>@cluster0.povzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(process.env.URL_MONGO, { useNewUrlParser: true })
  .then(db => console.log("la base de datos en linea esta conectada"))
  .catch(err => console.log("tenemos en la base en linea, ¡¡un problema!! : ", err))