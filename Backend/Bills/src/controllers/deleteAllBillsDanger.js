const Bills = require("../models/Bills");

const deleteAllBils = async (req, res) => {
  try {
    await Bills.deleteMany({});
    res.json("TODAS las facturas se han borrado exitosamente");
  } catch (error) {
    res.json({ "Ocurrio un error:": error });
  }
};

module.exports = deleteAllBils;
