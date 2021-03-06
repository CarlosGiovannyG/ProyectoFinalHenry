const Bills = require("../models/Bills");

const createBills = async (req, res) => {

  try {

    let a = new Date();
    let b = new Date(`${req.body.fechaEntrega}`);
    var c = ((a - b) / 1000);

    let newBill = new Bills({
      idUser: req.body.idUser,
      description: req.body.description,
      products: req.body.products,
      status: req.body.status,
      date: req.body.date,
      numeroMesa: req.body.numeroMesa,
      tipoDePedido: req.body.tipoDePedido,
      direccionEntrega: req.body.direccionEntrega || "Sin Direccion De Entrega",
      subTotal: req.body.subTotal,
      fechaEntrega: req.body.fechaEntrega,
      statusCocina: req.body.statusCocina,
      total: req.body.total,
      importancia: Math.abs(Math.ceil(c))
    });
    await newBill.save();
    res.json({ message: "Factura creada con exito" });
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = createBills;
