const reponse = require('../helpers/reponse');
const { stepService } = require('../services');

const handleGet = async (req, res) => {
  try {
    const step = await stepService.getStep();
    res.json(reponse(200, null, step));
  } catch (error) {
    res.json(reponse(null, error.message, null));
  }
};

module.exports = {
  handleGet
};
