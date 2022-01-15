const Bills = require("../models/Bills");

const createBills = async (req, res) => {

  try {

    let newBill = new Bills({
      idUser: req.body.idUser,
      description: req.body.description,
      products: req.body.products,
      numeroMesa: req.body.numeroMesa,
      tipoDePedido: req.body.tipoDePedido,
      subTotal: req.body.subTotal,
      total: req.body.total,
    });
    await newBill.save();
    res.json({ message: "Factura creada con exito" });
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = createBills;
