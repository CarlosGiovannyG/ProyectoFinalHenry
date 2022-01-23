const User = require('../Models/Users');
const Address = require('../Models/Address');
const md5 = require('md5');
const bcrypt = require('bcrypt');
const auth = require('../Config/auth')



const register = async (req, res, next) => {

  try {
    let password = bcrypt.hashSync(req.body.password, Number(auth.rounds))
    let avatar = md5(req.body.email);

    const { address_name, address_description } = req.body

    if (address_name || address_description) {
      await User.create({
        username: req.body.username,
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: Number(req.body.phone),
        password: password,
        rool: req.body.rool,
        avatar: avatar,
      })
        .then(user => {
          if (user) {
            const newAddress = new Address({
              name: address_name,
              description: address_description,
              userId: user._id
            })

            user.address = newAddress._id;
            user.save();
            newAddress.save();
            res.json({ message: 'registro exitoso' })
          } else {
            res.status(500).send({ message: 'Ocurrio un error inesperado' })
          }

        }, error => {
          next(error);
        }
        )
        .catch(error => {
          console.log(error)
        })

    } else {

      await User.create({
        username: req.body.username,
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: Number(req.body.phone),
        password: password,
        rool: req.body.rool,
        avatar: avatar,
      })
        .then(user => {
          user ? res.json({ message: 'registro exitoso' }) : res.status(500).send({ message: 'Ocurrio un error inesperado' })
        }, error => {
          next(error);
        }
        )
        .catch(error => {
          console.log(error)
        })
    }
  } catch (error) {
    console.log(error);
    next(error);
  }

}



module.exports = register;