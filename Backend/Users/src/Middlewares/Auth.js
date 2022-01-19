const jwt = require('jsonwebtoken');
const User = require('../Models/Users');
const auth = require('../Config/auth')

module.exports = (req, res, next) => {
  
  console.log(req.headers.authorization,'AUTH')
  if (!req.headers.authorization) {
    res.status(401).json({ message: 'Acceso no autorizado' })
    
  } else {

let token = req.headers.authorization

    jwt.verify(token, auth.secret, (error, decoded) => {
      if (error) {
        res.status(500).json({message: "Ocurrio un problema con el tooken", error: error})
      } else {
        User.findById(decoded.sub).then(user => {
          req.user = user._id
          next();
        })
      }
    })

}

}
