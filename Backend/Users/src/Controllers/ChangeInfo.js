const User = require('../Models/Users');


const changeInfo = async (req, res, next) => {

  try {

    await User.findByIdAndUpdate({
      _id: req.params.id,
    }, {
      username:req.body.username,
      name:req.body.name,
      last_name:req.body.last_name,
      email:req.body.email,
      addres:req.body.addres,
      phone: Number(req.body.phone),
    }, { new: true })
      .then(user => {
        user ? res.json({
          message: 'Informacion actaulizada'
        }) : res.status(500).send({
          message: 'Ocurrio un error inesperado'
        })
      }, error => {
        next(error);
      }
      )
      .catch(error => {
        console.log(error)
      })

  } catch (error) {
    return res.status(500).json({ mensage: 'Error de servidor' })
  }

}

module.exports = changeInfo;