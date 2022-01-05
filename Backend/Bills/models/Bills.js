const mongoose = require("mongoose");

const BillsSchema = new mongoose.Schema(
  {
    idUser: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    products: [],
    status: {
      type: String,
      default: "Open",
    },
    date: {
        type: Date,
        default: Date.now()
    },
    subTotal: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    numeroMesa : {
      type: Number,
      default: 0
    },
    tipoDePedido: {
      type: String,
      required: true,
    },
    statusCocina: {
      type: String,
      default: "Open" 
    }

   
  },
  { timestamps: false }
);

module.exports = mongoose.model("Bills", BillsSchema);


// modelococina: id usuario, productos {}, mesa,  