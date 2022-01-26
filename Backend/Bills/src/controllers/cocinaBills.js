const Bills = require("../models/Bills");

const cocinaBills = async (req, res) => {
  try {
    const facturaStatusOpen = await Bills.find({ statusCocina: "Open" });
    const facturaStatusWorking = await Bills.find({ statusCocina: "Working" });
    const allFacturas = facturaStatusOpen.concat(facturaStatusWorking)
    const facturasOrdenadas =  allFacturas.sort((a,b) => a.fechaEntrega - b.fechaEntrega)
    return res.status(200).json(facturasOrdenadas);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = cocinaBills;
