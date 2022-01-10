require("dotenv").config();
const server = require('./app');
const { conn } = require('./db.js');
const { initial } = require('./Controller/rolController');
//const { sequelize } = require('./models/index');
const port = 5001;



conn.sync({ force: true }).then(() => {
  console.log("Conexion exitosa " );
  server.listen(port, async () => {
      console.log('%s Cargando los roles...');
       //eslint-disable-line no-console
   //   const preload = await 
   initial()
     // console.log('%s ' + preload)
  console.log(`%s app listening at http://localhost:${port}`); // eslint-disable-line no-console
});
});





// server.listen(port, () => {

//   console.log(`%s app listening at http://localhost:${port}`);
//   conn.sync({ force: true }).then(() => {
//           console.log("Conexion exitosa " );
//       })
// });



//   sequelize.sync({ force: true }).then(() => {
//       console.log("Conexion exitosa " );
//   })
//       .catch( (err ) => {
//             console.log(err)
//       } )
