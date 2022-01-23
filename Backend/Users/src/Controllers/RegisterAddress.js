const Address = require('../Models/Address');
const User = require('../Models/Users');
const {  Types } = require('mongoose');


const registerAddress = async (req, res, next) => {

 try {
   let wantedUser = await User.findById({ _id: req.params.id })

   if (wantedUser) {
     const newAddress = new Address({
       name: req.body.name,
       description: req.body.description,
       userId: Types.ObjectId(wantedUser._id)
     })

     wantedUser.address = [...wantedUser.address, newAddress._id]
     await wantedUser.save()
     await newAddress.save();
     res.json({ message: 'Direccion registrada' })
   }
   else {
     res.status(201).send({ message: 'No se encontro usuario registrado' })
   }
 } catch (error) {
   console.log(error);
   next(error);
 }
}



module.exports = registerAddress;