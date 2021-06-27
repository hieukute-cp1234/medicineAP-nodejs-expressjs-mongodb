const response = require('../helpers/reponse');
const { authService } = require('../services');

const register = async (req, res) => {
  try {
    const data = req.body;
    const users = await authService.register(data);
    res.json(users);
  } catch (error) {
    res.json(response(null, error.message, null));
  }
}

const handleLogin = async (req, res) => {
  try {
    const data = req.body;
    const resuslt = await authService.login(data);
    res.json(resuslt);
  } catch (err) {
    res.status(500).json(response(400, err.message, null));
  }
};

module.exports = {
  register,
  handleLogin
}
