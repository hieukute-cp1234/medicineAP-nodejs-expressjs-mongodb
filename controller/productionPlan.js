const response = require("../helpers/reponse");
const { productionPlanService } = require("../services");

const handleGet = async (req, res) => {
  try {
    const plan = await productionPlanService.getPlan();
    res.json(response(200, null, plan));
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

const handlePost = async (req, res) => {
  try {
    const newPlan = await productionPlanService.postPlan(req.body);
    res.json(newPlan);
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

const handlePut = async (req, res) => {
  try {
    const newPlan = await productionPlanService.putPlan(req);
    res.json(newPlan);
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

module.exports = {
  handleGet,
  handlePost,
  handlePut,
};
