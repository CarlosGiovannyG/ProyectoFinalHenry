require('dotenv').config();

const { app } = require("./server");

const db = require("./models");

app.set("port", process.env.PORT );




app.listen(app.get('port'), () => {
    console.log(`🚀 listening on port , http://localhost:${app.get('port')}`);
    
    
    // db.sequelize.authenticate()
    // .then(()=> {
    //     console.log("Base de datos en linea");
    // }).catch(err=>console.log(err));


    db.sequelize.sync()  // { force: true }
     .then(() => {
       console.log('Estoy conectado a la base de datos');
     })
     .catch(error => {
       console.log(error)
     });



});


