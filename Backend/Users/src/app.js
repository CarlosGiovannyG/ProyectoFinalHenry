const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('errorHandler');
const cookieParser = require('cookie-parser');
const errorController = require('./Controllers/errorController')
const multer = require('multer');
const path = require('path');
const swaggerDoc = require('./swagger.json')
const swaggerUI = require('swagger-ui-express');


// initializations
const app = express();

// swaggerDoc(app)
//settings
app.set('port', process.env.PORT || 5002);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use(cookieParser())
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
})
app.use(multer({ storage }).single('image'));
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

app.use('/users', require('./Routes/Routes'))


//MANEJO DE ERRORES SERVIDOR
if ('development' === app.get('env')) {
  app.use(errorHandler)
}
//MANEJO DE EERRORES DE MODELOS
app.use(errorController)





module.exports = app;