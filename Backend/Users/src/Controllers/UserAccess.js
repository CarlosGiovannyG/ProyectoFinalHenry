const User = require('../Models/Users');


const access = async (req, res) => {

  let user = await User.findById(req.user)


  user ? res.json(
    {
      UserAccess: {
        userId: user._id,
        rool: user.rool,
      }

    }) : res.status(500).json({ message: "Usuario no encontrado" })

}


module.exports = access;