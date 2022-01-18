const Bills = require("../models/Bills");

const cocinaWorkingBills = async (req, res) => {
  try {
    const { id } = req.params;
    let response = await Bills.findOneAndUpdate(
      { _id: id },
      { statusCocina: "Working" },
      { new: true }
    );
   
    return res.status(200).json({ message: "Pedido Se Esta Cocinando", response });
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = cocinaWorkingBills;
