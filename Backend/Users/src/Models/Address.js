const { Schema, model, Types } = require('mongoose');

const AddressSchema = new Schema({

  name: {
    type: String,
  },
  street: {
    type: String,
  },
  number: {
    type: String,
  },
  city: {
    type: String,
  },
  userId: {
    type: Types.ObjectId,
  },
  
}, {
  versionKey: false
});



const Address = model('address', AddressSchema);


module.exports = Address;