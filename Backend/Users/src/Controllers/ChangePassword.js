const User = require('../Models/Users');
const bcrypt = require('bcrypt');
const auth = require('../Config/auth')



const changePassword = async (req, res, next) => {
console.log('object');
  const{currentPassword, newPassword} = req.body

  try {
    if (currentPassword && newPassword) {
      let user = await User.findById(req.params.id)

      if (user) {
        if (bcrypt.compareSync(currentPassword, user.password)) {
          let password = bcrypt.hashSync(newPassword, Number(auth.rounds))
          console.log(password);
          await User.findByIdAndUpdate({_id: user._id },{ password: password},{new: true})
            .then(user => {
              user ? res.json({ message: 'Contraseña actaulizada' }) : res.status(500).send({ message: 'Ocurrio un error inesperado' })
            }, error => {
              next(error);
            }
            )
            .catch(error => {
              console.log(error)
            })

        } else {
          return res.status(404).json({ mensage: 'Datos incorrectos' })
        }
      } else {
        return res.status(404).json({ mensage: 'Datos incorrectos' })
      }
    } else {
      return res.status(404).json({ mensage: 'Datos incompletos' })
    }
  } catch (error) {
    return res.status(500).json({ mensage: 'Error de servidor' })
  }

  


  

 


}



module.exports = changePassword;