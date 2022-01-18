const User = require('../Models/Users');
const md5 = require('md5');
const bcrypt = require('bcrypt');
const auth = require('../Config/auth')



const register = async (req, res, next) => {

  let password = bcrypt.hashSync(req.body.password,Number(auth.rounds))
  let avatar = md5(req.body.email);

  User.create({
    username: req.body.username,
    name: req.body.name,
    last_name: req.body.last_name,
    email: req.body.email,
    addres: req.body.addres,
    phone: Number(req.body.phone),
    password: password,
    rool: req.body.rool,
    avatar: avatar,
  })
    .then(user => {
      user ? res.json({ message: 'registro exitoso' }) : res.status(500).send({ message: 'Ocurrio un error inesperado'})
    }, error => {
      next(error);
    }
  )
    .catch(error => {
    console.log(error)
  })

  
}



module.exports = register;