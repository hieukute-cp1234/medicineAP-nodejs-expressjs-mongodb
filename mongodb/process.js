const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const processSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  medicine: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "medicines",
  },
  step: {
    type: Array,
    ref: "steps",
  },
  status: {
    type: Number,
    enum: [0, 1],
  },
});

module.exports = mongoose.model("processes", processSchema);
