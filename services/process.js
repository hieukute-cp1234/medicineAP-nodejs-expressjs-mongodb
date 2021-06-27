const response = require("../helpers/reponse");
const process = require("../mongodb/process");

const getProcess = async () => {
  const processes = await process
    .find({})
    .populate("medicine", ["name"])
    .populate("step");
  return processes;
};

const postProcess = async (req, res) => {
  const { name, medicine, step, status } = req.body;

  if (!name || !medicine || !step || !status)
    return response(401, "Data cannot be empty!", null);
  if (status === 0) return response(402, "Status is always ready!", null);

  const idMedicine = await process.findOne({ medicine: medicine });
  if (idMedicine) return response(403, "Process medicine already exist!", null);

  const newProcess = {
    name: name,
    medicine: medicine,
    step: step,
    status: status,
  };

  const result = await process.create(newProcess);
  return response(200, "Create success!", result);
};

module.exports = {
  getProcess,
  postProcess,
};
