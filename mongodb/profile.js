const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
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
});

module.exports = mongoose.model("profiles", profileSchema);
