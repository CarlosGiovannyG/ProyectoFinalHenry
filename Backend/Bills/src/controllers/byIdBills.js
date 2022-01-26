const Bills = require("../models/Bills");

const byIdBills = async (req, res) => {
  try {
    const { id } = req.params;

    const factura = await Bills.findById(id);
    res.status(200).json(factura);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = byIdBills;
