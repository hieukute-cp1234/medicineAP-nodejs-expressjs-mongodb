const step = require('../mongodb/stepConstructive');

const getStep = async () => {
  return await step.find({});
};

module.exports = {
  getStep
};
