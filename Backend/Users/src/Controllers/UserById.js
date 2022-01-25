const User = require('../Models/Users');
const Address = require('../Models/Address');

const userById = async (req, res) => {

  try {
    let user = await User.findById(req.params.id)
    let address = await Address.find({ userId: user._id })

    console.log(address);
    let userEnvio = {
      id: user._id,
      username: user.username,
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      rool: user.rool,
      avatar: `http://gravatar.com/avatar/${user.avatar}?s=200&d=retro`,
      image: user.image,
      address: address
    }
    user ? res.json(userEnvio) : res.status(500).json({ message: "Usuario no encontrado" })
  } catch (error) {
    console.log(error);
    next(error);
  }

}


module.exports = userById;