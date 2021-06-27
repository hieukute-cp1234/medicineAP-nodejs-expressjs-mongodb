const user = require("../mongodb/user");
const response = require("../helpers/reponse");
const { messageAuth } = require("../constans/auth");
const JWT = require("../helpers/jwt");
const bcrypt = require("bcrypt");

const register = async (data) => {
  const { email, password, name, role } = data;
  const checkEmail = await user.findOne({ email: email });

  if (checkEmail) {
    return response(400, messageAuth.register_email, null);
  }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const handlePass = bcrypt.hashSync(password, salt);

  const newUser = {
    email: email,
    password: handlePass,
    name: name,
    role: role,
  };

  const result = await user.create(newUser);
  return response(200, messageAuth.register_success, result);
};

const login = async (data) => {
  const { email, password } = data;

  const checkEmail = await user.findOne({ email: email });
  if (!checkEmail) {
    return response(400, messageAuth.email_exists, null);
  }

  const emails = await user.findOne({ email: email });
  const checkPassword = await emails.comparePass(password);
  if (!checkPassword) {
    return response(400, messageAuth.password_wrong, null);
  }

  const token = await JWT.generateToken(email._id);
  const dataUser = {
    token: token,
    name: emails.name,
    role: emails.role,
    email: email,
  };
  return response(200, messageAuth.login_success, dataUser);
};

module.exports = {
  register,
  login,
};
