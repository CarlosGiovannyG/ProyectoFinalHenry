const  db = require("../models/index");

const entry = async (req, res) => {
    
    return res.json("Estoy en el Put");
    const mesa= db.mesa;
    const { 
        numero,       
        capacidad, 
    }= req.body ;
    try {
        
        const newIput= await mesa.update({
            numero,  
            capacidad,             
        }, {where: {
            numero: numero
          }});
        return res.json(newIput);
    } catch (error) {
        return res.send(error);
    }  
}

module.exports = entry;
