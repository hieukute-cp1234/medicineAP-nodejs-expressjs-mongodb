const mongoose = require('mongoose');
const CONST = require('./constans');

const connectDB = async () => {
  try {
    await mongoose.connect(CONST.DB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

module.exports = connectDB;
