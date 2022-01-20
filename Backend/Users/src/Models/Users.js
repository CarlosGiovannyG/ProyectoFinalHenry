const { Schema, model } = require('mongoose');
const validator = require('validator');


const UserSchema = new Schema({

  username: {
    type: String,
    required: [true, 'Introduzca un nombre de usuario'],
    unique: [true, 'Este nombre de usuario esta siendo usado'],
  },
  name: {
    type: String,
    required: [true, 'Introduzca un nombre'],
    validate: [validator.isAlpha, 'Introduzca un nombre valido'],
  },
  last_name: {
    type: String,
    required: [true, 'Introduzca un apellido'],
    validate: [validator.isAlpha, 'Introduzca un apellido valido'],
  },
  email: {
    type: String,
    required: [true, 'Introduzca una direccion de correo'],
    unique: [true, 'Este email de usuario esta siendo usado'],
    lowercase: true,
    validate: [validator.isEmail, 'Introduzca un correo valido'],
  },
  addres: {
    type: String
  },
  phone: {
    type: String,
    validate: [validator.isNumeric, 'Introduzca un numero valido']
  },
  password: {
    type: String,
    required: [true, 'Introduzca una contraseña'],
    minLength: [8, 'La contraseña debe tener minimo 8 caracteres'],
  },
  rool: {
    type: String,
    default: 'regular',
  },
  avatar: {
    type: String,
  },
  image: {
    type: String,
  },
  registration: {
    type: Date,
    default: Date.now(),
  },
  lastLogin: {
    type: Date,
  }
});



const User = model('User', UserSchema);


module.exports = User;