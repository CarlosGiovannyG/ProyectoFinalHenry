const router = require("express").Router();
const Bills = require("../models/Bills");

// Crear Una Factura

router.post("/crear", async (req, res) => {
  try {
    const nuevaFactura = new Bills(req.body);
    const facturaGuardada = await nuevaFactura.save();
    res.status(200).json(facturaGuardada);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Obtener todas las facturas

router.get("/", async (req, res) => {
  try {
    //Obtener Facturas Por Status (Open - Pending - Closed - Canceled - Deleted)
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
});

//Ruta get para cocina  que trae todas las facturas con status de cocina open.

router.get("/cocina", async (req, res) => {
  try {
    const facturaStatus = await Bills.find({ statusCocina: "Open" });
    return res.status(200).json(facturaStatus);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Ruta cambiar status cocina. El ID por params y el status por query

router.post("/cocina/:id", async (req, res) => {
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
});

//Obtener Facturas De Un Cliente (Por ID del cliente enviado como query)

router.get("/cliente", async (req, res) => {
  try {
    const { id } = req.query;
    const facturasCliente = await Bills.find({ idUser: id });
    res.status(200).json(facturasCliente);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Eliminar una factura por ID enviada por query (no se borra de la DB, solo se cambia el status)

router.post("/delete", async (req, res) => {
  try {
    const { id } = req.query;
    const facturaEliminada = await Bills.findOneAndUpdate(
      { _id: id },
      { status: "Deleted" }
    );
    res.status(200).json("Factura eliminada exitosamente.");
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Modificar la Factura

router.put("/:id", async (req, res) => {
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
});

//Ver una factura por ID

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const factura = await Bills.findById(id);
    res.status(200).json(factura);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

//Ruta para caja con filtrado de elementos

router.get("/caja/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const facturasAbiertas = await Bills.findById(id);
    const objFactura = {};
    facturasAbiertas.products.forEach((e) => {
      if (objFactura[e.name]) {
        objFactura[e.name].cantidad += 1;
        objFactura[e.name].total += Number(e.price);
      } else if (!objFactura[e.name]) {
        objFactura[e.name] = { cantidad: 1, total: Number(e.price) };
      }
    });

    res.status(200).json(objFactura);
  } catch (error) {
    res.status(500).send({ message: "Ocurrio un error", error });
  }
});

module.exports = router;
