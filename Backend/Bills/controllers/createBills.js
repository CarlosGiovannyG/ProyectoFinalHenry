const Bills = require("../models/Bills");

const createBills = async (req, res) => {
  try {
    let aux1 = req.body.products.map((product) => {
      return product.price;
    });
    let total = 0;
    for (let i = 0; i < aux1.length; i++) {
      total = Number(aux1[i]) + total;
    }

    let newBill = new Bills({
      idUser: req.body.idUser,
      description: req.body.description,
      products: req.body.products,
      numeroMesa: req.body.numeroMesa,
      tipoDePedido: req.body.tipoDePedido,
      subTotal: total,
      total: total,
    });
    await newBill.save();
    res.json({ message: "Factura creada con exito" });
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = createBills;
