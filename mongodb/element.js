const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const elementSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    require: true,
  },
  status:{
    type:Number,
    required: true,
    enum: [0, 1],
  }
});

module.exports = mongoose.model('elements', elementSchema);
