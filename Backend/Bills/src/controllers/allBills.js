const Bills = require("../models/Bills");

const allBills = async (req, res) => {
  try {
    //Obtener Facturas Por Status (Open - Pending - Paid - Canceled - Deleted)
    const { status } = req.query;
    if (status) {
      const facturaStatus = await Bills.find({ status: status });
      return res.status(200).json(facturaStatus);
    }
    const allFacturas = await Bills.find(); //filtro de todas menos las de status deleted
    res.status(200).json(allFacturas);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = allBills;
