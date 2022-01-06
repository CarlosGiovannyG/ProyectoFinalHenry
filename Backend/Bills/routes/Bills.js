const router = require("express").Router();
const Bills = require("../models/Bills");

// Crear Una Factura
//TODO ruta lista en apigateway

router.post("/", async (req, res) => {
  
 try {
   let aux1 = req.body.products.map(product => { return product.price })
   let total = 0
   for (let i = 0; i < aux1.length; i++) { total = Number(aux1[i]) + total }

   let newBill = new Bills({
     idUser: req.body.idUser,
     description: req.body.description,
     products: req.body.products,
     numeroMesa: req.body.numeroMesa,
     tipoDePedido: req.body.tipoDePedido,
     subTotal: total,
     total: total,
   })
   await newBill.save();
   res.json({ message: "Factura creada con exito" })
   console.log(newBill)

 } catch (error) {
   res.status(500).send({ message: "Ocurrio un error", error });
 }

  
});

//Obtener todas las facturas
//TODO ruta lista en apigateway
router.get("/", async (req, res) => {
  try {
    //Obtener Facturas Por Status (Open - Pending - Closed - Canceled - Deleted)
    const { status } = req.query;
    if (status) {
      const facturaStatus = await Bills.find({ status: status });
      return res.status(200).json(facturaStatus);
    }
    const allFacturas = await Bills.find(); //filtro de todas menos las de status deleted
    res.status(200).json(allFacturas);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Ruta get para cocina  que trae todas las facturas con status de cocina open.
//TODO a la cocina no le interesa el total ni subtotal de la factura implementar un tiempo de entrega 
router.get("/cocina", async (req, res) => {
  try {
    const facturaStatus = await Bills.find({ statusCocina: "Open" });
    return res.status(200).json(facturaStatus);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Ruta cambiar status cocina. El ID por params y el status por query

router.post("/cocina/:id", async (req, res) => {
  try {
    const { status } = req.query;
    const { id } = req.params;
    const facturaModificada = await Bills.findOneAndUpdate(
      { _id: id },
      { statusCocina: status }
    );
    return res.status(200).json(facturaModificada);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Obtener Facturas De Un Cliente (Por ID del cliente enviado como query)
//TODO ruta lista en apigateway

router.get("/cliente/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const facturasCliente = await Bills.find({ idUser: id });
    res.status(200).json(facturasCliente);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Eliminar una factura por ID enviada por query (no se borra de la DB, solo se cambia el status)
// TODO ruta lista en apigateway

router.post("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const facturaEliminada = await Bills.findOneAndUpdate(
      { _id: id },
      { status: "Deleted" }
    );
    res.status(200).json({message:"Factura eliminada exitosamente."});
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Modificar la Factura

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const facturaModificada = await Bills.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(facturaModificada);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Ver una factura por ID
// TODO ruta lista en apigateway
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const factura = await Bills.findById(id);
    res.status(200).json(factura);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Ruta para caja con filtrado de elementos
//TODO la respuesta esta de esta forma
// "productos": {
//   "Milanesa": {
//     "nombre": "Milanesa",
//     "cantidad": 1,
//     total": 10
//   }
// }

//TODO ideal que responda de esta forma
// "productos": {
//   {
//     "nombre": "Milanesa",
//     "cantidad": 1,
//     "total": 10
//   }
// }


router.get("/caja/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const facturasAbiertas = await Bills.findById(id);
    const objFactura = { productos: {} };
    facturasAbiertas.products.forEach((e) => {

      if (objFactura.productos.nombre === e.name) {
        objFactura.productos.cantidad += 1;
        objFactura.productos.total += Number(e.price);
      } else if (!objFactura[e.name]) {
        objFactura.productos[e.name] = { nombre: e.name, cantidad: 1, total: Number(e.price) };
      }
    });

    res.status(200).json(objFactura);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

module.exports = router;
