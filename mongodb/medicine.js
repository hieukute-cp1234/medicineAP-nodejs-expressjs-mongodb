const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  element: {
    type: Array,
    ref: "elements",
    require: true,
  },
  excipient: {
    type: Array,
    ref: "elements",
  },
  recipe: {
    type: Array,
    ref: "elements",
    require: true,
  },
  status: {
    type: Number,
    require: true,
    enum: [0, 1],
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("medicines", medicineSchema);
