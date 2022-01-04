const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productos",{

}).then(db => console.log("base de datos conectada"))
.catch(err => console.log("algo paso...."+err) )