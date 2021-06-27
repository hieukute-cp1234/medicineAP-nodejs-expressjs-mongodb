const profiles = require("../mongodb/profile");
const response = require("../helpers/reponse");

const getProfile = async () => {
  return await profiles.find({});
};

const postProfile = async (req) => {
  const { name, email, phone, address, company } = req;
  const newProfile = new profiles({ name, email, phone, address, company });
  const result = await profiles.create(newProfile);
  return response(200, "Create Success!", result);
};

const putProfile = async (req) => {
  const { phone } = req.body;
  if (phone.length < 10)
    return response(400, "TelePhone number invalid!", null);
  const editProfile = await profiles.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  return response(200, "Edit success!", editProfile);
};

module.exports = {
  getProfile,
  postProfile,
  putProfile,
};
