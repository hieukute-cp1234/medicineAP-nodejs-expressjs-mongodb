const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  medicine: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'medicines'
  },
  amount: {
    type: Number,
    require: true,
  },
  duaDate: {
    type: Date,
    require: true,
  },
  status: {
    type: Number,
    require: true,
    enum: [0, 1, 2],
  }
});

module.exports = mongoose.model('plans', planSchema);
