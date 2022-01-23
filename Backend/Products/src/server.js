const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json')


const app = express();
app.set('port', process.env.PORT || 5000)
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
})
app.use(multer({ storage }).single('image'));

app.get("/", (req, res) => { res.json({ info: "Pagina cargada con exito!!" }) });

app.use('/products', require("./routes/routes"))



module.exports = { app };