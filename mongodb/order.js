const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    ref: "auths",
  },
  phone: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  medicine: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "medicines",
  },
  amount: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  price: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "medicines",
  },
  status: {
    type: Number,
    require: true,
    enum: [0, 1],
  },
});

module.exports = mongoose.model("orders", orderSchema);
