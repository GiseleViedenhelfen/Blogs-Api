const jwt = require('jsonwebtoken');
const { user } = require('../src/database/models');

const JWT_SECRET = process.env.JWT_SECRET || 'seusecretdetoken';

// const login = (req, res) => {
//   const jwtConfig = {
//     expiresIn: '7d',
//     algorithm: 'HS256',
//   };
//   const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
//   res.status(200).json({ token });
// };
const createUser = (req, res) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  res.status(201).json({ token });
};
module.exports = { createUser };