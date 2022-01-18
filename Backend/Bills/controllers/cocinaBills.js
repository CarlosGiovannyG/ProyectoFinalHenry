const Bills = require("../models/Bills");

const cocinaBills = async (req, res) => {
  try {
    const facturaStatus = await Bills.find({ statusCocina: "Open" });
    const facturasOrdenadas =  facturaStatus.sort((a,b) => a.fechaEntrega - b.fechaEntrega)
    return res.status(200).json(facturasOrdenadas);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = cocinaBills;
