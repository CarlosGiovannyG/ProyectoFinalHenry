const Bills = require("../models/Bills");

const cocinaBills = async (req, res) => {
  try {
    const facturaStatus = await Bills.find({ statusCocina: "Open" });
    return res.status(200).json(facturaStatus);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = cocinaBills;
