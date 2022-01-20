if (process.env.NODE_ENV !== 'production') {
  require(`dotenv`).config();
}

const app = require('./app');

//import la coneccion a la base de datos
require('./config/database')

app.listen(app.get('port'), () => {
  console.log(`🚀 listening on port , http://localhost:${app.get('port')}`);
  console.log('Environment:', process.env.NODE_ENV);
});