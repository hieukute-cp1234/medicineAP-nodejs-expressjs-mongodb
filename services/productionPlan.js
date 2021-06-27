const plan = require("../mongodb/productionPlan");
const response = require("../helpers/reponse");

const getPlan = async () => {
  return await plan.find({}).populate("medicine", ["name", "recipe"]);
};

const postPlan = async (req) => {
  const { name, medicine, amount, duaDate, status } = req;

  const checkPlan = await plan.findOne({
    $and: [
      { medicine: medicine },
      {
        $or: [{ status: 0 }, { status: 1 }],
      },
    ],
  });
  if (checkPlan) return response(400, "The plan is working", null);

  const newPlan = {
    name: name,
    medicine: medicine,
    amount: amount,
    duaDate: duaDate,
    status: status,
  };

  const result = await plan.create(newPlan);
  return response(200, "Create Success!", result);
};

const putPlan = async (req) => {
  const { medicine, _id } = req.body;

  const checkPlan = await plan.findOne({
    $and: [
      { medicine: medicine },
      {
        $or: [{ status: 0 }, { status: 1 }],
      },
    ],
  });
  if (checkPlan) {
    const isIdPlan = checkPlan && checkPlan._id == _id;
    if (!isIdPlan)
      return response(400, "There's another plan in the works!", null);
  }

  const editPlan = await plan.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  return response(200, "Edit success!", editPlan);
};

module.exports = {
  getPlan,
  postPlan,
  putPlan,
};
