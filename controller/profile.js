const response = require("../helpers/reponse");
const { profileService } = require("../services");

const handleGet = async (req, res) => {
  try {
    const profile = await profileService.getProfile();
    res.json(response(200, null, profile));
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

const handlePost = async (req, res) => {
  try {
    const newProfile = await profileService.postProfile(req.body);
    res.json(newProfile);
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

const handlePut = async (req, res) => {
  try {
    const newProfile = await profileService.putProfile(req);
    res.json(newProfile);
  } catch (error) {
    res.json(response(null, error.message, null));
  }
};

module.exports = {
  handleGet,
  handlePost,
  handlePut,
};
