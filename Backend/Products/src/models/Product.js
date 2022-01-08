const { Schema, model } = require("mongoose")

const modelrafa = new Schema({
    name: { type: String },
    description: { type: String },
    category: { type: String },
    price: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    image: { type: String },
    public_id: { type: String },
    id_autor: { type: String },
    timestamps: { type: Date, default: Date.now() }
});

module.exports = model("Produc", modelrafa)