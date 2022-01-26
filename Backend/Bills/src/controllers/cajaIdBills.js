const Bills = require("../models/Bills");

const cajaIdBills = async (req, res) => {
  try {
    const { id } = req.params;
    const facturasAbiertas = await Bills.findById(id);
    const objFactura = {sumatotal: 0, array: []};
    facturasAbiertas.products.forEach((e) => {
      objFactura.sumatotal += e.price
      const product = objFactura.array.find(p => p.name === e.name ) 
      if(!product)
      objFactura.array.push({name: e.name, cantidad:  1, total: e.price})
      else{
        product.cantidad += 1
        product.total += e.price
      }
    });

    res.status(200).json(objFactura);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
};

module.exports = cajaIdBills;
