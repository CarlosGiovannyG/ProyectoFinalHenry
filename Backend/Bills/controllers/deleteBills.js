const Bills = require("../models/Bills");

const deleteBills = async (req, res) => {
  try {
    const { id } = req.params;
    await Bills.findOneAndUpdate(
      { _id: id },
      { status: "Deleted" }
    );
    res.status(200).json({ message: "Factura eliminada exitosamente." });
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = deleteBills;
