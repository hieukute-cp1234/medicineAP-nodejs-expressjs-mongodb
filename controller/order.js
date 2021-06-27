const response = require("../helpers/reponse");
const { orderService } = require("../services");

const handleGet = async (req, res) => {
  try {
    const profile = await orderService.getOrder();
    res.json(response(200, null, profile));
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

const handlePost = async (req, res) => {
  try {
    const newProfile = await orderService.postOrder(req.body);
    res.json(newProfile);
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

module.exports = {
  handleGet,
  handlePost,
};
