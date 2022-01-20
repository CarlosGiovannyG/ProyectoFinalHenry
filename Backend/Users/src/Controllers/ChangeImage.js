const User = require('../Models/Users');
const cloudinary = require('cloudinary');
const fs = require('fs-extra');
const path = require("path");


cloudinary.config({
  cloud_name: "carlosgiovanny",
  api_key: "584447333678795",
  api_secret: "xHRa9kog4ejlQwVrmwbwu1_xjc8"
  
  // cloud_name: "drbbfr7mz",
  // api_key: "375458641246816",
  // api_secret: "e0EruBtidWaAyRa-fWNkTpNwBdE"
});


const changeImage = async (req, res, next) => {

console.log('object');

  try {

    const ext = path.extname(req.file.originalname).toLocaleLowerCase()

    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' ) {
     
      const user = await User.findById(req.params.id)

      if (user) {

        const restimagen = await cloudinary.v2.uploader.upload(req.file.path)
        await User.findByIdAndUpdate({ _id: req.params.id }, { image: restimagen.url }, { new: true })
          .then(user => {

             fs.unlink(req.file.path)

            user ? res.json({ message: 'Imagen actualizada exitosamente' }) : res.status(500).send({ message: 'Ocurrio un error inesperado' })
          }, error => {
            next(error);
          }
          )
          .catch(error => {
            console.log(error)
          })
        
      } else {
        return res.status(404).json({ mensage: 'No se encontro usuario' })
      }
    } else {
      await fs.unlink(req.file.path)
      return res.status(404).json({ mensage: 'Solo puedes guardar imagenes' })
    }
  } catch (error) {
    return res.status(500).json({ mensage: 'Error de servidor' })
  }


}



module.exports = changeImage;