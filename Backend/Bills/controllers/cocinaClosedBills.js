const Bills = require("../models/Bills");

const cocinaClosedBills = async (req, res) => {
  try {
    const { id } = req.params;
    let response = await Bills.findOneAndUpdate(
      { _id: id },
      { statusCocina: "Closed" },
      { new: true }
    );
    console.log(response);
    return res.status(200).json({ message: "Pedido Entregado", response });
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = cocinaClosedBills;
