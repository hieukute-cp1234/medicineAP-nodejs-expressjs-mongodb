const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  role: {
    type: Number,
    enum: [1, 2],
  },
});

UserSchema.methods = {
  comparePass(password) {
    return bcrypt.compare(password, this.password);
  },
};

module.exports = mongoose.model("auths", UserSchema);
