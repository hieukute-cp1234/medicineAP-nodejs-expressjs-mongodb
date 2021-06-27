const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stepSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  decription: {
    type: String,
    require: true,
  },
  status:{
    type:Number,
    require: true,
    enum: [0, 1, 2],
  }
});

module.exports = mongoose.model('steps', stepSchema);
