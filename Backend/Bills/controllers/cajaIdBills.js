const Bills = require("../models/Bills");

const cajaIdBills = async (req, res) => {
  try {
    const { id } = req.params;
    const facturasAbiertas = await Bills.findById(id);
    const objFactura = {};
    objFactura.sumatotal = 0;
    facturasAbiertas.products.forEach((e) => {
      if (objFactura[e.name]) {
        objFactura[e.name].cantidad += 1;
        objFactura[e.name].total += Number(e.price);
        objFactura.sumatotal += Number(e.price);
      } else if (!objFactura[e.name]) {
        objFactura[e.name] = { cantidad: 1, total: Number(e.price) };
        objFactura.sumatotal += Number(e.price);
      }
    });

    res.status(200).json(objFactura);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = cajaIdBills;
