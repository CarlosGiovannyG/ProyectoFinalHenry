const { Router } = require("express")
const router = Router();

router.get("/metre", require("../controllers/metre"));

//Para mostrar todas las reservaciones realizadas y las mesas relacionadas
router.get("/usertable", require("../controllers/usertableAll"));

//Para ingresar y guardar una nueva reservación con 
//la fecha , el número de sillas y el id del cliente por body
//{  "fecha": "2022-01-25T10:40" ,     "numero": 4 ,    "idclient":"bero"   }

router.post("/schedule", require("../controllers/schedulePost"));

//Para mostrar todas las reservaciones realizadas y las mesas relacionadas 
router.get("/schedule", require("../controllers/schedule_All"));

//Para mostrar en una fecha las reservas disponibles ingresando la 
//fecha con el siguiente formato 2022-01-25T16:40 por parámetro 

router.get("/schedule/:fecha", require("../controllers/scheduleByFecha"));
//por body con  {   "fecha": "2022-01-25T16:40"     }
router.get("/schedule/fecha", require("../controllers/scheduleByFecha"));

// Para consultar una mesas por su número por parámetro    : 
router.get("/id", require("../controllers/mesaByNumero"));
//ó por body:  {   "numero": 12 }
router.get("/id/:numero", require("../controllers/mesaByNumero"));


//Para ingresar una mesa con el número de dos dígitos entre 10 y 99 y 
//la capacidad de un dígito entre 1 y 9 
//ejemplo { "numero" : 11, "capacidad": 2 }

router.post("/", require("../controllers/mesa_Post"));

//para mostrar mesas
router.get("/", require("../controllers/mesas_All"));

//para actualizar una mesa, debe enviar por body 
router.put("/", require("../controllers/mesaPut"));




module.exports = router 