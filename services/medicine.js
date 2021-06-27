const medicine = require('../mongodb/medicine');

const connectMedicine = async () => {
  const medicines = await medicine.find({})
    .populate('element')
    .populate('excipient')
    .populate('recipe.name', ['name']);
  return medicines;
}

module.exports = {
  connectMedicine
};
