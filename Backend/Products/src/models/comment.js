const { Schema, model } = require("mongoose")
const ObjectId = Schema.ObjectId;


const commentSchema = new Schema({
  product_id: { type: ObjectId },
  title: { type: String },
  comment: { type: String },
  email: { type: String },
  avatar: { type: String },
  timestamps: { type: Date, default: Date.now() }
});

module.exports = model("Comment", commentSchema)