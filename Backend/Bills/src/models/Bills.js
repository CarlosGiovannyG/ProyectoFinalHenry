const mongoose = require("mongoose");
let fecha = new Date()
fecha = fecha.toLocaleString('es')

const BillsSchema = new mongoose.Schema(
  {
    idUser: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "Generada por sistema",
    },
    products: [],
    status: {
      type: String,
      default: "Open",
    },
    date: {
      type: String,
      default: fecha
    },
    subTotal: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    numeroMesa: {
      type: Number,
      default: 0
    },
    tipoDePedido: {
      type: String,
      required: true,
    },
    direccionEntrega: {
      type: String,
    },
    statusCocina: {
      type: String,
      default: "Open"
    },
    fechaEntrega: {
      type: String,
      default: fecha,
      required: true
    },
    importancia: {
      type: String,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Bills", BillsSchema);


// modelococina: id usuario, productos {}, mesa,  