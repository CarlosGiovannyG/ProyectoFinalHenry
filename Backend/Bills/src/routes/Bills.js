const router = require("express").Router();

// Crear Una Factura
//TODO RUTA LISTA APIGATEWAY
router.post("/create", require("../controllers/createBills"));

//Obtener todas las facturas
//TODO RUTA LISTA APIGATEWAY
router.get("/", require("../controllers/allBills"));

//Ruta get para cocina  que trae todas las facturas con status de cocina open.
//TODO a la cocina no le interesa el total ni subtotal de la factura implementar un tiempo de entrega
router.get("/cocina", require("../controllers/cocinaBills"));

//Ruta cambiar status cocina. El ID por params y el status por query
//TODO RUTA LISTA APIGATEWAY
router.post("/cocina/closed/:id", require("../controllers/cocinaClosedBills"));

//Obtener Facturas De Un Cliente (Por ID del cliente enviado como query)
//TODO RUTA LISTA APIGATEWAY
router.get("/cliente/:id", require("../controllers/idClienteBills"));

//Pagar una factura por ID enviada por paramas (no se borra de la DB, solo se cambia el status)
//TODO RUTA LISTA APIGATEWAY
router.post("/paid/:id", require("../controllers/paidBill"));

//Eliminar una factura por ID enviada por query (no se borra de la DB, solo se cambia el status)
//TODO RUTA LISTA APIGATEWAY
router.post("/delete/:id", require("../controllers/deleteBills"));

//Modificar la Factura
//TODO RUTA LISTA APIGATEWAY
router.put("/:id", require("../controllers/modifyBills"));

//Ver una factura por ID
//TODO RUTA LISTA APIGATEWAY
router.get("/:id", require("../controllers/byIdBills"));

//TODO RUTA LISTA APIGATEWAY
router.post("/cocina/working/:id", require("../controllers/cocinaWorkingBills"));

//TODO RUTA LISTA APIGATEWAY
router.get("/caja/:id", require("../controllers/cajaIdBills"));




//Ruta para caja con filtrado de elementos //todo PENDIENTE EN APYGATEWAY

router.post("/cocina/:id", require("../controllers/idCocinaBills"));


// BORRA TODAS LAS FACTURAS, USAR CON CUIDADO, PELIGRO!!


router.put("/peligro/borrartodaslasfacturas", require("../controllers/deleteAllBillsDanger"));





module.exports = router;


///add a line of test