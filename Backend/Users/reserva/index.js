'use strict'

// //const Sequelize = require('sequelize');
// const { Sequelize, DataTypes } = require('sequelize')
// const fs = require('fs');
// const path = require('path');
// const basename = path.basename(__filename);
// //console.log(basename)
// const config = require('../config/dataDB.js');

// const sequelize = new Sequelize(config.database, config.username, config.password, config )

// const modelDefiners = {};

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// //console.log(fs.readdirSync(__dirname))
// fs.readdirSync(__dirname)
//   .filter((file) => {return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')})
//   .forEach((file) => {
//    // const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
   
//    console.log ("este es el path " + path.join(__dirname, file) )
//    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
//    //console.log ("este es el model " + model)
//     modelDefiners[model.name] = model
//     //console.log( "este es el modelDefininers" + modelDefiners[model.name])
//   });

//   Object.keys(modelDefiners).forEach((modelName) => {
//     if (modelDefiners[modelName].associate) {
//       modelDefiners[modelName].associate(modelDefiners);
//     }
//   });
  
//   modelDefiners.sequelize = sequelize;
//   modelDefiners.Sequelize = Sequelize;
  
//   const sequelizeOptions = { logging: console.log, };


// // Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach(model => model(sequelize));
// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
//const { Users } = sequelize.models;



// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// Pokemon.belongsToMany(Type, {
//     through: "pokemons_types",
// });



// Type.belongsToMany(Pokemon, {
//     through: "pokemons_types",
// });

//module.exports = {
  //...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  //conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
 // modelDefiners
  //Op
//};

// modelDefiners.sequelize = sequelize


// Removes all tables and recreates them (only available if env is not in production)
// if (DB_FORCE_RESTART === 'true' && process.env.ENV !== 'production') {
//   sequelizeOptions.force = true;
// }

// sequelize.sync(sequelizeOptions)
//   .catch((err) => {
//     console.log(err);
//     process.exit();
//   });

//   module.exports = modelDefiners ;