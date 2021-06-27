const element = require("../mongodb/element");

const getElement = async () => {
  return await element.find({});
};

const addElement = async (name, amount, status) => {
  const newElement = new element({ name, amount, status });
  await newElement.save();
  return newElement;
};

module.exports = {
  getElement,
  addElement,
};
