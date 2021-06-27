const reponse = require('../helpers/reponse');
const { medicineService } = require('../services');

const handleGet = async (req, res) => {
  try {
    const response = await medicineService.connectMedicine();
    res.json(reponse(200, null, response));
  } catch (error) {
    res.json(reponse(null, error.message, null));
  }
};

module.exports = {
  handleGet
};
