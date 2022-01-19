const User = require('../Models/Users');


const userById = async (req, res) => {

  
  let user = await User.findById(req.params.id)

  
  let userEnvio = {
    id: user._id,
    username: user.username,
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    addres: user.addres,
    phone: user.phone,
    rool: user.rool,
    avatar: `http://gravatar.com/avatar/${user.avatar}?s=200&d=retro`,
    image:user.image,
  }
  user ? res.json(userEnvio) : res.status(500).json({ message: "Usuario no encontrado" })

}


module.exports = userById;