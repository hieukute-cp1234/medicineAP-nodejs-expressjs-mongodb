const response = require("../helpers/reponse");
const { elementService } = require("../services");

const handleGet = async (req, res) => {
  try {
    const elements = await elementService.getElement();
    res.json(response(200, null, elements));
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

const handlePost = async (req, res) => {
  const { name, amount, status } = req.body;
  try {
    const newElement = await elementService.addElement(name, amount, status);
    res.json(response(200, "Create success!", newElement));
  } catch (err) {
    res.status(500).json(response(400, err.message, null));
  }
};

module.exports = {
  handleGet,
  handlePost,
};
