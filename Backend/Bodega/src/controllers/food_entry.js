
const  db = require("../models/index");
const entry = async (req, res) => {
    const aliment= db.aliment; 
    const { name, ubicacion, unidad_de_medida, cantidad }= req.body ;
    try {
        const newIput= await aliment.create({
            name,
            ubicacion , 
            unidad_de_medida, 
            cantidad
        });
        return res.json(newIput);
    } catch (error) {
        return res.send(error);
    }
   
}

module.exports = entry;