const  db = require("../models/index");

const entry = async (req, res) => {
    
    const mesa= db.mesa;
    const usertable = db.usertable;
    
    let { 
        numero,       
        capacidad,  
    }= req.body ;
    numero=numero*1;
    capacidad= capacidad*1;
    if(capacidad<1 || capacidad>9 || !capacidad)return res.json({
        menssage: " La capacidad debe ser de 1 a 9 "}); 
    if(numero<10)return res.json({
        menssage: " El numero debe ser mayor que 10 y unico  "}); 
    numero=numero.toString() ;
    try {
        
        let newIput= await mesa.create({
            numero,       
            capacidad,               
        });
        return res.json(newIput);
    } catch (error) {
        return res.json({menssage: " El numero debe ser mayor que 10 y unico  ", error});

    }  
}

module.exports = entry;
