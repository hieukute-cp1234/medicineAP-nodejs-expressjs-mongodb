const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { data: payload },
      process.env.ACCESS_TOKEN_SECRET,
      {
        algorithm: 'HS256',
        expiresIn: process.env.ACCESS_TOKEN_LIFE
      }, (err, token) => {
        if (err) {
          reject(err)
        }
        resolve(token)
      }
    )
  })
};

const verityToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verity(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    })
  })
}

module.exports = {
  generateToken,
  verityToken
};
