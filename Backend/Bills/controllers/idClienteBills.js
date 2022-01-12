const Bills = require("../models/Bills");

const idClienteBills = async (req, res) => {
  try {
    const { id } = req.params;
    const facturasCliente = await Bills.find({ idUser: id });
    res.status(200).json(facturasCliente);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = idClienteBills;
