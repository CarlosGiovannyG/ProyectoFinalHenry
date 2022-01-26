const Bills = require("../models/Bills");

const modifyBills = async (req, res) => {
  try {
    const { id } = req.params;


    const facturaModificada = await Bills.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(facturaModificada);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = modifyBills;
