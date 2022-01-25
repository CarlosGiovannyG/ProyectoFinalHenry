const Product = require("../models/product")
const cloudinary = require("cloudinary");
const path = require("path");
const fs = require("fs-extra");

cloudinary.config({
  cloud_name: "drbbfr7mz",
  api_key: "375458641246816",
  api_secret: "e0EruBtidWaAyRa-fWNkTpNwBdE"
});



const create = async (req, res) => {

  try {
    const ext = path.extname(req.file.originalname).toLocaleLowerCase()

    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {

      const restimagen = await cloudinary.v2.uploader.upload(req.file.path)

      const newProducto = new Product({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: restimagen.url,
        public_id: restimagen.public_id,
        id_autor: req.body.autor,
      })

      await newProducto.save();

      await fs.unlink(req.file.path)

      res.status(201).send({ message: 'Producto creado con exito' })

    } else {

      await fs.unlink(req.file.path)

      res.status(500).send({ message: 'Solo puedes guardar imagenes' })
    }
    
    await fs.unlink(req.file.path)
    .catch(err=>{ console.log( "err,=: ", err );  });

  } catch (error) {

    res.status(500).send({ message: 'Ocurrio un error inesperado', error })
  }

};

module.exports = create;


