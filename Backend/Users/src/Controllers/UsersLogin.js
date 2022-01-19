const User = require('../Models/Users');
const bcrypt = require('bcrypt');
const services = require('../Helpers/services')



const login = async (req, res, next) => {

  const { email, password } = req.body;


  try {

    const user = await User.findOne({ email })
    const passwordVer = bcrypt.compareSync(password, user.password);


    if (user && passwordVer) {

      user.lastLogin = Date.now()

      await user.save();
      res.json({
        message: "Inicio de sesion exitoso",
        token: services.createToken(user),
        rool: user.rool,
        userId: user._id,
      })

    } else {
      res.status(201).json({ message: "Usuario y/o Contraseña incorrecta" })
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Ocurrio un error" })
  }


}



module.exports = login;