const reponse = require("../helpers/reponse");
const { processService } = require("../services");

const handleGet = async (req, res) => {
  try {
    const process = await processService.getProcess();
    res.json(reponse(200, null, process));
  } catch (error) {
    res.json(reponse(null, error.message, null));
  }
};

const handlePost = async (req, res) => {
  try {
    const result = await processService.postProcess(req, res);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(response(400, err.message, null));
  }
};

module.exports = {
  handleGet,
  handlePost,
};
