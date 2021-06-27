const order = require("../mongodb/order");
const response = require("../helpers/reponse");

const getOrder = async () => {
  return await order
    .find({})
    .populate("medicine", ["name"])
    .populate("price", ["price"]);
};

const postOrder = async (req) => {
  const {
    name,
    email,
    phone,
    address,
    company,
    medicine,
    amount,
    date,
    price,
    status,
  } = req;
  const newOrder = new order({
    name,
    email,
    phone,
    address,
    company,
    medicine,
    amount,
    date,
    price,
    status,
  });
  const result = await order.create(newOrder);
  return response(200, "Order Success!", result);
};

module.exports = {
  getOrder,
  postOrder,
};
