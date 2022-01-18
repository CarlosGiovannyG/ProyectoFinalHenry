const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('errorHandler');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorController = require('../Controllers/errorController')



module.exports = app => {

  //CONFIGURACION PUERTO
  app.set('port', process.env.PORT || 5002);

  //MIDDLEWARES
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(cors());
  app.use(cookieParser())

  
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API_KEY, Origin, X-Requested-With, Content-Type, Accep, Acces-COntrol-allow-Request-Method"
      );
      res.header("Access-Control-Allow-Requested-Methods", "GET, POST, PUT, DELETE");
      res.header("Allow", "GET, POST,OPTIONS,PUT,DELETE");
      next()
    })
    
  
    //RUTAS DE LA API
    app.get('/', (req, res) => {
      res.json({ message: 'Pagina cargada con exito' })
    })
  
  app.use('/users', require('../Routes/Routes'))

  

  //MANEJO DE ERRORES SERVIDOR
  if ('development' === app.get('env')) {
    app.use(errorHandler)
  }
  //MANEJO DE EERRORES DE MODELOS
  app.use(errorController)

  return app;
};