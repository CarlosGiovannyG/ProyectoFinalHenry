const User = require('../Models/Users');
const Address = require('../Models/Address');

const addresUserById = async (req, res) => {

  try {
    let user = await User.findById(req.params.id)
    let address = await Address.find({ userId: user._id })

    let userEnvio = {
      address: address
    }
    user ? res.json(userEnvio) : res.status(500).json({ message: "Usuario no encontrado" })
  } catch (error) {
    console.log(error);
    next(error);
  }

}


module.exports = addresUserById;