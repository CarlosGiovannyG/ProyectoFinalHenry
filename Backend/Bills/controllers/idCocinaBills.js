const Bills = require("../models/Bills");

const idCocinaBills = async (req, res) => {
  try {
    const { status } = req.query;
    const { id } = req.params;
    const facturaModificada = await Bills.findOneAndUpdate(
      { _id: id },
      { statusCocina: status }
    );
    return res.status(200).json(facturaModificada);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = idCocinaBills;
