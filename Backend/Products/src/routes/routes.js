const {Router} = require("express")
const Product = require("../models/Product")
const router = Router();

const cloudinary = require("cloudinary");
const fs = require("fs-extra");

cloudinary.config({
    cloud_name: "drbbfr7mz",
    api_key: "375458641246816",
    api_secret: "e0EruBtidWaAyRa-fWNkTpNwBdE"
});

router.post("/products", async (req,res)=>{
    const restimagen = await cloudinary.v2.uploader.upload(req.file.path)
     const newProducto = await new Product ({
         name: req.body.name,
         description: req.body.description,
         category: req.body.category,
         price: req.body.price,
         rating: req.body.rating,
         image: restimagen.url ,    
         public_id: restimagen.public_id,
         id_autor: req.body.autor,
     })
    await newProducto.save(); 
    await fs.unlink(req.file.path)
     
    res.send("resivido");
})

router.get("/products", async (req,res)=>{
    const resProdutos = await Product.find();
    
    res.json(resProdutos);
})


// router.get("/products", async (req,res) =>{
//     try {
//         const resProdutos= await Product.find();
//         console.log("esperando la respuesta");
//         console.log(resProdutos);
//         res.send(resProdutos);

//     } catch (error) {
//         console.log("Tenemos un error en el get... : "+error)
//     }
//     res.send("¿¿¿ Que  ?????????10 10 10")
// })
module.exports = router