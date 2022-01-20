const  db = require("../models/index");

const entry = async (req, res) => {
    console.log("Estoy en el Put");
    const aliment= db.aliment;
    const { id,name, ubicacion, unidad_de_medida, cantidad }= req.body ;
    try {
        console.log("En el try catch del put");
        const newIput= await aliment.update({
            name, ubicacion, unidad_de_medida, cantidad                         
        }, {where: {
            id: id
          }});
        return res.json(newIput);
    } catch (error) {
        return res.send(error);
    }  
}

module.exports = entry;
