const User = require('../Models/Users');
const md5 = require('md5');



const login = (req, res, next) => {

  try {
    const avatar = md5(req.body.email);

    const newUser = new User({
      username: req.body.username,
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      addres: req.body.addres,
      phone: req.body.phone,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      rool: req.body.rool,
      avatar: avatar,
    })

    newUser.save(err => {
      if (err) {
        console.log(err);
        return next(err);
      }
      return res.json({ message: 'registro exitoso' })
    })
  } catch (error) {

  }
}



module.exports = login;