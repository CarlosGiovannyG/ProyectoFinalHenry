const Bills = require("../models/Bills");

const modifyBills = async (req, res) => {
  try {
    const { id } = req.params;
    let aux1 = req.body.products.map((product) => {
      return product.price;
    });
    let total = 0;
    for (let i = 0; i < aux1.length; i++) {
      total = Number(aux1[i]) + total;
    }
    let newBill = {
      idUser: req.body.idUser,
      description: req.body.description,
      products: req.body.products,
      numeroMesa: req.body.numeroMesa,
      tipoDePedido: req.body.tipoDePedido,
      subTotal: total,
      total: total,
    };

    const facturaModificada = await Bills.findByIdAndUpdate(
      id,
      { $set: newBill },
      { new: true }
    );
    res.status(200).json(facturaModificada);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = modifyBills;
